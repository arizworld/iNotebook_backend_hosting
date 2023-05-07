const mongoose = require('mongoose');
// Connects to the data base 
const mongoURI = `mongodb+srv://ArizWorld:${process.env.DB_PASS}@shopping-cart.0f8ai2b.mongodb.net/inotebook?retryWrites=true&w=majority`;
const connectToMongo = async () => {
    try {
        console.log(process.env.DB_PASS)
        await mongoose.connect(mongoURI)
        console.log('connected to mongoose')
    } catch (error) {
        console.log(`failed to connect ${error.message}`)
    }
}
module.exports = connectToMongo; 