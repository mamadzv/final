const API_URL = 'http://127.0.0.1:8000';

async function fetchData(url, options = {}) {
    const response = await fetch(url, options);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
}

async function getStudents() {
    return fetchData(`${API_URL}/students`);
}

async function getStudent(stid) {
    return fetchData(`${API_URL}/students/${stid}`);
}

async function createStudent(student) {
    return fetchData(`${API_URL}/students`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(student)
    });
}

async function updateStudent(stid, student) {
    return fetchData(`${API_URL}/students/${stid}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(student)
    });
}

async function deleteStudent(stid) {
    return fetchData(`${API_URL}/students/${stid}`, { method: 'DELETE' });
}

// Similar functions for professors and courses

async function getProfessors() {
    return fetchData(`${API_URL}/professors`);
}

async function getProfessor(lid) {
    return fetchData(`${API_URL}/professors/${lid}`);
}

async function createProfessor(professor) {
    return fetchData(`${API_URL}/professors`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(professor)
    });
}

async function updateProfessor(lid, professor) {
    return fetchData(`${API_URL}/professors/${lid}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(professor)
    });
}

async function deleteProfessor(lid) {
    return fetchData(`${API_URL}/professors/${lid}`, { method: 'DELETE' });
}

async function getCourses() {
    return fetchData(`${API_URL}/courses`);
}

async function getCourse(cid) {
    return fetchData(`${API_URL}/courses/${cid}`);
}

async function createCourse(course) {
    return fetchData(`${API_URL}/courses`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(course)
    });
}

async function updateCourse(cid, course) {
    return fetchData(`${API_URL}/courses/${cid}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(course)
    });
}

async function deleteCourse(cid) {
    return fetchData(`${API_URL}/courses/${cid}`, { method: 'DELETE' });
}
