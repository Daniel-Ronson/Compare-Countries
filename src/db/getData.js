const request = require('request-promise')
require('./mongoose')
const Country = require('../models/country')
const utf8 = require('utf8')

const getCountryData = (countryName) => {
    var options = {
        uri : 'https://restcountries.eu/rest/v2/alpha/' + countryName,
        json: true
   }

    request(options)
        .then(async function (countryData) {
            const {name,area,capital,population,flag} = countryData

            var is_unique = false;

            name.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
            const props = ['name', 'area']
            let contains_flag = true

            props.forEach(element => {if(!countryData.hasOwnProperty(element))contains_flag = false})

            const unique_country = await Country.findOne({name:name})

            if(unique_country == null && contains_flag == true){

                const country  = new Country({
                    name: name,
                   "area": area,
                    "capital":capital,
                    "population":population,
                    "flag":flag
                    //"language":Object.values(languages)[0].name
                })
                console.log(name)
    
                country.save(function (err,country) {
                    if(err)  console.log('error adding: ' + name);
                    console.log('adding: ' + name)
                })
            }
            
            console.log('country- ' + name + ' -    already exists in DB')
        })
        .catch(function(err){
            console.log('api call not found for country Name:  ' + countryName)
        })

}
//getCountryData('WLF')

module.exports = getCountryData

