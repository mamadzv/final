let openedProfessorId = null; // وضعیت برای پیگیری اینکه کدام استاد باز شده است

async function loadProfessors() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h2>Professors</h2>
        <form id="professor-form">
            <input type="text" id="first_name" placeholder="First Name" required>
            <input type="text" id="last_name" placeholder="Last Name" required>
            <input type="text" id="id" placeholder="ID" required>
            <input type="text" id="department" placeholder="Department" required>
            <input type="text" id="major" placeholder="Major" required>
            <input type="date" id="birth_date" required>
            <input type="text" id="born_city" placeholder="Born City" required>
            <input type="text" id="address" placeholder="Address" required>
            <input type="text" id="postal_code" placeholder="Postal Code" required>
            <input type="text" id="cphone" placeholder="Cell Phone" required>
            <input type="text" id="hphone" placeholder="Home Phone" required>
            <input type="text" id="lcourse_ids" placeholder="Course IDs (comma-separated)" required>
            <button type="submit">Save</button>
        </form>
        <ul id="professor-list"></ul>
        <div id="professor-details"></div>
    `;

    const professorForm = document.getElementById('professor-form');
    professorForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const professor = {
            first_name: document.getElementById('first_name').value,
            last_name: document.getElementById('last_name').value,
            id: document.getElementById('id').value,
            department: document.getElementById('department').value,
            major: document.getElementById('major').value,
            birth_date: document.getElementById('birth_date').value,
            born_city: document.getElementById('born_city').value,
            address: document.getElementById('address').value,
            postal_code: document.getElementById('postal_code').value,
            cphone: document.getElementById('cphone').value,
            hphone: document.getElementById('hphone').value,
            lcourse_ids: document.getElementById('lcourse_ids').value
        };

        await createProfessor(professor);
        loadProfessors();
    });

    const professors = await getProfessors();
    const professorList = document.getElementById('professor-list');
    professors.forEach(professor => {
        const li = document.createElement('li');
        li.textContent = `${professor.first_name} ${professor.last_name}`;
        li.addEventListener('click', () => toggleProfessorDetails(professor));
        professorList.appendChild(li);
    });
}

async function toggleProfessorDetails(professor) {
    const content = document.getElementById('professor-details');
    if (openedProfessorId === professor.lid) {
        content.innerHTML = ''; // بستن اطلاعات استاد
        openedProfessorId = null;
    } else {
        showProfessorDetails(professor);
        openedProfessorId = professor.lid;
    }
}

async function showProfessorDetails(professor) {
    const content = document.getElementById('professor-details');
    content.innerHTML = `
        <h3>Professor Details</h3>
        <p>First Name: ${professor.first_name}</p>
        <p>Last Name: ${professor.last_name}</p>
        <p>ID: ${professor.id}</p>
        <p>Department: ${professor.department}</p>
        <p>Major: ${professor.major}</p>
        <p>Birth Date: ${professor.birth_date}</p>
        <p>Born City: ${professor.born_city}</p>
        <p>Address: ${professor.address}</p>
        <p>Postal Code: ${professor.postal_code}</p>
        <p>Cell Phone: ${professor.cphone}</p>
        <p>Home Phone: ${professor.hphone}</p>
        <p>Course IDs: ${professor.lcourse_ids}</p>
        <button onclick="deleteProfessorById(${professor.lid})">Delete</button>
        <button onclick="loadProfessorForm(${professor.lid})">Update</button>
    `;
}

async function deleteProfessorById(lid) {
    await deleteProfessor(lid);
    loadProfessors();
}

async function loadProfessorForm(lid) {
    const professor = await getProfessor(lid);
    const content = document.getElementById('professor-details');
    content.innerHTML = `
        <h3>Update Professor</h3>
        <form id="update-professor-form">
            <input type="text" id="update_first_name" value="${professor.first_name}" required>
            <input type="text" id="update_last_name" value="${professor.last_name}" required>
            <input type="text" id="update_id" value="${professor.id}" required>
            <input type="text" id="update_department" value="${professor.department}" required>
            <input type="text" id="update_major" value="${professor.major}" required>
            <input type="date" id="update_birth_date" value="${professor.birth_date}" required>
            <input type="text" id="update_born_city" value="${professor.born_city}" required>
            <input type="text" id="update_address" value="${professor.address}" required>
            <input type="text" id="update_postal_code" value="${professor.postal_code}" required>
            <input type="text" id="update_cphone" value="${professor.cphone}" required>
            <input type="text" id="update_hphone" value="${professor.hphone}" required>
            <input type="text" id="update_lcourse_ids" value="${professor.lcourse_ids}" required>
            <button type="submit">Update</button>
        </form>
    `;

    const updateProfessorForm = document.getElementById('update-professor-form');
    updateProfessorForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const updatedProfessor = {
            first_name: document.getElementById('update_first_name').value,
            last_name: document.getElementById('update_last_name').value,
            id: document.getElementById('update_id').value,
            department: document.getElementById('update_department').value,
            major: document.getElementById('update_major').value,
            birth_date: document.getElementById('update_birth_date').value,
            born_city: document.getElementById('update_born_city').value,
            address: document.getElementById('update_address').value,
            postal_code: document.getElementById('update_postal_code').value,
            cphone: document.getElementById('update_cphone').value,
            hphone: document.getElementById('update_hphone').value,
            lcourse_ids: document.getElementById('update_lcourse_ids').value
        };

        await updateProfessor(lid, updatedProfessor);
        loadProfessors();
    });
}
