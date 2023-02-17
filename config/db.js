const mongoose = require('mongoose')

mongoose.set('strictQuery', true)
const connectDB = async ()=>{
   const conn = await mongoose.connect(process.env.MONGO_URI, 
    {
        useNewUrlParser: true
    })
    console.log(`Mongodb Connected: ${conn.connection.host}`.cyan.bold)
}

module.exports = connectDB