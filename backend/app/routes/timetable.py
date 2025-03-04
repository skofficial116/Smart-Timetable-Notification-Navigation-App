from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.models.timetable import Timetable
from app.schemas.timetable import TimetableCreate, TimetableResponse
from app.database import get_db

router = APIRouter(prefix="/timetable", tags=["Timetable"])

@router.post("/", response_model=TimetableResponse)
def create_timetable_entry(entry_data: TimetableCreate, db: Session = Depends(get_db)):
    new_entry = Timetable(
        course_id=entry_data.course_id,
        room_number=entry_data.room_number,
        day=entry_data.day,
        time_slot=entry_data.time_slot
    )
    db.add(new_entry)
    db.commit()
    db.refresh(new_entry)
    return new_entry

@router.get("/", response_model=list[TimetableResponse])
def get_timetable(db: Session = Depends(get_db)):
    return db.query(Timetable).all()
