const request = require('postman-request')
const geocode = (address, callback) => {

    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/"+ address+".json?access_token=pk.eyJ1IjoibmVobWF0dW5kaSIsImEiOiJja3FqOTl5NzAwdGdxMnBueGo4bG5qN2JlIn0.RNSeHuK3OYZtSGCCX6j_fA'
    request({
        url,
        json: true
    }, (error, response) => {
        if (error) {

            callback('Unable to connect to location services', undefined)
        } 
        else if (response.body.features.length === 0) {
            callback('No such place exists')

        } else {
            let c = response.body.features[0]
            let data={
                longitude: c.center[0],
                latitude: c.center[1],
                location: address
            }
            callback(undefined, data)
           
        }

    })
}

module.exports=geocode
