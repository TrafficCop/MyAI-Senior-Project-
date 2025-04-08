import firebase_admin
from firebase_admin import credentials, firestore, auth
from fastapi import Request, HTTPException
from typing import Dict

firebase_creds = {

}

cred = credentials.Certificate(firebase_creds)
firebase_admin.initialize_app(cred)
db = firestore.Client()


async def verify_firebase_token(request: Request) -> Dict:
    """Middleware to verify Firebase ID token from Authorization header."""
    auth_header = request.headers.get("Authorization")

    if not auth_header or not auth_header.startswith("Bearer "):
        raise HTTPException(status_code=401, detail="Unauthorized")

    id_token = auth_header.split("Bearer ")[1]

    try:
        decoded_token = auth.verify_id_token(id_token)
        return decoded_token  # Return the decoded user info
    except Exception as e:
        raise HTTPException(status_code=401, detail=f"Invalid token: {str(e)}")
