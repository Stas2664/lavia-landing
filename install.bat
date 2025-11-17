@echo off
chcp 65001
cd /d "%~dp0"
echo Установка зависимостей...
call npm install
echo.
echo Готово! Запустите dev.bat для старта сервера разработки
pause

