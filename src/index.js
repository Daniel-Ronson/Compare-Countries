const express = require('express')
require('./db/mongoose') //runs the mongoose.js script which connects to the database
const Country = require('./models/country')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())



app.post('/countries',(req,res) =>{
    const country  = new Country(req.body)

    country.save().then(() => {
        res.send(country)
    }).catch(() => {
        res.status(400).send(e)
    })
})

//GET: return all countries
app.get('/countries', (req,res) => {
    Country.find({}).then((countries) => {
        res.send(countries)
    }).catch((e) => {
        res.status(500).send()
    })
})

//GET: query by name, return country data
app.get('/countries/:name',(req,res) => {
    Country.find({name:req.params.name}).then((country) => {
        if(!country){
            return res.status(404).send()
        }
        res.send(country)
    }).catch((e) => {
        res.status(500).send()
    })
})

//GET: query by id, return country data
app.get('countries/:id',(req,res) => {
    const _id = req.params._id

    country.findById(_id).then((country) => {
        if(!country){
            return res.status(404).send()
        }
        res.send(country)
    }).catch((e) => {
        res.status(500).send()
    })

})

app.listen(port, () =>{
    console.log('Server is up on port' + port)
})