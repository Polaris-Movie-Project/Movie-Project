"use strict"

const serverURL = "https://ten-coordinated-spectrum.glitch.me/movies"

    //Call data & get it
    function AJAX(url, method = "GET", data){

        const options = {
            method: method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        };

        return fetch(url, options)
            .then(response => response.json()) //parsing data
            .then(responseData => responseData)
            .catch(error => error);
    }


    //DISPLAY DATA
    AJAX(serverURL)
        .then(data => console.log(data))

    //TODO: Function to remove loading message once data is called

    //TODO: Function to add data to html (cards?)

    //TODO: Create form and have it update movie data base

    //TODO: Make mobile responsive?
