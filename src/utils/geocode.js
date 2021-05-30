const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoic2VudGhpbGt1bWFyMTQ5MCIsImEiOiJja251YzJiZ2UwYmQ5MnBta2ZyMWxoazg1In0.dkrqDOjQn7HbmIEx-4M44g&limit=1'
    // encodeuricomponent using to encode the addres with special character like '?'
    request({ url, json: true }, (error, {body}={}) => { // object destruction in 2nd parameter and object shorthand in 1st parameter
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                longitude: body.features[0].center[0],
                latitude: body.features[0].center[1],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode