const mongoose = require('mongoose');

const Country = mongoose.model('Country',{
    name: {
        type: String,
        required: true,
        trim: true
    },

    //in km^2
    area: {
        type: String
    },
    capital: {
        type: String,
        trim: true
    },

    population: {
        type: String,
        trim: true
    },

    nativeName: {

    },

    //provides url to svg image
    flag: {
    },

    //what is the language there?
    languages: {

    }

})

module.exports = Country