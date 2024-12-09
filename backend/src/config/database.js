const mongoose=require('mongoose');


// MongoDB bağlantı URL'si
const dbURL='mongodb://localhost:27017/taskmanager';

const connectDB=async()=>{
try{

    await mongoose.connect(dbURL);
    console.log('MongoDB connected successfully')
}catch(err){
    console.error('Error connecting to MongoDB:',err);
    process.exit(1); // Bağlantı hatasında uygulamayı sonlandır
}


}

module.exports=connectDB;