from pydantic import BaseModel, validator
from typing import List

class StudentBase(BaseModel):
    first_name: str
    last_name: str
    father_name: str
    birth_date: str
    birth_id: str
    born_city: str
    address: str
    postal_code: str
    cphone: str
    hphone: str
    department: str
    major: str
    married: bool
    course_ids: str
    professor_ids: str

class StudentCreate(StudentBase):
    pass

class StudentUpdate(StudentBase):
    pass

class Student(StudentBase):
    stid: int

    class Config:
        orm_mode = True

class ProfessorBase(BaseModel):
    first_name: str
    last_name: str
    id: str
    department: str
    major: str
    birth_date: str
    born_city: str
    address: str
    postal_code: str
    cphone: str
    hphone: str
    lcourse_ids: str

class ProfessorCreate(ProfessorBase):
    pass

class ProfessorUpdate(ProfessorBase):
    pass

class Professor(ProfessorBase):
    lid: int

    class Config:
        orm_mode = True

class CourseBase(BaseModel):
    cname: str
    department: str
    credit: int

class CourseCreate(CourseBase):
    pass

class CourseUpdate(CourseBase):
    pass

class Course(CourseBase):
    cid: int

    class Config:
        orm_mode = True
