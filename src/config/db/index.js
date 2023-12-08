const mongoose = require('mongoose')

// let URI = 'mongodb://127.0.0.1:27017/education_web_dev'
let URI = process.env.MONGO_URI

async function connect(){
    try {
        await mongoose.connect(URI, {dbName: 'simple_shopping_cart'})
        console.log('db connect successfully!')
    }
    catch(error){
        console.log('db connect failure!')
    }
}

module.exports = { connect }