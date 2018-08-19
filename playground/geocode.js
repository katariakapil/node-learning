const request = require('request');


function makeHTTP (url, address, callback)  {

    request.post(
        {
            uri: `${url}${address}`, json: true
        }, (error, response, body) => {

            if (error) {
                callback('error occurred while make geo location call');
            }

          callback(undefined, {
                address : body
            });

        });


}



module.exports = {

    makeHTTP
}