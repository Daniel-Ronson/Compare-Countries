const request = require('request')
const cheerio = require('cheerio')

var countries = []; 

//Web Scraping Request

request('https://www.iban.com/country-codes', (error, response, html) => {
    if(!error && response.statusCode == 200) {

         const $ = cheerio.load(html);

         //JQuery function
         $('#myTable > tbody > tr > td:nth-child(1)').each((index,element) => {
           // console.log($(element).text())
            countries.push($(element).text())
         })

    }
});

countries.forEach((item,index,array) => {
    console.log(item)
})


