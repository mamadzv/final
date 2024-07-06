from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .database import engine, Base
from .routers import student, professor, course

Base.metadata.create_all(bind=engine)

app = FastAPI()

# اضافه کردن CORS Middleware
origins = [
    "http://127.0.0.1:8001",
    "http://localhost:8001",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(student.router, prefix="/students", tags=["students"])
app.include_router(professor.router, prefix="/professors", tags=["professors"])
app.include_router(course.router, prefix="/courses", tags=["courses"])
