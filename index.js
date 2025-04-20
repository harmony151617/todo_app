const express = require('express')
const mongoose = require('mongoose')

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json({extended:true}))
app.use('/api/auth', require('./routes/auth.route'))

async function start() {
    try {
        await mongoose.connect('mongodb://admin:admin@cluster0-shard-00-00.foua9.mongodb.net:27017,cluster0-shard-00-01.foua9.mongodb.net:27017,cluster0-shard-00-02.foua9.mongodb.net:27017/?replicaSet=atlas-agzbnv-shard-0&ssl=true&authSource=admin', {
            /*useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: true*/
        })
         app.listen(PORT, () => {
            console.log(`Server started on port: ${PORT} `);
         })
    } catch (error) {console.log(error)}
    
}
start()