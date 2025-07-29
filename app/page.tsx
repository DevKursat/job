'use client';

import type { NextPage } from 'next';
import Head from 'next/head';
import { motion } from 'framer-motion';

const HomePage: NextPage = () => {
  // Trigger a new build on GitHub Actions
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeInOut' },
    },
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <Head>
        <title>Kürşat Yılmaz - Proje Başarı Ortağınız</title>
        <meta name="description" content="Yazılım projelerinizde %100 başarı garantisi. Sadece bir freelancer değil, projenizin başarı ortağı." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="container mx-auto px-6 py-4 sticky top-0 bg-gray-900/80 backdrop-blur-sm z-10">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Kürşat Yılmaz</h1>
          <nav>
            <a href="#services" className="px-4 hover:text-blue-400 transition-colors">Hizmetler</a>
            <a href="#case-studies" className="px-4 hover:text-blue-400 transition-colors">Projeler</a>
            <a href="#testimonials" className="px-4 hover:text-blue-400 transition-colors">Yorumlar</a>
            <a href="#contact" className="ml-4 bg-blue-600 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300">İletişime Geç</a>
          </nav>
        </div>
      </header>

      <main 
        className="flex-grow flex items-center justify-center text-center relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1534723452862-4c874018d66d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}
      >
         <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>
        <div className="container mx-auto px-6 z-10">
          <motion.h2 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-5xl md:text-7xl font-extrabold leading-tight mb-4"
          >
            Yazılım Projelerinizde %100 Başarı.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="text-xl md:text-2xl text-gray-300 mb-8"
          >
            Sadece bir freelancer değil, projenizin başarı ortağı.
          </motion.p>
          <motion.a 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 150, delay: 0.6 }}
            href="#contact" 
            className="bg-blue-600 text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-blue-700 transition-transform transform hover:scale-105 duration-300"
          >
            15 Dakikalık Ücretsiz Proje Değerlendirmesi Planla
          </motion.a>
        </div>
      </main>

      <motion.section 
        id="services" 
        className="py-20 bg-gray-800"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-12">Sizin Sorunlarınız, Benim Çözümlerim</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div className="bg-gray-700 p-8 rounded-lg transform hover:-translate-y-2 transition-transform duration-300" whileHover={{ scale: 1.05 }}>
              <svg className="w-20 h-20 mx-auto mb-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <h4 className="text-2xl font-bold mb-2">Geciken Projeler</h4>
              <p className="text-gray-400">Net teslim tarihleri ve düzenli ilerleme raporları ile projenizin zamanında teslim edilmesini sağlarım.</p>
            </motion.div>
            <motion.div className="bg-gray-700 p-8 rounded-lg transform hover:-translate-y-2 transition-transform duration-300" whileHover={{ scale: 1.05 }}>
              <svg className="w-20 h-20 mx-auto mb-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
              <h4 className="text-2xl font-bold mb-2">Kötü İletişim</h4>
              <p className="text-gray-400">Projenin her aşamasında proaktif ve şeffaf iletişim kurarak sizi sürekli bilgilendiririm.</p>
            </motion.div>
            <motion.div className="bg-gray-700 p-8 rounded-lg transform hover:-translate-y-2 transition-transform duration-300" whileHover={{ scale: 1.05 }}>
              <svg className="w-20 h-20 mx-auto mb-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
              <h4 className="text-2xl font-bold mb-2">Düşük Kaliteli Kod</h4>
              <p className="text-gray-400">Genişletilebilir, temiz ve test edilmiş kod yazarak gelecekteki baş ağrılarını önlerim.</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section 
        id="case-studies" 
        className="py-20"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-12">Başarı Hikayeleri</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gray-800 rounded-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
              <img src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="E-commerce Project" className="w-full h-64 object-cover"/>
              <div className="p-8 text-left">
                <h4 className="text-2xl font-bold mb-3">E-Ticaret Platformu Optimizasyonu</h4>
                <p className="text-gray-400 mb-6"><b>Sorun:</b> Yavaş yüklenen, dönüşüm oranı düşük bir site.</p>
                <p className="text-gray-400 mb-6"><b>Çözüm:</b> Kapsamlı performans iyileştirmeleri ve kod optimizasyonu.</p>
                <p className="text-blue-400 font-bold"><b>Sonuç:</b> Sayfa yüklenme süresi %60 azaldı, satışlar %25 arttı.</p>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
              <img src="https://images.unsplash.com/photo-1601597111158-2f9e2d40d122?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Mobile Banking App" className="w-full h-64 object-cover"/>
              <div className="p-8 text-left">
                <h4 className="text-2xl font-bold mb-3">Mobil Bankacılık Uygulaması</h4>
                <p className="text-gray-400 mb-6"><b>Sorun:</b> Kullanıcı dostu olmayan, sık çöken bir uygulama.</p>
                <p className="text-gray-400 mb-6"><b>Çözüm:</b> Modern arayüzle yeniden tasarım ve altyapı güçlendirmesi.</p>
                <p className="text-blue-400 font-bold"><b>Sonuç:</b> Kullanıcı memnuniyeti %40 arttı, çökme oranı %95 azaldı.</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section 
        id="testimonials" 
        className="py-20 bg-gray-800"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-12">Müşterilerim Ne Diyor?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="bg-gray-700 p-8 rounded-lg">
                <p className="text-lg italic text-gray-400 mb-6">“Kürşat, projemizi beklentilerimizin çok ötesine taşıdı. İletişimi ve profesyonelliği sayesinde süreç boyunca kendimizi güvende hissettik.”</p>
                <p className="text-white font-bold text-lg">Ahmet Çelik</p>
                <p className="text-blue-400">CEO, Teknoloji A.Ş.</p>
            </div>
            <div className="bg-gray-700 p-8 rounded-lg">
                <p className="text-lg italic text-gray-400 mb-6">“Teknik bilgisi ve sorunlara yaklaşımı birinci sınıf. Karmaşık bir problemi, bizim bile anlayacağımız basitlikte çözdü. Kesinlikle tekrar çalışacağız.”</p>
                <p className="text-white font-bold text-lg">Elif Kaya</p>
                <p className="text-blue-400">Ürün Müdürü, FinTech Bank</p>
            </div>
            <div className="bg-gray-700 p-8 rounded-lg">
                <p className="text-lg italic text-gray-400 mb-6">“Piyasada birçok geliştirici var ama Kürşat gibi işi sahiplenen ve projenin başarısını kendi başarısı gibi gören birini bulmak zor. Harika bir iş çıkardı.”</p>
                <p className="text-white font-bold text-lg">Mehmet Öztürk</p>
                <p className="text-blue-400">Kurucu, Hızlı Kargo</p>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section 
        id="contact" 
        className="py-20"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-4">Projenizi Hayata Geçirelim</h3>
          <p className="text-gray-400 mb-8 text-xl">Aklınızdaki projeyi ve hedeflerinizi konuşmak için 15 dakikalık ücretsiz bir görüşme ayarlayalım.</p>
          <a href="mailto:kursat.yilmaz@email.com" className="bg-blue-600 text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-blue-700 transition-transform transform hover:scale-105 duration-300">
            Ücretsiz Görüşme Ayarla
          </a>
        </div>
      </motion.section>

      <footer className="bg-gray-900 text-center py-6">
        <p>&copy; {new Date().getFullYear()} Kürşat Yılmaz. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  );
};

export default HomePage;
