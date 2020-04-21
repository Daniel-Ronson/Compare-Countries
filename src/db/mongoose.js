//start mongoDB
//"C:\Program Files\mongodb\bin\mongod.exe" --dbpath="C:\Program Files\mongodb-data\data"

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Countries-Test', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
} )



