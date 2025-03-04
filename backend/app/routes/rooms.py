from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.models.timetable import Timetable
from app.database import get_db

router = APIRouter(prefix="/rooms", tags=["Rooms"])

@router.get("/availability/{room_number}")
def check_room_availability(room_number: str, db: Session = Depends(get_db)):
    booked_slots = db.query(Timetable).filter(Timetable.room_number == room_number).all()
    if not booked_slots:
        return {"message": f"Room {room_number} is available all day."}
    
    occupied_times = [slot.time_slot for slot in booked_slots]
    return {"message": f"Room {room_number} is occupied during {occupied_times}"}
