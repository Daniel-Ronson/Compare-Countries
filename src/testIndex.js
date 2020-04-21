const axios = require('axios')

let countriesa = []
async function getOneCountry(){
    let res = await axios.get(`http://127.0.0.1:3000/countries/Angola`)
    
    const countriesData = res.data.map(el => ({
        areaKm: el.area,
        capital: el.capital,
        population: el.population,
        flagURL: el.flag,
        region: el.region,
        language: el.language
    }))
    let data = countriesData
    console.log(data.population)
}

// async function axiosGetOneCountry(){
//     axios.get('http://127.0.0.1:3000/countries/Angola')
//     .then((response)=>{
//         return response
//     })
//     .catch((error)=>{
//         console.log(error)
//     })
// }
getOneCountry();