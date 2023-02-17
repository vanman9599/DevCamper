const fs = require('fs');
const mongoose = require('mongoose')
const colors = require('colors')
const dotenv = require('dotenv')

dotenv.config({path: './config/config.env'});

const Bootcamp = require('./models/Bootcamp')

mongoose.connect(process.env.MONGO_URI, 
    {
        useNewUrlParser: true
    })
const bootcamps = JSON.parse(fs.readFileSync(`${__dirname}/_data/bootcamps.json`, 'utf-8'))

//import data into db
const importData = async ()=>{
    try{
        await Bootcamp.create(bootcamps)
        console.log('data imported...'.green.inverse)
        process.exit()
    }catch(err){
        console.log(err)

    }
}

//delete data
const deleteData = async ()=>{
    try{
        await Bootcamp.deleteMany()
        console.log('data destroyed...'.red.inverse)
        process.exit()
    }catch(err){
        console.log(err)

    }
}

if(process.argv[2]==='-i'){
    importData()
}else if(process.argv[2]==='-d'){
    deleteData()
}

