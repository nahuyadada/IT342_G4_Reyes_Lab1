# IT342 G4 Reyes Lab 1 — Authentication Module

## Overview
A full-stack authentication system with user registration, login/logout, JWT-based session management, and a protected dashboard.

## Tech Stack
- **Frontend:** React.js (SPA), Axios, React Router
- **Backend:** Spring Boot 4, Spring Security, Spring Data JPA
- **Database:** MySQL (XAMPP)
- **Auth:** BCrypt password hashing, JWT tokens

## Repository Structure
```
backend/          Spring Boot REST API
web/mini-app/     React frontend
mobile/           (reserved for mobile client)
docs/             Project documentation
```

## Prerequisites
- Node.js 18+
- Java 17 (JDK)
- MySQL 8+ (XAMPP recommended)
- Maven (included via wrapper)

## Setup

### Quick Start
1. Start MySQL in XAMPP Control Panel
2. Double-click `start-app.bat` to launch both backend and frontend

### Database
1. Start MySQL in XAMPP Control Panel
2. Database `it342_auth` is auto-created on first run

### Backend (Spring Boot)
```bash
cd backend
# Set JAVA_HOME to JDK 17 if needed
.\mvnw spring-boot:run
```
Runs on http://localhost:8080

### Frontend (React)
```bash
cd web/mini-app
npm install
npm start
```
Runs on http://localhost:3000

## API Endpoints
| Method | Endpoint            | Description              | Auth     |
|--------|---------------------|--------------------------|----------|
| POST   | /api/auth/register  | Register new user        | Public   |
| POST   | /api/auth/login     | Login, returns JWT       | Public   |
| GET    | /api/user/profile   | Get user profile         | Required |
| POST   | /api/auth/logout    | Logout (client clears)   | Required |

## Features
- User registration with validation
- Secure login with BCrypt password verification
- JWT token generation and validation
- Protected routes (frontend and backend)
- CORS configured for localhost:3000

## Contributors
**Group 4 — Reyes**

