const ax = require('axios');

ax.get('https://maps.googleapis.com/maps/api/geocode/json?address='+encodeURIComponent('4306 valley ave aptn')
).then((response) => {

    console.log(response.data);
    if (response.data.status === 'ZERO_RESULTS'){

        throw new Error('unable to find address');
    }
}
).catch((error) => {
    console.log(error);
});
