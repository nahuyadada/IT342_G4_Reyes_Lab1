# IT342 G4 Reyes Lab 1 — Authentication Module

## Overview
Full-stack authentication mini app (Web + Mobile) backed by the same Spring Boot + MySQL API.

Features: Register, Login, Protected Dashboard/Profile, Get current user (`/me`), Logout, and JWT-based session handling.

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

### Mobile (Android Kotlin)
- Android Emulator base URL should be `http://10.0.2.2:8080`
- Physical device base URL should be `http://<YOUR_PC_LAN_IP>:8080`

Project files for the Android client live under `mobile/`.

## API Endpoints
| Method | Endpoint            | Description                                  | Auth     |
|--------|---------------------|----------------------------------------------|----------|
| POST   | /api/auth/register  | Register new user                             | Public   |
| POST   | /api/auth/login     | Login, returns JWT                            | Public   |
| GET    | /api/user/me        | Get current user info (`/me`)                 | Required |
| GET    | /api/user/profile   | Alias of `/api/user/me` (kept for compatibility) | Required |
| POST   | /api/auth/logout    | Logout (JWT stateless; client clears token)   | Required |

## Features
- User registration with validation
- Secure login with BCrypt password verification
- JWT token generation and validation
- Protected routes (frontend and backend)
- CORS configured for localhost:3000

## Notes (Auth)
- Passwords are stored as BCrypt hashes (never plain text).
- JWT is stateless: “logout” clears the token on the client.

## Contributors
**G4 — Reyes**

