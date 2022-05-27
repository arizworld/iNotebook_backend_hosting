const mongoose = require('mongoose');
// Connects to the data base 
const mongoURI = "mongodb+srv://ArizWorld:Ariz.1234@inotebookapp.gievebh.mongodb.net/?retryWrites=true&w=majority";
const connectToMongo  = ()=>{
    mongoose.connect(mongoURI,()=>{
        console.log('connected to mongoose');
    })
}
module.exports = connectToMongo;