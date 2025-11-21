"use client";

import { motion } from "framer-motion";
import { 
  TrendingUp, 
  Target, 
  Lightbulb, 
  Users, 
  Award, 
  Zap,
  Megaphone,
  Newspaper,
  Film,
  Monitor,
  Palette,
  Camera,
  UserCircle
} from "lucide-react";

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-red-600 via-red-500 to-pink-500 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"
            animate={{ 
              x: [0, 100, 0],
              y: [0, 50, 0],
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-20 right-10 w-96 h-96 bg-pink-300/10 rounded-full blur-3xl"
            animate={{ 
              x: [0, -100, 0],
              y: [0, -50, 0],
            }}
            transition={{ 
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-6xl md:text-8xl font-bold mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              ЛАВИЯ
            </motion.h1>
            <motion.p 
              className="text-xl md:text-3xl mb-8 font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Рекламное агентство полного цикла
            </motion.p>
            <motion.p 
              className="text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Мы помогаем брендам обрести голос, увеличивать узнаваемость 
              и достигать своих бизнес-целей в современном цифровом мире
            </motion.p>
            <motion.a
              href="#contact"
              className="inline-block bg-white text-red-600 px-10 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-white/50 hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Начать сотрудничество
            </motion.a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <motion.div 
              className="w-1 h-3 bg-white rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold mb-4 text-gray-900">Наши услуги</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <TrendingUp className="w-12 h-12" />,
                title: "Цифровой маркетинг",
                description: "Комплексное продвижение в интернете, включая контекстную и таргетированную рекламу, SEO и SMM"
              },
              {
                icon: <Target className="w-12 h-12" />,
                title: "Стратегия и брендинг",
                description: "Разработка уникального позиционирования бренда, айдентики и коммуникационной стратегии"
              },
              {
                icon: <Lightbulb className="w-12 h-12" />,
                title: "Создание контента",
                description: "Производство креативного контента для различных площадок — от текстов и графики до видео и фотосъемки"
              },
              {
                icon: <Zap className="w-12 h-12" />,
                title: "Медийная реклама",
                description: "Размещение рекламы на наружных носителях, в прессе и на ТВ"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-2xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="text-red-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold mb-4">Наши ценности</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="w-12 h-12" />,
                title: "Результат",
                description: "Мы нацелены на измеримый эффект для наших клиентов. Каждая наша кампания имеет четкие KPI"
              },
              {
                icon: <Target className="w-12 h-12" />,
                title: "Профессионализм",
                description: "Мы постоянно учимся, следим за трендами рынка и используем только проверенные и эффективные инструменты"
              },
              {
                icon: <Lightbulb className="w-12 h-12" />,
                title: "Креатив",
                description: "Мы поощряем нестандартное мышление и смелые идеи, которые помогают нашим клиентам выделяться"
              },
              {
                icon: <Users className="w-12 h-12" />,
                title: "Команда",
                description: "Мы выстраиваем доверительные и открытые отношения внутри коллектива, где ценят мнение и вклад каждого"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-red-500 mb-6">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold mb-4 text-gray-900">Дополнительные услуги</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Полный спектр рекламных решений для вашего бизнеса
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Monitor className="w-10 h-10" />,
                title: "Наружная реклама",
                description: "Билборды, баннеры, вывески, штендеры. Размещение на самых проходимых местах города"
              },
              {
                icon: <Newspaper className="w-10 h-10" />,
                title: "Создание журналов",
                description: "Разработка корпоративных журналов, каталогов продукции и рекламных буклетов"
              },
              {
                icon: <Film className="w-10 h-10" />,
                title: "Видеопродакшн",
                description: "Съемка рекламных роликов, корпоративных видео и презентационных материалов"
              },
              {
                icon: <Megaphone className="w-10 h-10" />,
                title: "Радиореклама",
                description: "Создание аудиороликов и размещение на ведущих радиостанциях региона"
              },
              {
                icon: <Palette className="w-10 h-10" />,
                title: "Полиграфия",
                description: "Визитки, флаеры, плакаты, листовки. Качественная печать любых тиражей"
              },
              {
                icon: <Camera className="w-10 h-10" />,
                title: "Фотосъемка",
                description: "Профессиональная предметная, каталожная и имиджевая фотосъемка"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="p-8 rounded-2xl bg-gradient-to-br from-red-50 to-pink-50 border border-red-100 hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-red-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vacancies Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold mb-4">Наши вакансии</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Присоединяйтесь к нашей команде профессионалов
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: <UserCircle className="w-12 h-12" />,
                title: "Контент-менеджер",
                description: "Создание и публикация контента для соцсетей, ведение блогов, работа с текстами. Требуется опыт от 1 года, знание трендов SMM и отличное владение русским языком."
              },
              {
                icon: <Palette className="w-12 h-12" />,
                title: "Дизайнер",
                description: "Разработка креативных концепций, создание макетов для печати и digital. Требуется портфолио, знание Adobe Creative Suite, понимание трендов в дизайне."
              },
              {
                icon: <Camera className="w-12 h-12" />,
                title: "Фотомодель",
                description: "Участие в рекламных съемках для различных брендов и проектов. Требуется опыт позирования, выразительная внешность, ответственность и пунктуальность."
              }
            ].map((vacancy, index) => (
              <motion.div
                key={index}
                className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-red-500 mb-6">
                  {vacancy.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{vacancy.title}</h3>
                <p className="text-gray-300 leading-relaxed mb-6">{vacancy.description}</p>
                <a
                  href="mailto:dir-lavia@rambler.ru"
                  className="inline-block bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors duration-300"
                >
                  Откликнуться
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-red-600 via-red-500 to-pink-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center text-white max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold mb-6">Готовы начать?</h2>
            <p className="text-xl mb-12 leading-relaxed">
              Давайте обсудим ваш проект и создадим стратегию, 
              которая приведет ваш бизнес к успеху
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="mailto:dir-lavia@rambler.ru"
                className="inline-block bg-white text-red-600 px-10 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-2xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Связаться с нами
              </motion.a>
              <motion.a
                href="tel:+79054269026"
                className="inline-block bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-red-600 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                +7 (905) 426-90-26
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">ЛАВИЯ</h3>
              <p className="text-gray-400 mb-2">
                Рекламное агентство полного цикла
              </p>
              <p className="text-gray-400 text-sm">
                ИНН: 9719083429
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <p className="text-gray-400 mb-2">Email: dir-lavia@rambler.ru</p>
              <p className="text-gray-400 mb-2">Телефон: +7 (905) 426-90-26</p>
              <p className="text-gray-400 mb-2">Адрес: Газетный переулок, 52<br/>Ростов-на-Дону</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">VK</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Telegram</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram*</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Лавия. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

