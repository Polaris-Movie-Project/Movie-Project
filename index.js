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
        .then(data => {console.log("Inital Data Load:"); console.log(data); displayMovies(data); hideLoading()})

    //function to hide loading when data is loaded in
    function hideLoading(){
        $(".loading").addClass("canSee");
    };

    //function to add movie data to html
    function displayMovies(movies){
        //resets html to blank, so when user adds movie page is reset
        $("#movies").html("");

        //generates html for displaying movie
        movies.forEach(function(movie) {
            $("#movies").append(`<h4>${movie.title}</h4>
                                 <p>${movie.year}</p>
                                 <p>${movie.rating}</p>
                                 <p>${movie.plot}</p>`);
        });
    }

    //upon click of submit button, updates data and regenerates movies
    $('#submit').click(function(event) {
        event.preventDefault();

        //POST - Update data with new user input from form
        AJAX(serverURL, "POST", {title: $("#title").val()})
            .then(function (data){
                console.log(data);
            });

        //Refreshes movie data to display user input/movie
        AJAX(serverURL)
            .then(data => {console.log("Data load after user input:"); console.log(data); displayMovies(data); hideLoading()})
    });



    //TODO: CSS Styling
    //TODO: Mobile layout responsive (make look one way on desktop and another on mobile, etc)
