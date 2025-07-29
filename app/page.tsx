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
            Yazılım Kariyerinizde <span className="text-yellow-300">Yeni Bir Başlangıç</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 text-gray-200"
            variants={itemVariants}
          >
            Hayalinizdeki işe ulaşmanız için size %100 güven veren modern ve etkileyici bir portföy sitesi tasarlıyoruz.
          </motion.p>
          <motion.button
            className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-full text-lg font-bold hover:bg-yellow-300 transition-colors duration-300 shadow-lg"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Hemen Başlayın
          </motion.button>
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
          Hakkımızda
        </motion.h2>
        <motion.p className="text-lg max-w-3xl mx-auto text-gray-300" variants={itemVariants}>
          Yazılım dünyasında fark yaratmak isteyen profesyoneller için özel olarak tasarlanmış portföy siteleri geliştiriyoruz. Deneyiminizi, becerilerinizi ve projelerinizi en etkileyici şekilde sunarak işverenlerin dikkatini çekmenizi sağlıyoruz. Amacımız, sizin için en iyi iş fırsatlarını yaratmaktır.
        </motion.p>
      </motion.section>

      {/* Portfolio Section */}
      <motion.section
        className="py-20 px-8 bg-gray-900"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <motion.h2 className="text-4xl font-bold text-center mb-12" variants={itemVariants}>
          Öne Çıkan Projelerimiz
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="bg-gray-800 rounded-lg shadow-xl overflow-hidden"
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
            >
              <div className="h-48 bg-gray-700 flex items-center justify-center text-gray-400 text-2xl font-bold">
                Proje {i} Görseli
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Proje Adı {i}</h3>
                <p className="text-gray-300 mb-4">
                  Bu proje, [teknoloji 1], [teknoloji 2] ve [teknoloji 3] kullanılarak geliştirilmiştir. Detaylı açıklama burada yer alacak.
                </p>
                <a href="#" className="text-yellow-400 hover:underline">
                  Detayları Gör &rarr;
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        className="py-20 px-8 bg-gray-800 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <motion.h2 className="text-4xl font-bold mb-8" variants={itemVariants}>
          Bize Ulaşın
        </motion.h2>
        <motion.p className="text-lg max-w-3xl mx-auto text-gray-300 mb-8" variants={itemVariants}>
          Hayalinizdeki işe bir adım daha yaklaşmak için bizimle iletişime geçin. Size özel bir portföy sitesi oluşturmak için sabırsızlanıyoruz!
        </motion.p>
        <motion.div variants={itemVariants}>
          <p className="text-xl mb-2">Email: info@example.com</p>
          <p className="text-xl mb-2">Telefon: +90 555 123 45 67</p>
          <a
            href="https://wa.me/905551234567?text=Merhaba,%20portföy%20siteniz%20hakkında%20bilgi%20almak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:underline text-xl font-bold"
          >
            WhatsApp ile İletişime Geçin
          </a>
        </motion.div>
      </motion.section>

      {/* Footer */}
      <footer className="py-8 bg-gray-950 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Yazılım Kariyeri. Tüm Hakları Saklıdır.</p>
      </footer>
    </div>
  );
}
