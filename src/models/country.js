const mongoose = require('mongoose');

const Country = mongoose.model('Country',{
    name: {
        type: String,
        required: true,
        trim: true
    },
    volume: {
        type: String
    },
    fact: {
        type: String,
        trim: true
    }
})

module.exports = Country