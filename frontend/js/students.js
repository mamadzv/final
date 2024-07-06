let openedStudentId = null; // وضعیت برای پیگیری اینکه کدام دانشجو باز شده است

async function loadStudents() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h2>Students</h2>
        <form id="student-form">
            <input type="text" id="first_name" placeholder="First Name" required>
            <input type="text" id="last_name" placeholder="Last Name" required>
            <input type="text" id="father_name" placeholder="Father Name" required>
            <input type="date" id="birth_date" required>
            <input type="text" id="birth_id" placeholder="Birth ID" required>
            <input type="text" id="born_city" placeholder="Born City" required>
            <input type="text" id="address" placeholder="Address" required>
            <input type="text" id="postal_code" placeholder="Postal Code" required>
            <input type="text" id="cphone" placeholder="Cell Phone" required>
            <input type="text" id="hphone" placeholder="Home Phone" required>
            <input type="text" id="department" placeholder="Department" required>
            <input type="text" id="major" placeholder="Major" required>
            <div class="married-container">
                <label for="married">Married</label>
                <input type="checkbox" id="married">
            </div>
            <input type="text" id="course_ids" placeholder="Course IDs (comma-separated)" required>
            <input type="text" id="professor_ids" placeholder="Professor IDs (comma-separated)" required>
            <button type="submit">Save</button>
        </form>
        <ul id="student-list"></ul>
        <div id="student-details"></div>
    `;

    const studentForm = document.getElementById('student-form');
    studentForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const student = {
            first_name: document.getElementById('first_name').value,
            last_name: document.getElementById('last_name').value,
            father_name: document.getElementById('father_name').value,
            birth_date: document.getElementById('birth_date').value,
            birth_id: document.getElementById('birth_id').value,
            born_city: document.getElementById('born_city').value,
            address: document.getElementById('address').value,
            postal_code: document.getElementById('postal_code').value,
            cphone: document.getElementById('cphone').value,
            hphone: document.getElementById('hphone').value,
            department: document.getElementById('department').value,
            major: document.getElementById('major').value,
            married: document.getElementById('married').checked,
            course_ids: document.getElementById('course_ids').value,
            professor_ids: document.getElementById('professor_ids').value
        };

        await createStudent(student);
        loadStudents();
    });

    const students = await getStudents();
    const studentList = document.getElementById('student-list');
    students.forEach(student => {
        const li = document.createElement('li');
        li.textContent = `${student.first_name} ${student.last_name}`;
        li.addEventListener('click', () => toggleStudentDetails(student));
        studentList.appendChild(li);
    });
}

async function toggleStudentDetails(student) {
    const content = document.getElementById('student-details');
    if (openedStudentId === student.stid) {
        content.innerHTML = ''; // بستن اطلاعات دانشجو
        openedStudentId = null;
    } else {
        showStudentDetails(student);
        openedStudentId = student.stid;
    }
}

async function showStudentDetails(student) {
    const content = document.getElementById('student-details');
    content.innerHTML = `
        <h3>Student Details</h3>
        <p>First Name: ${student.first_name}</p>
        <p>Last Name: ${student.last_name}</p>
        <p>Father Name: ${student.father_name}</p>
        <p>Birth Date: ${student.birth_date}</p>
        <p>Birth ID: ${student.birth_id}</p>
        <p>Born City: ${student.born_city}</p>
        <p>Address: ${student.address}</p>
        <p>Postal Code: ${student.postal_code}</p>
        <p>Cell Phone: ${student.cphone}</p>
        <p>Home Phone: ${student.hphone}</p>
        <p>Department: ${student.department}</p>
        <p>Major: ${student.major}</p>
        <p>Married: ${student.married}</p>
        <p>Course IDs: ${student.course_ids}</p>
        <p>Professor IDs: ${student.professor_ids}</p>
        <button onclick="deleteStudentById(${student.stid})">Delete</button>
        <button onclick="loadStudentForm(${student.stid})">Update</button>
    `;
}

async function deleteStudentById(stid) {
    await deleteStudent(stid);
    loadStudents();
}

async function loadStudentForm(stid) {
    const student = await getStudent(stid);
    const content = document.getElementById('student-details');
    content.innerHTML = `
        <h3>Update Student</h3>
        <form id="update-student-form">
            <input type="text" id="update_first_name" value="${student.first_name}" required>
            <input type="text" id="update_last_name" value="${student.last_name}" required>
            <input type="text" id="update_father_name" value="${student.father_name}" required>
            <input type="date" id="update_birth_date" value="${student.birth_date}" required>
            <input type="text" id="update_birth_id" value="${student.birth_id}" required>
            <input type="text" id="update_born_city" value="${student.born_city}" required>
            <input type="text" id="update_address" value="${student.address}" required>
            <input type="text" id="update_postal_code" value="${student.postal_code}" required>
            <input type="text" id="update_cphone" value="${student.cphone}" required>
            <input type="text" id="update_hphone" value="${student.hphone}" required>
            <input type="text" id="update_department" value="${student.department}" required>
            <input type="text" id="update_major" value="${student.major}" required>
            <div class="married-container">
                <label for="update_married">Married</label>
                <input type="checkbox" id="update_married" ${student.married ? 'checked' : ''}>
            </div>
            <input type="text" id="update_course_ids" value="${student.course_ids}" required>
            <input type="text" id="update_professor_ids" value="${student.professor_ids}" required>
            <button type="submit">Update</button>
        </form>
    `;

    const updateStudentForm = document.getElementById('update-student-form');
    updateStudentForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const updatedStudent = {
            first_name: document.getElementById('update_first_name').value,
            last_name: document.getElementById('update_last_name').value,
            father_name: document.getElementById('update_father_name').value,
            birth_date: document.getElementById('update_birth_date').value,
            birth_id: document.getElementById('update_birth_id').value,
            born_city: document.getElementById('update_born_city').value,
            address: document.getElementById('update_address').value,
            postal_code: document.getElementById('update_postal_code').value,
            cphone: document.getElementById('update_cphone').value,
            hphone: document.getElementById('update_hphone').value,
            department: document.getElementById('update_department').value,
            major: document.getElementById('update_major').value,
            married: document.getElementById('update_married').checked,
            course_ids: document.getElementById('update_course_ids').value,
            professor_ids: document.getElementById('update_professor_ids').value
        };

        await updateStudent(stid, updatedStudent);
        loadStudents();
    });
}
