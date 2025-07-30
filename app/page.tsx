'use client';

import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
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
    text: "3 günde teslim etti, UI harikaydı.",
    author: "Ahmet K.",
  },
  {
    id: 2,
    text: "Proje sürecinde iletişim çok güçlüydü, kesinlikle öneriyorum.",
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
    title: "Mobil Uygulama Geliştiriyorum",
    description: "7 günlük teslimat ve UI/UX desteği sağlıyorum.",
  },
  {
    id: 2,
    title: "Web Sitesi Tasarlıyorum",
    description: "7 günlük teslimat ve UI/UX desteği sağlıyorum.",
  },
  {
    id: 3,
    title: "Yapay Zeka Çözümleri Üretiyorum",
    description: "7 günlük teslimat ve UI/UX desteği sağlıyorum.",
  },
  {
    id: 4,
    title: "Otomasyon Sistemleri Kuruyorum",
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
  // Parallax effect removed as per feedback

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

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* Sticky CTA Button */}
      <motion.a
        href="https://wa.me/905453809828?text=Merhaba,%20projem%20hakkında%20bilgi%20almak%20istiyorum."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-600 text-white p-4 rounded-full shadow-xl z-50 flex items-center justify-center text-xl font-bold hover:bg-green-700 transition-colors duration-300"
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
        ref={heroRef}
        className="relative h-screen flex items-center justify-center text-center bg-gradient-to-br from-purple-600 to-blue-500 overflow-hidden"
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
                className="text-yellow-300 inline-block"
              >
                {rotatingTexts[currentRotatingText]}
              </motion.span>
            </AnimatePresence>
            <br />Projelerinizi 3 Günde Teslim Ediyorum
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 text-gray-200"
            variants={itemVariants}
          >
            İşinizi büyütmek için kusursuz dijital çözümler geliştiriyorum.
          </motion.p>
          <motion.a
            href="https://wa.me/905453809828?text=Merhaba,%20projem%20hakkında%20bilgi%20almak%20istiyorum."
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
            Hemen Projeni Başlat
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

      {/* About Section */}
      <motion.section
        className="py-20 px-8 bg-gray-800 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <motion.h2 className="text-4xl font-bold mb-8" variants={itemVariants}>
          Hakkımda
        </motion.h2>
        <motion.div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8" variants={itemVariants}>
          <div className="md:w-1/3">
            <img
              src="https://via.placeholder.com/200x200?text=Kürşat+Fotoğrafı"
              alt="Kürşat'ın Fotoğrafı"
              className="rounded-full w-48 h-48 object-cover mx-auto mb-4 md:mb-0"
              loading="lazy"
            />
          </div>
          <div className="md:w-2/3 text-left">
            <p className="text-lg text-gray-300 mb-4">
              Merhaba, ben Kürşat. 20 yaşında, tutkulu bir girişimci yazılımcıyım. Web, mobil ve yapay zeka projeleri geliştirerek işletmelerin dijital dönüşümünü hızlandırıyorum. Her projede yenilikçi çözümler sunuyor, müşteri memnuniyetini en üst seviyede tutuyorum.
            </p>
            <p className="text-lg text-gray-300">
              Hızlı teslimat, uygun fiyat ve kusursuz kullanıcı deneyimi odaklı çalışıyorum. Projelerinizi hayata geçirmek için buradayım.
            </p>
          </div>
        </motion.div>
      </motion.section>

      {/* Service Cards Slider */}
      <motion.section
        className="py-20 px-8 bg-gray-900 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <motion.h2 className="text-4xl font-bold mb-12" variants={itemVariants}>
          Sunduğum Hizmetler
        </motion.h2>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentService}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="max-w-md mx-auto p-6 bg-gray-800 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-2">{services[currentService].title}</h3>
            <p className="text-gray-300">{services[currentService].description}</p>
          </motion.div>
        </AnimatePresence>
        <div className="flex justify-center mt-8 space-x-4">
          {services.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentService(idx)}
              className={`w-4 h-4 rounded-full ${currentService === idx ? 'bg-yellow-400' : 'bg-gray-600'} transition-colors duration-300`}
            />
          ))}
        </div>
      </motion.section>

      {/* Project Showcase Slider */}
      <motion.section
        className="py-20 px-8 bg-gray-800"
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
            className="max-w-3xl mx-auto bg-gray-700 rounded-lg shadow-xl overflow-hidden"
          >
            <div className="h-64 bg-gray-600 flex items-center justify-center text-gray-400 text-2xl font-bold">
              <img src={projects[currentProject].image} alt={projects[currentProject].name} className="w-full h-full object-cover" loading="lazy" />
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
        <div className="flex justify-center mt-8 space-x-4">
          {projects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentProject(idx)}
              className={`w-4 h-4 rounded-full ${currentProject === idx ? 'bg-yellow-400' : 'bg-gray-600'} transition-colors duration-300`}
            />
          ))}
        </div>
      </motion.section>

      {/* Testimonials Section - Auto-rotate */}
      <motion.section
        className="py-20 px-8 bg-gray-900 text-center"
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
        <div className="flex justify-center mt-8 space-x-4">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentTestimonial(idx)}
              className={`w-4 h-4 rounded-full ${currentTestimonial === idx ? 'bg-yellow-400' : 'bg-gray-600'} transition-colors duration-300`}
            />
          ))}
        </div>
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
          Hemen Projenizi Başlatın!
        </motion.h2>
        <motion.p className="text-lg max-w-3xl mx-auto text-gray-200 mb-8" variants={itemVariants}>
          Hayalinizdeki web sitesine uygun fiyatlarla sahip olmak için bana WhatsApp üzerinden ulaşın.
        </motion.p>
        <motion.a
          href="https://wa.me/905453809828?text=Merhaba,%20projem%20hakkında%20bilgi%20almak%20istiyorum."
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