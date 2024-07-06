from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from .. import crud, models, schemas, database

router = APIRouter()

@router.post("/", response_model=schemas.Professor)
def create_professor(professor: schemas.ProfessorCreate, db: Session = Depends(database.get_db)):
    return crud.create_professor(db=db, professor=professor)

@router.get("/", response_model=List[schemas.Professor])
def read_professors(skip: int = 0, limit: int = 10, db: Session = Depends(database.get_db)):
    professors = crud.get_professors(db, skip=skip, limit=limit)
    return professors

@router.get("/{lid}", response_model=schemas.Professor)
def read_professor(lid: int, db: Session = Depends(database.get_db)):
    db_professor = crud.get_professor(db, lid=lid)
    if db_professor is None:
        raise HTTPException(status_code=404, detail="Professor not found")
    return db_professor

@router.delete("/{lid}", response_model=schemas.Professor)
def delete_professor(lid: int, db: Session = Depends(database.get_db)):
    db_professor = crud.get_professor(db, lid=lid)
    if db_professor is None:
        raise HTTPException(status_code=404, detail="Professor not found")
    return crud.delete_professor(db=db, lid=lid)
