document.getElementById('students-link').addEventListener('click', (e) => {
    e.preventDefault();
    loadStudents();
});

document.getElementById('professors-link').addEventListener('click', (e) => {
    e.preventDefault();
    loadProfessors();
});

document.getElementById('courses-link').addEventListener('click', (e) => {
    e.preventDefault();
    loadCourses();
});

// Load students by default
loadStudents();
