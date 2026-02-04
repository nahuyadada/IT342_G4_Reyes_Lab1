@echo off
echo ========================================
echo   IT342 G4 Reyes - Auth Module Starter
echo ========================================
echo.

:: Set Java 17 for Spring Boot
set JAVA_HOME=C:\Users\L13X16W02\.jdks\ms-17.0.18
set PATH=%JAVA_HOME%\bin;%PATH%

echo [1/2] Starting Spring Boot backend...
start "Spring Boot Backend" cmd /k "cd /d %~dp0backend && mvnw spring-boot:run"

:: Wait a few seconds for backend to start
timeout /t 5 /nobreak > nul

echo [2/2] Starting React frontend...
start "React Frontend" cmd /k "cd /d %~dp0web\mini-app && npm start"

echo.
echo ========================================
echo   Both servers are starting...
echo   Backend: http://localhost:8080
echo   Frontend: http://localhost:3000
echo ========================================
echo.
echo Press any key to exit this window...
pause > nul
