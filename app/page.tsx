'use client';

import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* Hero Section */}
      <motion.section
        className="relative h-screen flex items-center justify-center text-center bg-gradient-to-br from-purple-600 to-blue-500"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <div className="z-10 p-8 bg-black bg-opacity-50 rounded-lg shadow-lg max-w-3xl mx-auto">
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight"
            variants={itemVariants}
          >
            Uygun Fiyatlı Web Çözümleri <span className="text-yellow-300">Parmaklarınızın Ucunda</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 text-gray-200"
            variants={itemVariants}
          >
            İşletmenizi dijital dünyada öne çıkaracak, bütçenize uygun ve etkileyici web siteleri tasarlıyoruz.
          </motion.p>
          <motion.a
            href="https://wa.me/905551234567?text=Merhaba,%20uygun%20fiyatlı%20web%20sitesi%20hakkında%20bilgi%20almak%20istiyorum."
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
          <motion.div className="p-6 bg-gray-700 rounded-lg shadow-lg" variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-2">Uygun Fiyat</h3>
            <p className="text-gray-300">Bütçenizi zorlamadan kaliteli web çözümleri sunuyoruz.</p>
          </motion.div>
          <motion.div className="p-6 bg-gray-700 rounded-lg shadow-lg" variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-2">Hızlı Teslimat</h3>
            <p className="text-gray-300">Projelerinizi zamanında ve eksiksiz teslim ediyoruz.</p>
          </motion.div>
          <motion.div className="p-6 bg-gray-700 rounded-lg shadow-lg" variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-2">Özel Çözümler</h3>
            <p className="text-gray-300">İhtiyaçlarınıza özel, özgün tasarımlar geliştiriyoruz.</p>
          </motion.div>
          <motion.div className="p-6 bg-gray-700 rounded-lg shadow-lg" variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-2">Uzman Destek</h3>
            <p className="text-gray-300">Proje süresince ve sonrasında yanınızdayız.</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        className="py-20 px-8 bg-gray-900"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <motion.h2 className="text-4xl font-bold text-center mb-12" variants={itemVariants}>
          Sunduğumuz Web Çözümleri
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <motion.div
            className="bg-gray-800 rounded-lg shadow-xl overflow-hidden p-6"
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="text-2xl font-bold mb-2">Kurumsal Web Siteleri</h3>
            <p className="text-gray-300">Şirketinizin dijital kimliğini en iyi şekilde yansıtan profesyonel siteler.</p>
          </motion.div>
          <motion.div
            className="bg-gray-800 rounded-lg shadow-xl overflow-hidden p-6"
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="text-2xl font-bold mb-2">E-Ticaret Siteleri</h3>
            <p className="text-gray-300">Ürünlerinizi kolayca satabileceğiniz, güvenli ve kullanıcı dostu e-ticaret platformları.</p>
          </motion.div>
          <motion.div
            className="bg-gray-800 rounded-lg shadow-xl overflow-hidden p-6"
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="text-2xl font-bold mb-2">Kişisel Bloglar & Portföyler</h3>
            <p className="text-gray-300">Bireysel markanızı veya çalışmalarınızı sergileyeceğiniz etkileyici platformlar.</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Call to Action for WhatsApp */}
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
          Hayalinizdeki web sitesine uygun fiyatlarla sahip olmak için bize WhatsApp üzerinden ulaşın.
        </motion.p>
        <motion.a
          href="https://wa.me/905551234567?text=Merhaba,%20uygun%20fiyatlı%20web%20sitesi%20hakkında%20bilgi%20almak%20istiyorum."
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