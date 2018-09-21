const request = require('request');
const expect = require('chai').expect;
const expectedStatusCode = 200;
const expecetedUserId = 1;

request('https://jsonplaceholder.typicode.com/posts/1', function(error, response, body){
    if(error) {
        console.log('Error: ' + error);
    }
    let actualStatusCode = response.statusCode;
    let actualUserId = JSON.parse(response.body).userId;
    console.log('Status code of the response is: ' + actualStatusCode);
    console.log('User id of the response is: ' + actualUserId);
    expect(actualStatusCode).to.equal(expectedStatusCode, 'Error: Expected status code is ' 
                    + expectedStatusCode + ' instead found ' + actualStatusCode);
    expect(actualUserId).to.equal(expecetedUserId, 'Error: Expected status code is ' 
                    + expecetedUserId + ' instead found ' + actualUserId);
});