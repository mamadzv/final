
# University Management System

A simple web-based application for managing students, professors, and courses in a university. The backend is built with FastAPI and SQLite, and the frontend is built with plain HTML, CSS, and JavaScript.

## Features

- User authentication with JWT
- CRUD operations for students, professors, and courses
- User registration and login
- Protected routes accessible only to authenticated users

## Prerequisites

- Python 3.7+
- Node.js (optional, for running a development server for the frontend)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/university-management-system.git
   cd university-management-system
   ```

2. Create and activate a virtual environment:

   ```bash
   python -m venv env
   source env/bin/activate  # On Windows use `env\Scriptsctivate`
   ```

3. Install the required Python packages:

   ```bash
   pip install -r requirements.txt
   ```

## Backend Setup

1. Run the FastAPI server:

   ```bash
   uvicorn app.main:app --reload
   ```

   The backend server will be running at `http://127.0.0.1:8000`.

2. Ensure CORS is configured properly to allow requests from the frontend.

## Frontend Setup

1. Navigate to the `frontend` directory:

   ```bash
   cd frontend
   ```

2. You can use any simple HTTP server to serve the frontend files. For example, using Python's built-in HTTP server:

   ```bash
   python -m http.server 8001
   ```

   The frontend will be available at `http://127.0.0.1:8001`.

## Usage

1. Open your browser and go to `http://127.0.0.1:8001`.

2. Register a new user and log in.

3. After logging in, you can access the management system to add, update, or delete students, professors, and courses.

## Project Structure

```
university-management-system/
├── app/
│   ├── __init__.py
│   ├── main.py
│   ├── models.py
│   ├── database.py
│   ├── crud.py
│   ├── schemas.py
│   ├── routers/
│   │   ├── __init__.py
│   │   ├── student.py
│   │   ├── professor.py
│   │   └── course.py
├── frontend/
│   ├── index.html
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   ├── api.js
│   │   ├── main.js
│   │   ├── students.js
│   │   ├── professors.js
│   │   ├── courses.js
│   │   └── auth.js
└── requirements.txt
```

## Environment Variables

Create a `.env` file in the root directory to store environment variables like the secret key for JWT.

```
SECRET_KEY=your_secret_key
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
