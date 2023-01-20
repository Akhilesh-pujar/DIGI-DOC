const mongoose = require('mongoose')

mongoose
    .connect('mongodb+srv://roopeshjkr:aPLPeUhE2n3Kh32@cluster0.rurukiu.mongodb.net/DigitalDoc?retryWrites=true&w=majority', { useNewUrlParser: true })
    
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db