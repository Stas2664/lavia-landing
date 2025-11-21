@echo off
chcp 65001
cd /d "%~dp0"
echo Сборка production версии...
call npm run build
echo.
echo Готово! Запустите start.bat для запуска production сервера
pause


