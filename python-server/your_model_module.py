import pickle
import string
import nltk
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
from nltk.stem import PorterStemmer

# Download stopwords and punkt if not already downloaded
nltk.download('stopwords')
nltk.download('punkt')
nltk.download('punkt_tab')
# Load stopwords
stop_words = set(stopwords.words('english'))

# Initialize the stemmer
stemmer = PorterStemmer()

def load_model_and_vectorizer(model_path, vectorizer_path):
    with open(model_path, 'rb') as f:
        model = pickle.load(f)
    with open(vectorizer_path, 'rb') as f:
        vectorizer = pickle.load(f)
    return model, vectorizer

def predict(model, vectorizer, content):
    # Preprocess the content
    features = preprocess_text(content)

    # Convert preprocessed text to numeric features
    features = vectorizer.transform([features])
    
    # Make a prediction
    prediction = model.predict(features)
    print("****************Prediction : ",prediction)
    return {"prediction": "real" if prediction == 1 else "fake"}

def preprocess_text(content):
    # Convert to lowercase
    content = content.lower()
    
    # Remove punctuation
    content = content.translate(str.maketrans('', '', string.punctuation))
    
    # Remove stopwords
    content = ' '.join([word for word in content.split() if word not in stop_words])
    
    # Tokenize text
    content = word_tokenize(content)
    
    # Stem words
    content = [stemmer.stem(word) for word in content]
    
    # Remove non-alphanumeric tokens
    content = [word for word in content if word.isalnum()]
    
    # Join tokens back to a single string
    content = ' '.join(content)
    
    return content

# Load the trained model and vectorizer
# model, vectorizer = load_model_and_vectorizer("models/model_need_vectorization/Logistic_Regression.pkl", "models/model1/tfidf_vectorizer.pkl")



# # Example content to predict
# content = "Top Trump Surrogate BRUTALLY Stabs Him In The Back, Says He’s A ‘Disaster’ For The GOP"

# # Predict the label
# prediction = predict(model, vectorizer, content)
# print(prediction)