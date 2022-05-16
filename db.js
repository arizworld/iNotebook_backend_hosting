const mongoose = require('mongoose');
// Connects to the data base 
const mongoURI = "mongodb://localhost:27017/inotebooks";
const connectToMongo  = ()=>{
    mongoose.connect(mongoURI,()=>{
        console.log('connected to mongoose');
    })
}
module.exports = connectToMongo;