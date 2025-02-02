# import json
# from http.server import BaseHTTPRequestHandler, HTTPServer
# from your_model_module import load_model_and_vectorizer, predict
# from flask_cors import CORS 
# # Load your model with the actual file path
# model, vectorizer = load_model_and_vectorizer("models/model_need_vectorization/Logistic_Regression.pkl", "models/model1/tfidf_vectorizer.pkl")

# class RequestHandler(BaseHTTPRequestHandler):
#     def _set_headers(self):
#         self.send_response(200)
#         self.send_header("Content-Type", "application/json")
#         self.end_headers()

#     def do_OPTIONS(self):
#         """Handle preflight request for CORS."""
#         self.send_response(200)
#         self.send_header("Access-Control-Allow-Origin", "*")
#         self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
#         self.send_header("Access-Control-Allow-Headers", "Content-Type")
#         self.end_headers()

#     def do_POST(self):
#         content_length = int(self.headers["Content-Length"])
#         post_data = self.rfile.read(content_length)
#         data = json.loads(post_data.decode("utf-8"))
#         content_type = data.get("type")
#         content = data.get("text")
#         print(content)
#         result = None

#         if content_type == "text":
#             result = predict(model, vectorizer, content)
        
#         self._set_headers()
#         self.wfile.write(json.dumps(result).encode("utf-8"))


# def run(server_class=HTTPServer, handler_class=RequestHandler, port=5000):
#     server_address = ("", port)
#     httpd = server_class(server_address, handler_class)
#     print(f"Starting server on port {port}")
#     httpd.serve_forever()

# if __name__ == "__main__":
#     run(port = 8080)



import json
from http.server import BaseHTTPRequestHandler, HTTPServer
from your_model_module import load_model_and_vectorizer, predict

# Load your model with the actual file path
model, vectorizer = load_model_and_vectorizer("models/model_need_vectorization/Logistic_Regression.pkl", "models/model1/tfidf_vectorizer.pkl")

class RequestHandler(BaseHTTPRequestHandler):
    def _set_headers(self):
        """Set headers for the response."""
        self.send_response(200)
        self.send_header("Content-Type", "application/json")
        # CORS headers to allow cross-origin requests
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()

    def do_OPTIONS(self):
        """Handle preflight request for CORS."""
        self._set_headers()  # Set CORS headers for OPTIONS method

    def do_POST(self):
        """Handle the POST request and prediction logic."""
        content_length = int(self.headers["Content-Length"])
        post_data = self.rfile.read(content_length)
        data = json.loads(post_data.decode("utf-8"))
        content_type = data.get("type")
        content = data.get("text")
        print(content)  # Log received content (for debugging)

        result = None
        if content_type == "text":
            # Make prediction using the loaded model and vectorizer
            result = predict(model, vectorizer, content)

        self._set_headers()
        # Send the result back as JSON
        self.wfile.write(json.dumps({"prediction": result}).encode("utf-8"))

def run(server_class=HTTPServer, handler_class=RequestHandler, port=8080):
    """Start the server."""
    server_address = ("", port)
    httpd = server_class(server_address, handler_class)
    print(f"Starting server on port {port}")
    httpd.serve_forever()

if __name__ == "__main__":
    run(port=8080)  # Start server on port 8080
