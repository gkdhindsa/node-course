const request = require('postman-request')

const forecast=(latitude, longitude, callback)=>{
    const url=`http://api.weatherstack.com/current?access_key=d3042705f153596ffa8ccd324a1e01a4&query=${longitude},${latitude}?units=c`
    
request({
    url,
    json: true
}, (error, {body}) => {
    if (error) { 
        callback('Unable to connect')
    }
    else if(body.error)
    {
        callback('Unable to find these coordinates')
    } 
    else {
        const str=`temp: ${body.current.temperature} feels like: ${body.current.feelslike}`
        callback(undefined, str)
    }
})


}
module.exports=forecast