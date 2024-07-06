from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from .. import crud, models, schemas, database

router = APIRouter()

@router.post("/", response_model=schemas.Student)
def create_student(student: schemas.StudentCreate, db: Session = Depends(database.get_db)):
    return crud.create_student(db=db, student=student)

@router.get("/", response_model=List[schemas.Student])
def read_students(skip: int = 0, limit: int = 10, db: Session = Depends(database.get_db)):
    students = crud.get_students(db, skip=skip, limit=limit)
    return students

@router.get("/{stid}", response_model=schemas.Student)
def read_student(stid: int, db: Session = Depends(database.get_db)):
    db_student = crud.get_student(db, stid=stid)
    if db_student is None:
        raise HTTPException(status_code=404, detail="Student not found")
    return db_student

@router.delete("/{stid}", response_model=schemas.Student)
def delete_student(stid: int, db: Session = Depends(database.get_db)):
    db_student = crud.get_student(db, stid=stid)
    if db_student is None:
        raise HTTPException(status_code=404, detail="Student not found")
    return crud.delete_student(db=db, stid=stid)
