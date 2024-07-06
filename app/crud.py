from sqlalchemy.orm import Session
from . import models, schemas
import json

# Student CRUD operations

def get_student(db: Session, stid: int):
    return db.query(models.Student).filter(models.Student.stid == stid).first()

def get_students(db: Session, skip: int = 0, limit: int = 10):
    return db.query(models.Student).offset(skip).limit(limit).all()

def create_student(db: Session, student: schemas.StudentCreate):
    db_student = models.Student(
        first_name=student.first_name,
        last_name=student.last_name,
        father_name=student.father_name,
        birth_date=student.birth_date,
        birth_id=student.birth_id,
        born_city=student.born_city,
        address=student.address,
        postal_code=student.postal_code,
        cphone=student.cphone,
        hphone=student.hphone,
        department=student.department,
        major=student.major,
        married=student.married,
        course_ids=student.course_ids,
        professor_ids=student.professor_ids
    )
    db.add(db_student)
    db.commit()
    db.refresh(db_student)
    return db_student

def update_student(db: Session, stid: int, student: schemas.StudentUpdate):
    db_student = db.query(models.Student).filter(models.Student.stid == stid).first()
    if db_student:
        db_student.first_name = student.first_name
        db_student.last_name = student.last_name
        db_student.father_name = student.father_name
        db_student.birth_date = student.birth_date
        db_student.birth_id = student.birth_id
        db_student.born_city = student.born_city
        db_student.address = student.address
        db_student.postal_code = student.postal_code
        db_student.cphone = student.cphone
        db_student.hphone = student.hphone
        db_student.department = student.department
        db_student.major = student.major
        db_student.married = student.married
        db_student.course_ids = student.course_ids
        db_student.professor_ids = student.professor_ids
        db.commit()
        db.refresh(db_student)
    return db_student

def delete_student(db: Session, stid: int):
    db_student = db.query(models.Student).filter(models.Student.stid == stid).first()
    if db_student:
        db.delete(db_student)
        db.commit()
    return db_student

# Professor CRUD operations

def get_professor(db: Session, lid: int):
    return db.query(models.Professor).filter(models.Professor.lid == lid).first()

def get_professors(db: Session, skip: int = 0, limit: int = 10):
    return db.query(models.Professor).offset(skip).limit(limit).all()

def create_professor(db: Session, professor: schemas.ProfessorCreate):
    db_professor = models.Professor(
        first_name=professor.first_name,
        last_name=professor.last_name,
        id=professor.id,
        department=professor.department,
        major=professor.major,
        birth_date=professor.birth_date,
        born_city=professor.born_city,
        address=professor.address,
        postal_code=professor.postal_code,
        cphone=professor.cphone,
        hphone=professor.hphone,
        lcourse_ids=professor.lcourse_ids
    )
    db.add(db_professor)
    db.commit()
    db.refresh(db_professor)
    return db_professor

def update_professor(db: Session, lid: int, professor: schemas.ProfessorUpdate):
    db_professor = db.query(models.Professor).filter(models.Professor.lid == lid).first()
    if db_professor:
        db_professor.first_name = professor.first_name
        db_professor.last_name = professor.last_name
        db_professor.id = professor.id
        db_professor.department = professor.department
        db_professor.major = professor.major
        db_professor.birth_date = professor.birth_date
        db_professor.born_city = professor.born_city
        db_professor.address = professor.address
        db_professor.postal_code = professor.postal_code
        db_professor.cphone = professor.cphone
        db_professor.hphone = professor.hphone
        db_professor.lcourse_ids = professor.lcourse_ids
        db.commit()
        db.refresh(db_professor)
    return db_professor

def delete_professor(db: Session, lid: int):
    db_professor = db.query(models.Professor).filter(models.Professor.lid == lid).first()
    if db_professor:
        db.delete(db_professor)
        db.commit()
    return db_professor

# Course CRUD operations

def get_course(db: Session, cid: int):
    return db.query(models.Course).filter(models.Course.cid == cid).first()

def get_courses(db: Session, skip: int = 0, limit: int = 10):
    return db.query(models.Course).offset(skip).limit(limit).all()

def create_course(db: Session, course: schemas.CourseCreate):
    db_course = models.Course(
        cname=course.cname,
        department=course.department,
        credit=course.credit
    )
    db.add(db_course)
    db.commit()
    db.refresh(db_course)
    return db_course

def update_course(db: Session, cid: int, course: schemas.CourseUpdate):
    db_course = db.query(models.Course).filter(models.Course.cid == cid).first()
    if db_course:
        db_course.cname = course.cname
        db_course.department = course.department
        db_course.credit = course.credit
        db.commit()
        db.refresh(db_course)
    return db_course

def delete_course(db: Session, cid: int):
    db_course = db.query(models.Course).filter(models.Course.cid == cid).first()
    if db_course:
        db.delete(db_course)
        db.commit()
    return db_course
