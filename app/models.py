from sqlalchemy import Column, Integer, String, Boolean
from .database import Base

class Student(Base):
    __tablename__ = "students"

    stid = Column(Integer, primary_key=True, index=True)
    first_name = Column(String, index=True)
    last_name = Column(String, index=True)
    father_name = Column(String)
    birth_date = Column(String)
    birth_id = Column(String)
    born_city = Column(String)
    address = Column(String)
    postal_code = Column(String)
    cphone = Column(String)
    hphone = Column(String)
    department = Column(String)
    major = Column(String)
    married = Column(Boolean)
    course_ids = Column(String)
    professor_ids = Column(String)

class Professor(Base):
    __tablename__ = "professors"

    lid = Column(Integer, primary_key=True, index=True)
    first_name = Column(String, index=True)
    last_name = Column(String, index=True)
    id = Column(String)
    department = Column(String)
    major = Column(String)
    birth_date = Column(String)
    born_city = Column(String)
    address = Column(String)
    postal_code = Column(String)
    cphone = Column(String)
    hphone = Column(String)
    lcourse_ids = Column(String)

class Course(Base):
    __tablename__ = "courses"

    cid = Column(Integer, primary_key=True, index=True)
    cname = Column(String, index=True)
    department = Column(String)
    credit = Column(Integer)
