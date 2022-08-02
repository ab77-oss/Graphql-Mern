const  mongoose = require('mongoose');
const colors = require('colors');
require('dotenv').config();




const connectDB = async () => {
    const conn = mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true } );
    //console.log(`MongoDB connected : ${conn.connection.host}`.cyan.underline.bold);
    console.log('MongoDB connected' );

};



module.exports = connectDB;