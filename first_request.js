var request = require('request');

// request('http://www.google.com', function (error, response, body) {
//     if(!error && response.statusCode == 200) {
//         console.log(body)//This will show the HTML for the google home page
//     }
// });

request('http://www.reddit.com', function (error, response, body) {
    if(error) {
        console.log('Somethin done went wrong!');
        console.log(error);
    } else {
        if(response.statusCode === 200) {
            console.log(body);
        }
    }
});