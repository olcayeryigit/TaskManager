// Gerekli modülleri içeri aktarıyoruz
const bodyParser=require('body-parser');
const express=require('express');
const cors=require('cors');


// Express uygulamamızı başlatıyoruz
const app=express();

// CORS ve bodyParser'ı kullanıyoruz
app.use(cors());
app.use(bodyParser.json());

// Burada rota tanımlamaları yapılabilir
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Diğer rota ve middleware'leri buraya ekleyebilirsiniz

module.exports=app;