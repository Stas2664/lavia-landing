# 🚀 Руководство по деплою лендинга "Лавия"

## Вариант 1: Деплой на Vercel (Рекомендуется) ⭐

Vercel - лучшая платформа для Next.js проектов. Бесплатный план включает:
- ✅ Безлимитный bandwidth
- ✅ Автоматический SSL сертификат
- ✅ CDN по всему миру
- ✅ Автоматические деплои из GitHub

### Шаг 1: Создайте аккаунт
1. Перейдите на [vercel.com](https://vercel.com)
2. Нажмите "Sign Up"
3. Войдите через GitHub

### Шаг 2: Подготовка репозитория
```bash
# В командной строке перейдите в папку проекта
cd C:\Users\Admin\Desktop\сайт\lavia-landing

# Инициализируйте git (если еще не сделано)
git init

# Добавьте файлы
git add .

# Создайте первый коммит
git commit -m "Initial commit: Lavia landing page"
```

### Шаг 3: Загрузите на GitHub
1. Создайте новый репозиторий на [github.com](https://github.com/new)
2. Назовите его `lavia-landing`
3. Выполните команды:
```bash
git remote add origin https://github.com/ВАШ_USERNAME/lavia-landing.git
git branch -M main
git push -u origin main
```

### Шаг 4: Деплой на Vercel
1. На Vercel нажмите "Add New Project"
2. Выберите репозиторий `lavia-landing`
3. Framework Preset: **Next.js** (выбирается автоматически)
4. Нажмите **"Deploy"**
5. Подождите 2-3 минуты ☕

### Шаг 5: Готово! 🎉
Ваш сайт будет доступен по адресу:
```
https://lavia-landing.vercel.app
```

---

## Вариант 2: Деплой на Netlify

### Преимущества:
- Простой интерфейс
- Бесплатный SSL
- Автоматические деплои

### Шаг 1: Создайте аккаунт
1. Перейдите на [netlify.com](https://www.netlify.com)
2. Зарегистрируйтесь через GitHub

### Шаг 2: Подключите репозиторий
1. Нажмите "Add new site" → "Import an existing project"
2. Выберите GitHub
3. Выберите репозиторий `lavia-landing`

### Шаг 3: Настройки сборки
- **Build command**: `npm run build`
- **Publish directory**: `.next`

### Шаг 4: Deploy
Нажмите "Deploy site" и подождите

---

## Вариант 3: Деплой на Railway

### Преимущества:
- Поддержка баз данных
- Легкий деплой
- $5 бесплатно в месяц

### Шаги:
1. Перейдите на [railway.app](https://railway.app)
2. Войдите через GitHub
3. Нажмите "New Project"
4. Выберите "Deploy from GitHub repo"
5. Выберите ваш репозиторий
6. Railway автоматически определит Next.js

---

## Вариант 4: Собственный хостинг (VPS)

### Требования:
- VPS сервер (Ubuntu/Debian)
- Node.js 18+
- Nginx

### Шаг 1: Подключитесь к серверу
```bash
ssh user@your-server-ip
```

### Шаг 2: Установите Node.js
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### Шаг 3: Клонируйте проект
```bash
cd /var/www
git clone https://github.com/ВАШ_USERNAME/lavia-landing.git
cd lavia-landing
```

### Шаг 4: Установите зависимости и соберите
```bash
npm install
npm run build
```

### Шаг 5: Запустите PM2
```bash
# Установите PM2
npm install -g pm2

# Запустите приложение
pm2 start npm --name "lavia" -- start

# Автозапуск при перезагрузке
pm2 startup
pm2 save
```

### Шаг 6: Настройте Nginx
```bash
sudo nano /etc/nginx/sites-available/lavia
```

Добавьте:
```nginx
server {
    listen 80;
    server_name ваш-домен.ru;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
# Активируйте конфигурацию
sudo ln -s /etc/nginx/sites-available/lavia /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### Шаг 7: SSL сертификат
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d ваш-домен.ru
```

---

## 🔧 Настройка домена

### После деплоя на Vercel/Netlify:

1. **Купите домен** (например, на reg.ru или namecheap.com)

2. **Настройте DNS записи**:
   - Тип: `A`
   - Имя: `@`
   - Значение: IP адрес от Vercel/Netlify

   - Тип: `CNAME`
   - Имя: `www`
   - Значение: ваш-проект.vercel.app

3. **В панели Vercel/Netlify**:
   - Settings → Domains
   - Add domain
   - Введите ваш домен

4. **Подождите 24-48 часов** для распространения DNS

---

## 📊 Аналитика

### Google Analytics
1. Создайте аккаунт на [analytics.google.com](https://analytics.google.com)
2. Получите ID отслеживания
3. Добавьте в `app/layout.tsx`:

```typescript
import Script from 'next/script'

// В компонент Layout добавьте:
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  `}
</Script>
```

### Яндекс.Метрика
1. Создайте счетчик на [metrika.yandex.ru](https://metrika.yandex.ru)
2. Получите код счетчика
3. Добавьте в `app/layout.tsx`

---

## 🚀 Performance оптимизация

### 1. Включите Turbopack (Next.js 14)
```bash
npm run dev -- --turbo
```

### 2. Оптимизируйте изображения
Используйте компонент `Image` из Next.js:
```typescript
import Image from 'next/image'
```

### 3. Минимизация бандла
```bash
npm run build
npm run analyze  # если установлен @next/bundle-analyzer
```

---

## 📝 Переменные окружения

Создайте файл `.env.local`:
```bash
NEXT_PUBLIC_SITE_URL=https://lavia.agency
NEXT_PUBLIC_EMAIL=info@lavia.agency
NEXT_PUBLIC_PHONE=+79999999999
```

Используйте в коде:
```typescript
process.env.NEXT_PUBLIC_EMAIL
```

---

## ✅ Чеклист перед деплоем

- [ ] Все контакты обновлены
- [ ] Тексты проверены на ошибки
- [ ] Сайт протестирован локально
- [ ] Проверена мобильная версия
- [ ] Настроены мета-теги
- [ ] Добавлен favicon
- [ ] Проект загружен на GitHub
- [ ] Выбрана платформа для деплоя
- [ ] Домен куплен (опционально)
- [ ] SSL сертификат настроен

---

**Успешного деплоя! 🎉**


