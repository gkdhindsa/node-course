const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const command = process.argv[2]
if (command) {
   
    geocode(command, (error, {latitude, longitude, location}={}) => {
        if (error) {
            console.log('Error: ', error)
        } else {
            forecast(latitude, longitude, (error, foredata) => {
                if (error) {
                    console.log('Error', error)
                } else {
                    console.log(location)
                    console.log(foredata)
                }

            })
        }


    })
} else {
    console.log('no location entered')
}