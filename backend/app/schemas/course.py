from pydantic import BaseModel

class CourseCreate(BaseModel):
    name: str
    teacher: str

class CourseResponse(BaseModel):
    id: int
    name: str
    teacher: str

    class Config:
        from_attributes = True  # Use 'from_attributes' instead of 'orm_mode' in Pydantic v2
