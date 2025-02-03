# --------------------------
# STEP 1: IMPORTS & SETUP
# --------------------------
import numpy as np
import requests
from fastapi import FastAPI
from pydantic import BaseModel
from config import Config
from bs4 import BeautifulSoup
from pymongo import MongoClient
from datetime import datetime
import re
from typing import List, Dict
import tensorflow as tf
from fastapi.middleware.cors import CORSMiddleware
import google.generativeai as genai
import threading
import os
from bson import ObjectId
# os.environ["CUDA_VISIBLE_DEVICES"] = "-1"

import tensorflow as tf

gpus = tf.config.experimental.list_physical_devices('GPU')
if gpus:
    try:
        for gpu in gpus:
            tf.config.experimental.set_memory_growth(gpu, True)
    except RuntimeError as e:
        print(e)



# --------------------------
# STEP 2: SECURITY & CONFIG
# --------------------------
class Database:
    def __init__(self):
        self.client = MongoClient(Config.MONGO_URI)
        self.db = self.client["misinfo_db"]
        self.claims = self.db.claims
        self._create_indexes()

    def _create_indexes(self):
        self.claims.create_index([("text", "text")])
        self.claims.create_index([("status", 1)])
    
    def insert_claim(self, claim_data: Dict) -> str:
        result = self.claims.insert_one(claim_data)
        return str(result.inserted_id)
    
    def get_unprocessed_claims(self) -> List[Dict]:
        return list(self.claims.find({"status": "unprocessed"}))
    
    def update_claim(self, claim_id: str, update_data: Dict) -> None:
        self.claims.update_one(
            {"_id": ObjectId(claim_id)},
            {"$set": update_data}
        )

class GeminiVerifier:
    def __init__(self):
        self.model = genai.GenerativeModel('gemini-1.5-flash')

    def verify(self, claim: str, evidence: List[Dict]) -> Dict:
        prompt = f"""
        Verify the following claim and provide a response (true/false) with a detailed explanation:
        Claim: "{claim}"
        Evidence: 
        """
        for item in evidence:
            prompt += f"Source: {item['url']} - {item['title']}\nSnippet: {item['snippet']}\nFull Content: {item['content']}\n\n"
        
        prompt+= """ You may also cross check around"""
        response = self.model.generate_content(prompt)
        return {
            "response": response.text
        }

# --------------------------
# STEP 4: EVIDENCE RETRIEVAL SYSTEM
# --------------------------
import requests

class EvidenceFinder:
    def __init__(self):
        self.api_key = "AIzaSyCfuoczkJnVoLMXjpwHii5E-cZvlsMm7c0"  # Replace with your actual API key
        self.cx = "523a8929192a74c8a"  # Replace with your actual CX ID

    def find_evidence(self, claim: str):
        """
        Uses the Google Custom Search API to find evidence for a given claim, returning detailed results.
        """
        url = f"https://www.googleapis.com/customsearch/v1?q={claim}&key={self.api_key}&cx={self.cx}"
        try:
            # Make the API request to the custom search engine
            response = requests.get(url)
            response.raise_for_status()  # Raises an error if the request fails

            # Extract and return detailed results as a list of dictionaries
            results = response.json().get('items', [])
            detailed_results = [
                {
                    "url": item['link'],
                    "title": item.get('title', ''),
                    "snippet": item.get('snippet', ''),
                    "content": self._fetch_page_content(item['link'])  # Get the content from the link
                }
                for item in results[:3]  # Limit to top 3 results
            ]
            return detailed_results

        except Exception as e:
            print(f"Search API Error: {e}")
            return []  # Return empty list if error occurs

    def _fetch_page_content(self, url: str) -> str:
        """
        Fetches and extracts the text content from a given URL.
        """
        try:
            response = requests.get(url, timeout=5)
            soup = BeautifulSoup(response.content, 'html.parser')
            paragraphs = soup.find_all(['p', 'article'])  # Extracts paragraphs and article content
            return ' '.join([p.get_text(strip=True) for p in paragraphs[:3]])  # Join the first 3 paragraphs
        except Exception as e:
            print(f"Error fetching {url}: {str(e)}")  # Log the error
            return ""  # Return empty string if error occurs




# --------------------------
# STEP 6: API INTEGRATION
# --------------------------
app = FastAPI()
db = Database()
evidence_finder = EvidenceFinder()
gemini_verifier = GeminiVerifier()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins (replace with specific origins in production)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ClaimRequest(BaseModel):
    claim: str

@app.post("/check")
async def check_claim(request: ClaimRequest):
    claim = request.claim.strip()

    evidence = evidence_finder.find_evidence(claim)
    
    gemini_response = gemini_verifier.verify(claim, evidence)
    
    claim_data = {
        "claim": claim,
        "gemini_response": gemini_response["response"],
        "evidence": evidence,
        "status": "processed",
        "timestamp": datetime.utcnow()
    }
    claim_id = db.insert_claim(claim_data)
    
    return {
        "id": claim_id,
        "claim": claim,
        "gemini_verification": gemini_response["response"],
        "evidence": evidence
    }
