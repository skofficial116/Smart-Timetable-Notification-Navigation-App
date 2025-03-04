from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.database import Base, engine
from app.routes import auth, timetable, courses, teachers, rooms
from app.config import ALLOWED_ORIGINS

# Initialize database tables
Base.metadata.create_all(bind=engine)

# Create FastAPI app instance
app = FastAPI(title="College Management API", version="1.0.0")

# CORS Middleware (Allows frontend to access API)
app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,  # Allow specified frontend domains
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include API routes
app.include_router(auth.router, prefix="/auth", tags=["Authentication"])
app.include_router(timetable.router, prefix="/timetable", tags=["Timetable"])
app.include_router(courses.router, prefix="/courses", tags=["Courses"])
app.include_router(teachers.router, prefix="/teachers", tags=["Teachers"])
app.include_router(rooms.router, prefix="/rooms", tags=["Rooms"])

# Root endpoint
@app.get("/")
def home():
    return {"message": "Welcome to the College Management API!"}
