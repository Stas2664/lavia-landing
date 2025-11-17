"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Имитация отправки формы
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setSubmitStatus("success");
      setIsSubmitting(false);
      
      // Сброс формы
      setFormData({ name: "", email: "", phone: "", message: "" });
      
      // Сброс статуса через 3 секунды
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-700">
            Ваше имя *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
            placeholder="Иван Иванов"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-700">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
            placeholder="ivan@example.com"
          />
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="phone" className="block text-sm font-semibold mb-2 text-gray-700">
          Телефон
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
          placeholder="+7 (999) 999-99-99"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-700">
          Сообщение *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all resize-none"
          placeholder="Расскажите о вашем проекте..."
        />
      </div>

      <motion.button
        type="submit"
        disabled={isSubmitting}
        className={`w-full py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 ${
          isSubmitting
            ? "bg-gray-400 cursor-not-allowed"
            : submitStatus === "success"
            ? "bg-green-600 hover:bg-green-700"
            : "bg-red-600 hover:bg-red-700 shadow-lg hover:shadow-xl"
        } text-white`}
        whileHover={!isSubmitting ? { scale: 1.02 } : {}}
        whileTap={!isSubmitting ? { scale: 0.98 } : {}}
      >
        {isSubmitting ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Отправка...
          </>
        ) : submitStatus === "success" ? (
          <>✓ Отправлено!</>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Отправить заявку
          </>
        )}
      </motion.button>

      {submitStatus === "success" && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 text-center text-green-600 font-semibold"
        >
          Спасибо! Мы свяжемся с вами в ближайшее время.
        </motion.p>
      )}
    </motion.form>
  );
}

