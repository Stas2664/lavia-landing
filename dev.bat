@echo off
chcp 65001
cd /d "%~dp0"
echo Запуск сервера разработки...
echo.
echo Сайт будет доступен по адресу: http://localhost:3000
echo.
call npm run dev


