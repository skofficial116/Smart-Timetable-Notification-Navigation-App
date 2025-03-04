from pydantic import BaseModel

class TimetableCreate(BaseModel):
    course_id: int
    room_number: str
    day: str
    time_slot: str

class TimetableResponse(BaseModel):
    id: int
    course_id: int
    room_number: str
    day: str
    time_slot: str

    class Config:
        from_attributes = True
