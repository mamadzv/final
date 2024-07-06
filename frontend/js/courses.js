let openedCourseId = null; // وضعیت برای پیگیری اینکه کدام درس باز شده است

async function loadCourses() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h2>Courses</h2>
        <form id="course-form">
            <input type="text" id="cname" placeholder="Course Name" required>
            <input type="text" id="department" placeholder="Department" required>
            <input type="number" id="credit" placeholder="Credit" required>
            <button type="submit">Save</button>
        </form>
        <ul id="course-list"></ul>
        <div id="course-details"></div>
    `;

    const courseForm = document.getElementById('course-form');
    courseForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const course = {
            cname: document.getElementById('cname').value,
            department: document.getElementById('department').value,
            credit: document.getElementById('credit').value
        };

        await createCourse(course);
        loadCourses();
    });

    const courses = await getCourses();
    const courseList = document.getElementById('course-list');
    courses.forEach(course => {
        const li = document.createElement('li');
        li.textContent = `${course.cname}`;
        li.addEventListener('click', () => toggleCourseDetails(course));
        courseList.appendChild(li);
    });
}

async function toggleCourseDetails(course) {
    const content = document.getElementById('course-details');
    if (openedCourseId === course.cid) {
        content.innerHTML = ''; // بستن اطلاعات درس
        openedCourseId = null;
    } else {
        showCourseDetails(course);
        openedCourseId = course.cid;
    }
}

async function showCourseDetails(course) {
    const content = document.getElementById('course-details');
    content.innerHTML = `
        <h3>Course Details</h3>
        <p>Course Name: ${course.cname}</p>
        <p>Department: ${course.department}</p>
        <p>Credit: ${course.credit}</p>
        <button onclick="deleteCourseById(${course.cid})">Delete</button>
        <button onclick="loadCourseForm(${course.cid})">Update</button>
    `;
}

async function deleteCourseById(cid) {
    await deleteCourse(cid);
    loadCourses();
}

async function loadCourseForm(cid) {
    const course = await getCourse(cid);
    const content = document.getElementById('course-details');
    content.innerHTML = `
        <h3>Update Course</h3>
        <form id="update-course-form">
            <input type="text" id="update_cname" value="${course.cname}" required>
            <input type="text" id="update_department" value="${course.department}" required>
            <input type="number" id="update_credit" value="${course.credit}" required>
            <button type="submit">Update</button>
        </form>
    `;

    const updateCourseForm = document.getElementById('update-course-form');
    updateCourseForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const updatedCourse = {
            cname: document.getElementById('update_cname').value,
            department: document.getElementById('update_department').value,
            credit: document.getElementById('update_credit').value
        };

        await updateCourse(cid, updatedCourse);
        loadCourses();
    });
}
