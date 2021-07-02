
const path = require('path')
const hbs = require('hbs')
const express = require('express')
const app = express()


const geocode=require('./utils/geocode')
const forecast = require('./utils/forecast')

//Define paths for Exprss config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//Steup handlebards enginer and views location
app.set('views', viewsPath)
app.set('view engine', 'hbs')
hbs.registerPartials(partialsPath)

//Setup static directory to serve
app.use(express.static(publicDirectoryPath))


app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Nem'
    })
})
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'Nem'
    })
})


app.get('/help', (req, res) => {
    res.render('help', {
        message: 'This is for your help',
        title: 'Help',
        name: 'Nem'
    })
})


app.get('/weather', (req, res) => {

    if (!req.query.address) {
        return res.send({
            errorMessage: 'No address provided'
        })

    }
    geocode(req.query.address, (error, {latitude=0, longitude=0, location=''})=>{
   

        if(error)
        {
            res.send({error})
        }
        else{
            forecast(latitude, longitude, (errorMessage, forecastMessage)=>{
                if(error){
                    res.send(errorMessage)
                }
                else{
                    res.send({
                        forecast: forecastMessage,
                        address: req.query.address,
                        location: location
                    })
                }
            })
        }
    })
    
})


app.get('/help/*', (req, res) => {
    res.render('404', {
        message: 'HELP NOT FOUND',
        title: 'Help 404',
        name: 'Nem'
    })
})


/*For unmatched route */
app.get('*', (req, res) => {
    res.render('404', {
        message: 'PAGE NOT FOUND',
        title: 'PAGE 404',
        name: 'Nem'
    })
})


app.listen(3000, () => {
    console.log('The server is up on port 3000')
})