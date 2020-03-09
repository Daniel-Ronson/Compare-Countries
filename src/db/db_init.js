const request = require('request')
const cheerio = require('cheerio')
const getCountryData = require('./getData')
const Country = require('../models/country')

require('./mongoose')

//const data = (({name,area,capital,population,nativeName,flag,}) => ({name,area,capital,population,nativeName,flag,languages}))(body)


request('https://en.wikipedia.org/wiki/ISO_3166-1#Current_codes', (error, response, html) => {
    if(!error && response.statusCode == 200) {
         var countries = []
        const $ = cheerio.load(html);
        $('#mw-content-text > div > table:nth-child(30) > tbody > tr > td:nth-child(3) > span').each((index,element) => {
            var countryName = $(element).text()

            getCountryData(countryName)

        })

    }
}) 


// getCountryData('USA', (error,data) =>{
//     console.log(data.name)
// })