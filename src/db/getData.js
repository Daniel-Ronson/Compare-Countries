const request = require('request-promise')
require('./mongoose')
const Country = require('../models/country')

const getCountryData = (countryName) => {
    var options = {
        uri : 'https://restcountries.eu/rest/v2/alpha/' + countryName,
        json: true
   }

    request(options)
        .then(async function (countryData) {
            //destructure object into seperate identifiers
            //Country data contains data recieved from request, a json object mapped to javascript object
            const {name,area,capital,population,flag,languages,region,subregion,alpha3Code} = countryData

            //replace all letters that have accents with a basic letter( e^ -> e)
             name.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
                        
            //Required values in mongoose model
            const props = ['name', 'area']
            let contains_flag = true

            props.forEach(element => {if(!countryData.hasOwnProperty(element))contains_flag = false})

            //query mongodb, determine if specific country already exists
            //findOne returns the object if it exists or null
            //force synchronus behavoir with await because code below depends on output
            const unique_country = await Country.findOne({name:name})

            if(unique_country == null && contains_flag == true){

                //Mongoose model maps to Mongodb document 
                const country  = new Country({
                    name: name,
                   "area": area,
                    "capital":capital,
                    "population":population,
                    "flag":flag,
                    "region":region,
                    "subregion":subregion,
                    "countryCode":alpha3Code,
                    "language":Object.values(languages)[0].name
                })

        
                //console.log(name)
    
                country.save(function (err,country) {
                    if(err)  console.log('error adding: ' + alpha3Code + '   ' + name);
                   // else console.log('adding: ' + name)
                })
            }
            
            //console.log('country- ' + name + ' -    already exists in DB')
        })
        .catch(function(err){
            console.log('api call not found for country Name:  ' + countryName)
        })

}
 //getCountryData('GIN')

module.exports = getCountryData

