// Gerekli modülleri içeri aktarıyoruz
const app = require('./app'); // app.js dosyasını içeri aktarıyoruz
const connectDB = require('./config/database'); // Veritabanı bağlantısı
const PORT = process.env.PORT || 3000; // Port ayarı (varsayılan: 3000)


// Veritabanı bağlantısını başlat
connectDB();


// Sunucuyu başlatıyoruz
app.listen(PORT,()=>{
    console.log(`Server ${PORT} portunda çalışıyor`);
});