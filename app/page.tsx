'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const testimonials = [
  {
    id: 1,
    text: "Harika bir ekip! Web sitemizi kısa sürede ve beklediğimizden çok daha iyi bir kalitede teslim ettiler. Kesinlikle tavsiye ediyorum.",
    author: "Memnun Müşteri 1",
  },
  {
    id: 2,
    text: "Uygun fiyata bu kadar profesyonel bir hizmet alacağımı düşünmezdim. İletişim harikaydı ve her adımda destek oldular.",
    author: "Memnun Müşteri 2",
  },
  {
    id: 3,
    text: "İşimi büyütmek için harika bir web sitesi inşa ettiler. Herkese öneriyorum, pişman olmazsınız!",
    author: "Memnun Müşteri 3",
  },
];

const projects = [
  {
    id: 1,
    name: "Kurumsal Web Sitesi Projesi",
    description: "Şirketinizin dijital kimliğini en iyi şekilde yansıtan profesyonel siteler inşa ediyorum. Markanız için özel çözümler sunuyorum.",
    image: "https://via.placeholder.com/400x200?text=Kurumsal+Site",
    link: "#",
  },
  {
    id: 2,
    name: "E-Ticaret Platformu Geliştirme",
    description: "Ürünlerinizi kolayca satabileceğiniz, güvenli ve kullanıcı dostu e-ticaret platformları teslim ediyorum. Satışlarınızı artırıyorum.",
    image: "https://via.placeholder.com/400x200?text=E-Ticaret+Site",
    link: "#",
  },
  {
    id: 3,
    name: "Kişisel Blog ve Portföy Oluşturma",
    description: "Bireysel markanızı veya çalışmalarınızı sergileyeceğiniz etkileyici platformlar başlatıyorum. Kendinizi en iyi şekilde ifade edin.",
    image: "https://via.placeholder.com/400x200?text=Blog+Portföy",
    link: "#",
  },
];

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentProject, setCurrentProject] = useState(0);

  useEffect(() => {
    const testimonialTimer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds

    const projectTimer = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 7000); // Change project every 7 seconds

    return () => {
      clearInterval(testimonialTimer);
      clearInterval(projectTimer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* Sticky WhatsApp CTA Button */}
      <motion.a
        href="https://wa.me/905453809828?text=Merhaba,%20web%20sitesi%20hakkında%20bilgi%20almak%20istiyorum."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg z-50 flex items-center justify-center text-lg font-bold hover:bg-green-600 transition-colors duration-300"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 2 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.04 2C7.34 2 3.41 5.93 3.41 10.63c0 1.98.65 3.83 1.77 5.34L3 21.01l5.25-1.38c1.45.79 3.08 1.21 4.59 1.21 4.7 0 8.63-3.93 8.63-8.63C20.67 5.93 16.74 2 12.04 2zM17.5 14.3c-.2-.1-.8-.4-1.1-.5s-.6-.1-.8.1c-.2.2-.3.2-.6.3s-.6.1-.8-.1c-.2-.2-.7-.4-1.3-.8s-1-.9-1.4-1.5c-.4-.6-.8-1.2-.9-1.4s0-.4.1-.6c.1-.2.2-.4.3-.5s.2-.2.3-.4c.1-.2 0-.4 0-.5s-.8-2-.9-2.4c-.1-.4-.2-.3-.4-.3h-.5c-.2 0-.5.1-.8.3s-1.1 1.1-1.1 2.7c0 1.6 1.1 3.1 1.3 3.3s2.1 3.2 5.1 4.5c.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.3-.5 1.5-.9s.3-.7.2-1.2c-.1-.5-.2-.8-.4-.9z"/>
        </svg>
      </motion.a>

      {/* Hero Section */}
      <motion.section
        className="relative h-screen flex items-center justify-center text-center bg-gradient-to-br from-purple-600 to-blue-500 overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <div className="z-10 p-8 bg-black bg-opacity-50 rounded-lg shadow-lg max-w-3xl mx-auto">
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
          >
            İşinizi Büyüten <span className="text-yellow-300">Web Çözümleri</span> İnşa Ediyorum
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 text-gray-200"
            variants={itemVariants}
          >
            Uygun fiyatlarla, işletmenize özel, modern ve etkileyici web siteleri tasarlıyorum. Dijital varlığınızı güçlendiriyorum!
          </motion.p>
          <motion.a
            href="https://wa.me/905453809828?text=Merhaba,%20web%20sitesi%20hakkında%20bilgi%20almak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-green-600 transition-colors duration-300 shadow-lg flex items-center justify-center mx-auto max-w-xs"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.04 2C7.34 2 3.41 5.93 3.41 10.63c0 1.98.65 3.83 1.77 5.34L3 21.01l5.25-1.38c1.45.79 3.08 1.21 4.59 1.21 4.7 0 8.63-3.93 8.63-8.63C20.67 5.93 16.74 2 12.04 2zM17.5 14.3c-.2-.1-.8-.4-1.1-.5s-.6-.1-.8.1c-.2.2-.3.2-.6.3s-.6.1-.8-.1c-.2-.2-.7-.4-1.3-.8s-1-.9-1.4-1.5c-.4-.6-.8-1.2-.9-1.4s0-.4.1-.6c.1-.2.2-.4.3-.5s.2-.2.3-.4c.1-.2 0-.4 0-.5s-.8-2-.9-2.4c-.1-.4-.2-.3-.4-.3h-.5c-.2 0-.5.1-.8.3s-1.1 1.1-1.1 2.7c0 1.6 1.1 3.1 1.3 3.3s2.1 3.2 5.1 4.5c.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.3-.5 1.5-.9s.3-.7.2-1.2c-.1-.5-.2-.8-.4-.9z"/>
            </svg>
            WhatsApp ile İletişime Geçin
          </motion.a>
        </div>
        <div className="absolute inset-0 overflow-hidden">
          {/* Simple animated background elements */}
          <motion.div
            className="absolute w-48 h-48 bg-white bg-opacity-10 rounded-full -top-10 -left-10"
            animate={{ x: 100, y: 100, rotate: 360 }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          />
          <motion.div
            className="absolute w-64 h-64 bg-white bg-opacity-10 rounded-full -bottom-20 -right-20"
            animate={{ x: -100, y: -100, rotate: -360 }}
            transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
          />
        </div>
      </motion.section>

      {/* Value Proposition Section */}
      <motion.section
        className="py-20 px-8 bg-gray-800 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <motion.h2 className="text-4xl font-bold mb-8" variants={itemVariants}>
          Neden Bizi Seçmelisiniz?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <motion.div
            className="p-6 bg-gray-700 rounded-lg shadow-lg"
            variants={itemVariants}
            whileHover={{ y: -10, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.3)" }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-2">Uygun Fiyat Sunuyorum</h3>
            <p className="text-gray-300">Bütçenizi zorlamadan kaliteli web çözümleri sağlıyorum.</p>
          </motion.div>
          <motion.div
            className="p-6 bg-gray-700 rounded-lg shadow-lg"
            variants={itemVariants}
            whileHover={{ y: -10, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.3)" }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-2">Hızlı Teslimat Yapıyorum</h3>
            <p className="text-gray-300">Projelerinizi zamanında ve eksiksiz teslim ediyorum.</p>
          </motion.div>
          <motion.div
            className="p-6 bg-gray-700 rounded-lg shadow-lg"
            variants={itemVariants}
            whileHover={{ y: -10, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.3)" }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-2">Özel Çözümler Geliştiriyorum</h3>
            <p className="text-gray-300">İhtiyaçlarınıza özel, özgün tasarımlar geliştiriyorum.</p>
          </motion.div>
          <motion.div
            className="p-6 bg-gray-700 rounded-lg shadow-lg"
            variants={itemVariants}
            whileHover={{ y: -10, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.3)" }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-2">Uzman Destek Sağlıyorum</h3>
            <p className="text-gray-300">Proje süresince ve sonrasında yanınızdayım.</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Project Showcase Slider */}
      <motion.section
        className="py-20 px-8 bg-gray-900"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <motion.h2 className="text-4xl font-bold text-center mb-12" variants={itemVariants}>
          Öne Çıkan Projelerimi Sunuyorum
        </motion.h2>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentProject}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto bg-gray-800 rounded-lg shadow-xl overflow-hidden"
          >
            <div className="h-64 bg-gray-700 flex items-center justify-center text-gray-400 text-2xl font-bold">
              <img src={projects[currentProject].image} alt={projects[currentProject].name} className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{projects[currentProject].name}</h3>
              <p className="text-gray-300 mb-4">
                {projects[currentProject].description}
              </p>
              <a href={projects[currentProject].link} className="text-yellow-400 hover:underline">
                Detayları Görüntülüyorum &rarr;
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.section>

      {/* Testimonials Section - Auto-rotate */}
      <motion.section
        className="py-20 px-8 bg-gray-800 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <motion.h2 className="text-4xl font-bold mb-8" variants={itemVariants}>
          Müşterilerim Benim Hakkımda Ne Söylüyor?
        </motion.h2>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTestimonial}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto p-6 bg-gray-700 rounded-lg shadow-lg"
          >
            <p className="text-lg italic text-gray-200 mb-4">"{testimonials[currentTestimonial].text}"</p>
            <p className="text-yellow-400 font-bold">- {testimonials[currentTestimonial].author}</p>
          </motion.div>
        </AnimatePresence>
      </motion.section>

      {/* Call to Action for WhatsApp - Bottom */}
      <motion.section
        className="py-20 px-8 bg-gradient-to-br from-blue-500 to-purple-600 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <motion.h2 className="text-4xl font-bold mb-8" variants={itemVariants}>
          Hemen Teklif Alın!
        </motion.h2>
        <motion.p className="text-lg max-w-3xl mx-auto text-gray-200 mb-8" variants={itemVariants}>
          Hayalinizdeki web sitesine uygun fiyatlarla sahip olmak için bana WhatsApp üzerinden ulaşın.
        </motion.p>
        <motion.a
          href="https://wa.me/905453809828?text=Merhaba,%20uygun%20fiyatlı%20web%20sitesi%20hakkında%20bilgi%20almak%20istiyorum."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-full text-lg font-bold hover:bg-yellow-300 transition-colors duration-300 shadow-lg flex items-center justify-center mx-auto max-w-xs"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.04 2C7.34 2 3.41 5.93 3.41 10.63c0 1.98.65 3.83 1.77 5.34L3 21.01l5.25-1.38c1.45.79 3.08 1.21 4.59 1.21 4.7 0 8.63-3.93 8.63-8.63C20.67 5.93 16.74 2 12.04 2zM17.5 14.3c-.2-.1-.8-.4-1.1-.5s-.6-.1-.8.1c-.2.2-.3.2-.6.3s-.6.1-.8-.1c-.2-.2-.7-.4-1.3-.8s-1-.9-1.4-1.5c-.4-.6-.8-1.2-.9-1.4s0-.4.1-.6c.1-.2.2-.4.3-.5s.2-.2.3-.4c.1-.2 0-.4 0-.5s-.8-2-.9-2.4c-.1-.4-.2-.3-.4-.3h-.5c-.2 0-.5.1-.8.3s-1.1 1.1-1.1 2.7c0 1.6 1.1 3.1 1.3 3.3s2.1 3.2 5.1 4.5c.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.3-.5 1.5-.9s.3-.7.2-1.2c-.1-.5-.2-.8-.4-.9z"/>
          </svg>
          WhatsApp Üzerinden İletişime Geç
        </motion.a>
      </motion.section>

      {/* Footer */}
      <footer className="py-8 bg-gray-950 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Web Çözümleri. Tüm Hakları Saklıdır.</p>
      </footer>
    </div>
  );
}