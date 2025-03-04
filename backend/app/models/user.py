from sqlalchemy import Column, Integer, String, ForeignKey, DateTime, Boolean
from sqlalchemy.orm import relationship
from app.database import Base
from datetime import datetime


# --------------------- User Model ---------------------
class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    full_name = Column(String, nullable=False)
    email = Column(String, unique=True, nullable=False)
    hashed_password = Column(String, nullable=False)

    # Relationships
    timetables = relationship("Timetable", back_populates="teacher")


# --------------------- Timetable Model ---------------------
class Timetable(Base):
    __tablename__ = "timetables"

    id = Column(Integer, primary_key=True, index=True)
    class_name = Column(String, nullable=False)
    subject = Column(String, nullable=False)
    teacher_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    start_time = Column(DateTime, nullable=False)
    end_time = Column(DateTime, nullable=False)
    building = Column(String, nullable=False)
    floor = Column(Integer, nullable=False)
    room_number = Column(String, ForeignKey("rooms.room_number"), nullable=False)

    # Relationships
    teacher = relationship("User", back_populates="timetables")
    room = relationship("Room", back_populates="timetables")


# --------------------- Room Model ---------------------
class Room(Base):
    __tablename__ = "rooms"

    id = Column(Integer, primary_key=True, index=True)
    room_number = Column(String, unique=True, nullable=False)
    building = Column(String, nullable=False)
    floor = Column(Integer, nullable=False)
    capacity = Column(Integer, nullable=False)
    is_occupied = Column(Boolean, default=False)

    # Relationships
    timetables = relationship("Timetable", back_populates="room")
