const express = require('express')
const mongoose = require('mongoose')

const app = express()
const PORT = process.env.PORT || 5000

async function start() {
    try {
        await mongoose.connect('mongodb+srv://admin:admin@cluster0.foua9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
            /*useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: true*/
        })
         app.listen(PORT, () => {
            console.log(`Server started on port: ${PORT} `);
         })
    } catch (err) {console.error(err)}
    
}
start()