from sqlalchemy.orm import Session
from app.database import SessionLocal
from app.models import Course, Teacher, Room
import logging

# Configure logging
logging.basicConfig(level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s")


# ✅ Function to get a new database session
def get_db():
    """Creates a new database session and ensures it closes properly."""
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


# ✅ Function to fetch a course by ID
def get_course_by_id(course_id: int):
    """Fetch a course by its ID."""
    db = SessionLocal()
    try:
        return db.query(Course).filter(Course.id == course_id).first()
    except Exception as e:
        logging.error(f"Error fetching course: {e}")
        return None
    finally:
        db.close()


# ✅ Function to fetch a teacher by ID
def get_teacher_by_id(teacher_id: int):
    """Fetch a teacher by their ID."""
    db = SessionLocal()
    try:
        return db.query(Teacher).filter(Teacher.id == teacher_id).first()
    except Exception as e:
        logging.error(f"Error fetching teacher: {e}")
        return None
    finally:
        db.close()


# ✅ Function to check if a course exists
def is_course_available(course_id: int) -> bool:
    """Check if a course exists in the database."""
    course = get_course_by_id(course_id)
    return course is not None


# ✅ Function to check if a room is available
def is_room_available(room_id: int) -> bool:
    """Check if a room is available in the database."""
    db = SessionLocal()
    try:
        room = db.query(Room).filter(Room.id == room_id).first()
        return room is not None
    except Exception as e:
        logging.error(f"Error checking room availability: {e}")
        return False
    finally:
        db.close()


# ✅ Function to seed initial data (if database is empty)
def seed_database():
    """Seed initial data for Courses and Teachers."""
    db = SessionLocal()
    try:
        if not db.query(Course).first():
            logging.info("Seeding initial courses...")
            courses = [Course(name="Mathematics"), Course(name="Physics"), Course(name="Computer Science")]
            db.add_all(courses)
            db.commit()

        if not db.query(Teacher).first():
            logging.info("Seeding initial teachers...")
            teachers = [Teacher(name="Dr. Smith"), Teacher(name="Dr. Johnson"), Teacher(name="Prof. Davis")]
            db.add_all(teachers)
            db.commit()

    except Exception as e:
        logging.error(f"Error during database seeding: {e}")
        db.rollback()
    finally:
        db.close()


# ✅ Function to execute a database transaction safely
def execute_transaction(db: Session, operation, *args, **kwargs):
    """
    Execute a database operation within a transaction.
    Automatically commits on success and rolls back on failure.
    """
    try:
        result = operation(db, *args, **kwargs)
        db.commit()
        return result
    except Exception as e:
        db.rollback()
        logging.error(f"Transaction failed: {e}")
        return None


# ✅ Example function to delete a course (using transactions)
def delete_course(course_id: int):
    """Delete a course by ID using a transaction."""
    db = SessionLocal()
    try:
        course = db.query(Course).filter(Course.id == course_id).first()
        if course:
            db.delete(course)
            db.commit()
            logging.info(f"Course {course_id} deleted successfully.")
            return True
        else:
            logging.warning(f"Course {course_id} not found.")
            return False
    except Exception as e:
        logging.error(f"Error deleting course: {e}")
        db.rollback()
        return False
    finally:
        db.close()


# ✅ Function to update a course name
def update_course_name(course_id: int, new_name: str):
    """Update the name of a course."""
    db = SessionLocal()
    try:
        course = db.query(Course).filter(Course.id == course_id).first()
        if course:
            course.name = new_name
            db.commit()
            logging.info(f"Course {course_id} updated to {new_name}.")
            return True
        else:
            logging.warning(f"Course {course_id} not found.")
            return False
    except Exception as e:
        logging.error(f"Error updating course name: {e}")
        db.rollback()
        return False
    finally:
        db.close()
