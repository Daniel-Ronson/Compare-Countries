const mongoose = require('mongoose');
const validator = require('validator')

const Country = mongoose.model('Country',{
    name: {
        type: String,
        required: true,
        trim: true
    },

    //in km^2
    area: {
        type: Number,
        required: true
    },
    capital: {
        type: String,
        trim: true
    },

    population: {
        type: Number
    },

    //provides url to svg image
    flag: {
        type:String,
        trim:true
    },

   // what is the language there?
     language: {
         type:String,
         trim:true
     },
     region: {
        type:String,
        trim:true
     },

     subregion: {
        type:String,
        trim:true
     },

     countryCode: {
        type:String,
        trim:true
     }

})


module.exports = Country