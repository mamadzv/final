from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from .. import crud, models, schemas, database

router = APIRouter()

@router.post("/", response_model=schemas.Course)
def create_course(course: schemas.CourseCreate, db: Session = Depends(database.get_db)):
    return crud.create_course(db=db, course=course)

@router.get("/", response_model=List[schemas.Course])
def read_courses(skip: int = 0, limit: int = 10, db: Session = Depends(database.get_db)):
    courses = crud.get_courses(db, skip=skip, limit=limit)
    return courses

@router.get("/{cid}", response_model=schemas.Course)
def read_course(cid: int, db: Session = Depends(database.get_db)):
    db_course = crud.get_course(db, cid=cid)
    if db_course is None:
        raise HTTPException(status_code=404, detail="Course not found")
    return db_course

@router.delete("/{cid}", response_model=schemas.Course)
def delete_course(cid: int, db: Session = Depends(database.get_db)):
    db_course = crud.get_course(db, cid=cid)
    if db_course is None:
        raise HTTPException(status_code=404, detail="Course not found")
    return crud.delete_course(db=db, cid=cid)
