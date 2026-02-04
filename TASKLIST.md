# IT342 G4 Reyes Lab 1 - Task List

## ✅ Completed Tasks

### Backend (Spring Boot)
- [x] Set up Spring Boot 4.0.2 project with Maven
- [x] Configure MySQL database connection (XAMPP)
- [x] Implement User entity matching ERD
- [x] Create UserRepository with JPA
- [x] Implement BCrypt password encryption
- [x] Create JWT token provider and authentication filter
- [x] Set up Spring Security with CORS configuration
- [x] Implement AuthService business logic
- [x] Create AuthController with endpoints:
  - [x] POST /api/auth/register
  - [x] POST /api/auth/login
  - [x] GET /api/user/profile
  - [x] POST /api/auth/logout
- [x] Add validation for DTOs (RegisterRequest, LoginRequest)
- [x] Configure application.properties with JWT settings

### Web Frontend (ReactJS)
- [x] Set up React 18 project with Create React App
- [x] Install dependencies (axios, react-router-dom)
- [x] Create API service layer with axios interceptors
- [x] Implement authentication service (register, login, logout, getProfile)
- [x] Create ProtectedRoute component for route guarding
- [x] Build Register page with form validation
- [x] Build Login page with error handling
- [x] Build Dashboard/Profile page with user data display
- [x] Implement JWT token storage in localStorage
- [x] Style with modern UI/UX (gradients, cards, responsive)
- [x] Clean up unused boilerplate files

### Project Structure & Documentation
- [x] Create proper folder structure (/backend, /web, /mobile, /docs)
- [x] Write comprehensive README.md with:
  - [x] Project overview
  - [x] Tech stack
  - [x] Repository structure
  - [x] Prerequisites
  - [x] Setup instructions (Quick Start + manual)
  - [x] API endpoints table
  - [x] Features list
- [x] Create start-app.bat for easy startup
- [x] Verify implementation matches SRS diagrams (ERD, Use Case, Activity, Class, Sequence)

---

## 🔲 Pending Tasks

### Mobile App (Android Kotlin)
- [ ] Create Android Kotlin project
- [ ] Set up project structure and dependencies
- [ ] Implement Register screen
- [ ] Implement Login screen
- [ ] Implement Dashboard/Profile screen
- [ ] Implement Logout functionality
- [ ] Create API service layer (Retrofit/OkHttp)
- [ ] Implement JWT token storage (SharedPreferences)
- [ ] Handle authentication state management
- [ ] Test connection to Spring Boot backend
- [ ] Ensure UI matches web design

### Documentation (/docs folder)
- [ ] Create FRS PDF document containing:
  - [ ] ERD diagram
  - [ ] Use Case diagram
  - [ ] Activity diagram
  - [ ] Class diagram
  - [ ] Sequence diagram
  - [ ] Screenshots section:
    - [ ] Web: Register screen
    - [ ] Web: Login screen
    - [ ] Web: Dashboard/Profile screen
    - [ ] Web: Logout functionality
    - [ ] Mobile: Register screen
    - [ ] Mobile: Login screen
    - [ ] Mobile: Dashboard/Profile screen
    - [ ] Mobile: Logout functionality

### README.md Updates
- [ ] Add detailed "Steps to run mobile app" section
- [ ] Add troubleshooting section
- [ ] Verify all API endpoints are documented with examples

### Testing & Quality Assurance
- [ ] Test user registration on web
- [ ] Test user login on web
- [ ] Test protected route access on web
- [ ] Test logout functionality on web
- [ ] Test user registration on mobile
- [ ] Test user login on mobile
- [ ] Test protected screen access on mobile
- [ ] Test logout functionality on mobile
- [ ] Verify password encryption in database
- [ ] Test JWT token expiration handling
- [ ] Verify both web and mobile connect to same backend

### Final Submission
- [ ] Double-check all requirements are met
- [ ] Review code for best practices
- [ ] Ensure no plain text passwords in code or database
- [ ] Verify all diagrams match implementation
- [ ] Submit GitHub repository link to MS Teams
- [ ] Prepare for demo if required

---

## 📝 Notes
- Database: `it342_auth` auto-created on first backend run
- Backend runs on: http://localhost:8080
- Web frontend runs on: http://localhost:3000
- Mobile app should connect to: http://10.0.2.2:8080 (Android emulator) or actual IP for physical device
- JWT secret is configured in application.properties (change for production)

---

## ⚠️ Important Reminders
1. Passwords must be encrypted (✅ BCrypt implemented)
2. Protected pages must not be accessible when logged out (✅ Implemented)
3. Both Web and Mobile must connect to same backend API (🔲 Mobile pending)
4. Follow original diagrams as system blueprint (✅ Verified)
5. Repository must be public (🔲 Needs creation)
6. README must be comprehensive (✅ Done, minor updates needed)
