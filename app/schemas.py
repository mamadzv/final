from pydantic import BaseModel
from typing import List, Optional

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
    course_ids: List[int]
    professor_ids: List[int]

class StudentCreate(StudentBase):
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
    lcourse_ids: List[int]

class ProfessorCreate(ProfessorBase):
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

class Course(CourseBase):
    cid: int

    class Config:
        orm_mode = True
