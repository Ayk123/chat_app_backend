const mongoose = require('mongoose');
require('dotenv').config();

mongoose.set('strictQuery', false);

mongoose.connect(process.env.MONGO_URL,{useNewUrlParser: true}).then(console.log('Connected to mongoDB')).catch 
(err => console.log(err));