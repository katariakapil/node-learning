'strict use';

var geocode = require('./geocode');



geocode.makeHTTP('https://maps.googleapis.com/maps/api/geocode/json?address=',encodeURIComponent('4306 valley ave apt E pleasanton'),
    (error, result) => {

    if (error) {

        console.log('error occurred');

    } else {

        console.log("DATA is "+JSON.stringify(result, undefined,1));
    }

});