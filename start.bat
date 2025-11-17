@echo off
chcp 65001
cd /d "%~dp0"
echo Запуск production сервера...
echo.
echo Сайт будет доступен по адресу: http://localhost:3000
echo.
call npm start

