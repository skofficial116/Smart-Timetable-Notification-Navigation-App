import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Secret key for JWT authentication
SECRET_KEY = os.getenv("SECRET_KEY", "your_secret_key")
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 60  # Token expires in 1 hour

# CORS allowed origins (Modify this based on frontend deployment)
ALLOWED_ORIGINS = [
    "http://localhost:3000",  # React Native Metro Server
    "http://127.0.0.1:3000",
    "http://yourfrontend.com"  # Add your deployed frontend domain
]
