function testApiCall() {

    console.log('testApiCall()');

    let url = 'https://343urjj4i.execute-api.us-west-2.amazonaws.com/DEV/testaccesstoken';

    let options = {
        method: "GET",
        headers: {
          "accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": "PUT YOUR AccessToken HERE",
          "Host": "343urjj4i.execute-api.us-west-2.amazonaws.com"
        }
    }

    fetch(url, options).then(function(response) {
        return response.json();
    }).then(function (responseData) {
        window.alert(JSON.stringify(responseData));
    });

}