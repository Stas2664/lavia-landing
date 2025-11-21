"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface StatItemProps {
  end: number;
  label: string;
  suffix?: string;
  duration?: number;
}

function StatItem({ end, label, suffix = "", duration = 2 }: StatItemProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        requestAnimationFrame(animateCount);
      }
    };
    
    requestAnimationFrame(animateCount);
  }, [end, duration]);

  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-5xl md:text-6xl font-bold text-red-600 mb-2">
        {count}{suffix}
      </div>
      <div className="text-lg text-gray-600">{label}</div>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold mb-4 text-gray-900">Наши достижения</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-12">
          <StatItem end={500} label="Довольных клиентов" suffix="+" />
          <StatItem end={1200} label="Успешных проектов" suffix="+" />
          <StatItem end={15} label="Лет на рынке" suffix="+" />
          <StatItem end={50} label="Специалистов в команде" suffix="+" />
        </div>
      </div>
    </section>
  );
}


