'use client';

import { motion, AnimatePresence, useScroll, useTransform, useInView } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

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
    text: "3 günde teslim etti, kullanıcı arayüzü harikaydı.",
    author: "Ahmet K.",
  },
  {
    id: 2,
    text: "Proje sürecinde iletişim çok güçlüydü, kesinlikle tavsiye ediyorum.",
    author: "Merve Y.",
  },
  {
    id: 3,
    text: "İşimi büyütmek için harika bir web sitesi inşa etti. Herkese öneriyorum, pişman olmazsınız!",
    author: "Ayşe D.",
  },
];

const projects = [
  {
    id: 1,
    name: "Kürşat App",
    description: "Türk dünyasına yönelik sosyal medya platformu inşa ettim – 50K+ aktif kullanıcıya ulaştırdım.",
    image: "https://via.placeholder.com/600x400?text=Kürşat+App",
    link: "#",
  },
  {
    id: 2,
    name: "Lusid AI",
    description: "Rüya ve günlük analizi yapan GPT destekli mobil uygulama geliştirdim. Yapay zeka gücünü parmaklarınızın ucuna getiriyorum.",
    image: "https://via.placeholder.com/600x400?text=Lusid+AI",
    link: "#",
  },
  {
    id: 3,
    name: "Kurumsal B2B Proje",
    description: "Önemli bir firmaya özel API ve mobil entegrasyon çözümleri teslim ettim. İş süreçlerini optimize ediyorum.",
    image: "https://via.placeholder.com/600x400?text=Kurumsal+B2B",
    link: "#",
  },
];

const services = [
  {
    id: 1,
    title: "Mobil Uygulama Geliştirme",
    description: "7 günlük teslimat ve UI/UX desteği sağlıyorum.",
  },
  {
    id: 2,
    title: "Web Sitesi Tasarımı",
    description: "7 günlük teslimat ve UI/UX desteği sağlıyorum.",
  },
  {
    id: 3,
    title: "Yapay Zeka Çözümleri",
    description: "7 günlük teslimat ve UI/UX desteği sağlıyorum.",
  },
  {
    id: 4,
    title: "Otomasyon Sistemleri",
    description: "7 günlük teslimat ve UI/UX desteği sağlıyorum.",
  },
];

const rotatingTexts = ["Mobil", "Web", "Yapay Zeka"];

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentProject, setCurrentProject] = useState(0);
  const [currentService, setCurrentService] = useState(0);
  const [currentRotatingText, setCurrentRotatingText] = useState(0);

  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const servicesInView = useInView(servicesRef, { once: true, amount: 0.3 });

  useEffect(() => {
    const testimonialTimer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds

    const projectTimer = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 7000); // Change project every 7 seconds

    const serviceTimer = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
    }, 6000); // Change service every 6 seconds

    const rotatingTextTimer = setInterval(() => {
      setCurrentRotatingText((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000); // Change text every 3 seconds

    return () => {
      clearInterval(testimonialTimer);
      clearInterval(projectTimer);
      clearInterval(serviceTimer);
      clearInterval(rotatingTextTimer);
    };
  }, []);

  // Matrix Effect JavaScript
  useEffect(() => {
    const canvas = document.getElementById('matrixCanvas') as HTMLCanvasElement;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()_+-=[]{};':\"|,.<>/?";
    const font_size = 10;
    const columns = canvas.width / font_size;
    const drops: number[] = [];

    for (let x = 0; x < columns; x++) {
      drops[x] = 1;
    }

    function draw() {
      ctx!.fillStyle = "rgba(0, 0, 0, 0.08)"; // Slightly more opaque for better contrast
      ctx!.fillRect(0, 0, canvas.width, canvas.height);

      ctx!.fillStyle = "#26c6da"; // Turquoise-400
      ctx!.font = font_size + "px arial";

      for (let i = 0; i < drops.length; i++) {
        const text = matrix[Math.floor(Math.random() * matrix.length)];
        ctx!.fillText(text, i * font_size, drops[i] * font_size);

        if (drops[i] * font_size > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    const interval = setInterval(draw, 35);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const newColumns = canvas.width / font_size;
      for (let x = 0; x < newColumns; x++) {
        if (!drops[x]) drops[x] = 1;
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const nextService = () => {
    setCurrentService((prev) => (prev + 1) % services.length);
  };

  const prevService = () => {
    setCurrentService((prev) => (prev - 1 + services.length) % services.length);
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans relative">
      {/* Matrix Background */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <canvas id="matrixCanvas" className="w-full h-full"></canvas>
      </div>

      {/* Sticky CTA Button */}
      <AnimatePresence>
        {servicesInView && (
          <motion.a
            href="https://wa.me/905453809828?text=Merhaba,%20projem%20hakkında%20bilgi%20almak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 bg-turquoise-500 text-gray-900 p-4 rounded-full shadow-xl z-50 flex items-center justify-center text-xl font-bold hover:bg-turquoise-600 transition-colors duration-300"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.04 2C7.34 2 3.41 5.93 3.41 10.63c0 1.98.65 3.83 1.77 5.34L3 21.01l5.25-1.38c1.45.79 3.08 1.21 4.59 1.21 4.7 0 8.63-3.93 8.63-8.63C20.67 5.93 16.74 2 12.04 2zM17.5 14.3c-.2-.1-.8-.4-1.1-.5s-.6-.1-.8.1c-.2.2-.3.2-.6.3s-.6.1-.8-.1c-.2-.2-.7-.4-1.3-.8s-1-.9-1.4-1.5c-.4-.6-.8-1.2-.9-1.4s0-.4.1-.6c.1-.2.2-.4.3-.5s.2-.2.3-.4c.1-.2 0-.4 0-.5s-.8-2-.9-2.4c-.1-.4-.2-.3-.4-.3h-.5c-.2 0-.5.1-.8.3s-1.1 1.1-1.1 2.7c0 1.6 1.1 3.1 1.3 3.3s2.1 3.2 5.1 4.5c.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.3-.5 1.5-.9s.3-.7.2-1.2c-.1-.5-.2-.8-.4-.9z"/>
            </svg>
          </motion.a>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="relative h-screen flex items-center justify-center text-center bg-black bg-opacity-70 z-10"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <div className="z-10 p-8 bg-black bg-opacity-50 rounded-lg shadow-lg max-w-3xl mx-auto">
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={currentRotatingText}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-turquoise-400 inline-block"
              >
                {rotatingTexts[currentRotatingText]}
              </motion.span>
            </AnimatePresence>
            <br />Çözümlerinizi 3 Günde Teslim Ediyorum
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 text-gray-200"
            variants={itemVariants}
          >
            İşletmenizin dijital dönüşümünü hızlandırıyor, kusursuz ve yenilikçi çözümler geliştiriyorum.
          </motion.p>
          <motion.a
            href="https://wa.me/905453809828?text=Merhaba,%20projem%20hakkında%20bilgi%20almak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-turquoise-500 text-gray-900 px-8 py-4 rounded-full text-lg font-bold hover:bg-turquoise-600 transition-colors duration-300 shadow-lg flex items-center justify-center mx-auto max-w-xs"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.04 2C7.34 2 3.41 5.93 3.41 10.63c0 1.98.65 3.83 1.77 5.34L3 21.01l5.25-1.38c1.45.79 3.08 1.21 4.59 1.21 4.7 0 8.63-3.93 8.63-8.63C20.67 5.93 16.74 2 12.04 2zM17.5 14.3c-.2-.1-.8-.4-1.1-.5s-.6-.1-.8.1c-.2.2-.3.2-.6.3s-.6.1-.8-.1c-.2-.2-.7-.4-1.3-.8s-1-.9-1.4-1.5c-.4-.6-.8-1.2-.9-1.4s0-.4.1-.6c.1-.2.2-.4.3-.5s.2-.2.3-.4c.1-.2 0-.4 0-.5s-.8-2-.9-2.4c-.1-.4-.2-.3-.4-.3h-.5c-.2 0-.5.1-.8.3s-1.1 1.1-1.1 2.7c0 1.6 1.1 3.1 1.3 3.3s2.1 3.2 5.1 4.5c.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.3-.5 1.5-.9s.3-.7.2-1.2c-.1-.5-.2-.8-.4-.9z"/>
            </svg>
            Hemen Projeni Başlat
          </motion.a>
        </div>
        {/* Scroll Down Indicator */}
        <motion.div
          className="absolute bottom-8 flex flex-col items-center text-gray-400 mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
          <span className="text-sm">Aşağı Kaydır</span>
        </motion.div>
      </motion.section>

      {/* Service Cards Slider */}
      <motion.section
        ref={servicesRef}
        className="py-20 px-8 bg-gray-900 text-center z-10 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <motion.h2 className="text-4xl font-bold mb-12" variants={itemVariants}>
          Sunduğum Hizmetler
        </motion.h2>
        <div className="relative max-w-md mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentService}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="p-6 bg-gray-800 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-2">{services[currentService].title}</h3>
              <p className="text-gray-300">{services[currentService].description}</p>
            </motion.div>
          </AnimatePresence>
          <button
            onClick={prevService}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-700 p-2 rounded-full text-white hover:bg-gray-600 transition-colors duration-300 z-20"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
          </button>
          <button
            onClick={nextService}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-700 p-2 rounded-full text-white hover:bg-gray-600 transition-colors duration-300 z-20"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </button>
        </div>
        <div className="flex justify-center mt-8 space-x-4">
          {services.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentService(idx)}
              className={`w-4 h-4 rounded-full ${currentService === idx ? 'bg-turquoise-400' : 'bg-gray-600'} transition-colors duration-300`}
            />
          ))}
        </div>
      </motion.section>

      {/* Project Showcase Slider */}
      <motion.section
        className="py-20 px-8 bg-gray-800 z-10 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <motion.h2 className="text-4xl font-bold text-center mb-12" variants={itemVariants}>
          Öne Çıkan Projelerimi Sunuyorum
        </motion.h2>
        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-700 rounded-lg shadow-xl overflow-hidden"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(event, info) => {
                if (info.offset.x > 50) {
                  prevProject();
                } else if (info.offset.x < -50) {
                  nextProject();
                }
              }}
            >
              <div className="h-64 bg-gray-600 flex items-center justify-center text-gray-400 text-2xl font-bold">
                <img src={projects[currentProject].image} alt={projects[currentProject].name} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{projects[currentProject].name}</h3>
                <p className="text-gray-300 mb-4">
                  {projects[currentProject].description}
                </p>
                <a href={projects[currentProject].link} className="text-turquoise-400 hover:underline">
                  Detayları Görüntülüyorum &rarr;
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
          </AnimatePresence>
          <button
            onClick={prevProject}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-700 p-2 rounded-full text-white hover:bg-gray-600 transition-colors duration-300 z-20"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
          </button>
          <button
            onClick={nextProject}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-700 p-2 rounded-full text-white hover:bg-gray-600 transition-colors duration-300 z-20"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </button>
        </div>
        <div className="flex justify-center mt-8 space-x-4">
          {projects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentProject(idx)}
              className={`w-4 h-4 rounded-full ${currentProject === idx ? 'bg-turquoise-400' : 'bg-gray-600'} transition-colors duration-300`}
            />
          ))}
        </div>
      </motion.section>

      {/* Testimonials Section - Auto-rotate */}
      <motion.section
        className="py-20 px-8 bg-gray-900 text-center z-10 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <motion.h2 className="text-4xl font-bold mb-8" variants={itemVariants}>
          Müşterilerim Benim Hakkımda Ne Söylüyor?
        </motion.h2>
        <div className="relative max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            <div className="relative max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="p-6 bg-gray-700 rounded-lg shadow-lg"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(event, info) => {
                if (info.offset.x > 50) {
                  prevTestimonial();
                } else if (info.offset.x < -50) {
                  nextTestimonial();
                }
              }}
            >
              <p className="text-lg italic text-gray-200 mb-4">"{testimonials[currentTestimonial].text}"</p>
              <p className="text-turquoise-400 font-bold">- {testimonials[currentTestimonial].author}</p>
            </motion.div>
          </AnimatePresence>
        </div>
          </AnimatePresence>
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-700 p-2 rounded-full text-white hover:bg-gray-600 transition-colors duration-300 z-20"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-700 p-2 rounded-full text-white hover:bg-gray-600 transition-colors duration-300 z-20"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </button>
        </div>
        <div className="flex justify-center mt-8 space-x-4">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentTestimonial(idx)}
              className={`w-4 h-4 rounded-full ${currentTestimonial === idx ? 'bg-turquoise-400' : 'bg-gray-600'} transition-colors duration-300`}
            />
          ))}
        </div>
      </motion.section>

      {/* Call to Action for WhatsApp - Bottom */}
      <motion.section
        className="py-20 px-8 bg-gradient-to-br from-turquoise-500 to-turquoise-600 text-center z-10 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <motion.h2 className="text-4xl font-bold mb-8" variants={itemVariants}>
          Hemen Projenizi Başlatın!
        </motion.h2>
        <motion.p className="text-lg max-w-3xl mx-auto text-gray-200 mb-8" variants={itemVariants}>
          Hayalinizdeki web sitesine uygun fiyatlarla sahip olmak için bana WhatsApp üzerinden ulaşın.
        </motion.p>
        <motion.a
          href="https://wa.me/905453809828?text=Merhaba,%20projem%20hakkında%20bilgi%20almak%20istiyorum."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-turquoise-400 text-gray-900 px-8 py-4 rounded-full text-lg font-bold hover:bg-turquoise-500 transition-colors duration-300 shadow-lg flex items-center justify-center mx-auto max-w-xs"
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
      <footer className="py-8 bg-gray-950 text-center text-gray-500 text-sm z-10 relative">
        <p>&copy; {new Date().getFullYear()} Web Çözümleri. Tüm Hakları Saklıdır.</p>
        <div className="mt-4 flex justify-center space-x-6">
          <a href="https://www.linkedin.com/in/kurşatyılmaz" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-turquoise-400 transition-colors duration-300">
            {/* LinkedIn Icon */}
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          <a href="https://github.com/DevKursat" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-turquoise-400 transition-colors duration-300">
            {/* GitHub Icon */}
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.903.165 1.23-.395 1.23-.872 0-.432-.015-1.58-.025-3.109-3.338.724-4.042-1.61-4.042-1.61-.542-1.371-1.328-1.732-1.328-1.732-1.089-.745.083-.729.083-.729 1.205.084 1.838 1.23 1.838 1.23 1.07 1.835 2.809 1.305 3.49.997.107-.775.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.221-.124-.3-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.046.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.876.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.027 3.286-.012.392.269.904.97.746 4.765-1.589 8.203-6.086 8.203-11.385c0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a href="https://www.instagram.com/kursat.dev" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-turquoise-400 transition-colors duration-300">
            {/* Instagram Icon */}
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-3.254-.149-4.771-1.699-4.919-4.919-.058-1.265-.07-1.646-.07-4.85s.012-3.584.07-4.85c.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.073 4.948.073s3.668-.014 4.948-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.44-.645 1.44-1.44s-.645-1.44-1.44-1.44z"/>
            </svg>
          </a>
          <a href="https://bykursat.me" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-turquoise-400 transition-colors duration-300">
            {/* Website Icon (Globe) */}
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22c-5.514 0-10-4.486-10-10s4.486-10 10-10 10 4.486 10 10-4.486 10-10 10zm-1-17h2v2h-2v-2zm0 4h2v6h-2v-6zm0 8h2v2h-2v-2zm4-12h2v2h-2v-2zm0 4h2v6h-2v-6zm0 8h2v2h-2v-2zm-8-12h2v2h-2v-2zm0 4h2v6h-2v-6zm0 8h2v2h-2v-2z"/>
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
}