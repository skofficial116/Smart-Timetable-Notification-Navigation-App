from fastapi import APIRouter
from .auth import router as auth_router
from .courses import router as courses_router
from .timetable import router as timetable_router
from .rooms import router as rooms_router

router = APIRouter()

router.include_router(auth_router)
router.include_router(courses_router)
router.include_router(timetable_router)
router.include_router(rooms_router)
