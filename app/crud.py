from sqlalchemy.orm import Session
from . import models, schemas

def get_student(db: Session, stid: int):
    return db.query(models.Student).filter(models.Student.stid == stid).first()

def get_students(db: Session, skip: int = 0, limit: int = 10):
    return db.query(models.Student).offset(skip).limit(limit).all()

def create_student(db: Session, student: schemas.StudentCreate):
    db_student = models.Student(**student.dict())
    db.add(db_student)
    db.commit()
    db.refresh(db_student)
    return db_student

def delete_student(db: Session, stid: int):
    db_student = db.query(models.Student).filter(models.Student.stid == stid).first()
    db.delete(db_student)
    db.commit()
    return db_student

# Repeat similar functions for Professor and Course
