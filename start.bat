@echo off
title AetherPDF - Starting In-Browser PDF Suite
echo =======================================================
echo          Launching AetherPDF Ultra Suite
echo =======================================================
echo.
echo Starting local web server on http://localhost:8080 ...
start "" "http://localhost:8080"
python -m http.server 8080
if %errorlevel% neq 0 (
    echo Python server failed to start, opening directly in browser...
    start "" "%~dp0index.html"
)
pause
