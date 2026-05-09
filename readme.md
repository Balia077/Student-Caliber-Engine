# Student Caliber Engine

Student Caliber Engine is a MERN-stack based institutional resume analytics platform that enables colleges and placement coordinators to upload student resumes in PDF format and generate ATS-based placement readiness analytics using deterministic rule-based logic.

The system does not use AI models or external intelligence APIs for resume scoring. All analysis is fully backend-driven using custom scoring algorithms.

---

# Features

* Bulk PDF Resume Upload
* Rule-Based ATS Resume Analysis
* Batch Calibre Score Generation
* Resume Weakness Detection
* GitHub & LinkedIn Detection
* ATS Readiness Validation
* High-Risk Resume Identification
* Batch Analytics Dashboard
* JWT Authentication
* Downloadable PDF Reports
* Responsive UI
* Production-Ready MERN Stack Architecture

---

# Tech Stack

## Frontend

* React.js
* Tailwind CSS
* Axios
* React Router DOM

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* Multer
* PDF Parse
* PDFKit

## Deployment

* Frontend: Vercel
* Backend: Render
* Database: MongoDB Atlas

---

# Project Structure

```bash
Student-Caliber-Engine/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── middleware/
│   │   ├── services/
│   │   ├── models/
│   │   └── config/
│   │
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

# Installation

# Clone Repository

```bash
git clone https://github.com/your-username/student-caliber-engine.git
```

---

# Backend Setup

```bash
cd backend
npm install
```

## Create .env File

```env
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
```

## Run Backend

```bash
npm run dev
```

Backend runs on:

```bash
http://localhost:5000
```

---

# Frontend Setup

```bash
cd frontend
npm install
```

## Create .env File

```env
VITE_API_URL=http://localhost:5000/api
```

## Run Frontend

```bash
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

# Authentication APIs

## Register User

```bash
POST /api/auth/register
```

### Request Body

```json
{
  "name": "Balaram Das",
  "email": "test@gmail.com",
  "password": "123456"
}
```

---

## Login User

```bash
POST /api/auth/login
```

### Request Body

```json
{
  "email": "test@gmail.com",
  "password": "123456"
}
```

---

# Resume APIs

## Upload Resumes

```bash
POST /api/resumes/upload
```

### Form Data

```bash
resumes[] -> PDF Files
```

---

## Generate PDF Report

```bash
GET /api/resumes/report
```

---

# ATS Scoring Logic

The system evaluates resumes using deterministic scoring rules.

| Feature                 | Score |
| ----------------------- | ----- |
| Skills Section          | 15    |
| Projects Section        | 15    |
| Education Section       | 10    |
| Experience Section      | 15    |
| GitHub Profile          | 10    |
| LinkedIn Profile        | 10    |
| Quantified Achievements | 10    |
| ATS Resume Length       | 5     |
| Strong Action Words     | 10    |

Total Score = 100

---

# Resume Classification

| Score Range | Status    |
| ----------- | --------- |
| 80+         | Excellent |
| 50–79       | Moderate  |
| Below 50    | High Risk |

---

# Security Features

* JWT Authentication
* Password Hashing
* Protected Routes
* Secure File Upload Validation
* File Type Restrictions
* File Size Limits
* Environment Variable Protection
* CORS Configuration

---

# Deployment

# Backend Deployment

Deploy backend on:

* Render

## Backend Environment Variables

```env
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
```

---

# Frontend Deployment

Deploy frontend on:

* Vercel

## Frontend Environment Variables

```env
VITE_API_URL=https://your-backend-url.onrender.com/api
```

---

# Future Improvements

* OCR Support
* Resume Ranking Engine
* College Dashboard Analytics
* CSV Export Support
* Advanced ATS Parsing
* Resume Heatmaps
* Placement Trend Analytics

---

# AI Usage Disclosure

AI tools were used only for:

* Development guidance
* Debugging assistance
* Architecture planning
* Documentation formatting

No AI or LLM was used in the actual resume scoring engine.

All resume analysis is fully deterministic and backend-driven.

---

# Author

Balaram Das

Full Stack Developer

---

# License

This project is developed for educational and internship evaluation purposes.
