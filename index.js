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

    //Hide loading data when data is loaded
    function hideLoading(){
        $(".loading").addClass("canSee");
    };

    //Add movie data to HTML
    function displayMovies(movies) {

        //resets html to blank, so when user adds movie page is reset
        $("#movieContainer").html("");

        //generates html for displaying movie
        movies.forEach(function (movie) {
            $("#movieContainer").append(`<div class="col">
                                <h4>${movie.title}</h4>
                                <img src="${movie.poster}" alt="Example Image">
                                 <p>${movie.year}</p>
                                 <p>${movie.rating}</p>
                                 <p>${movie.plot}</p>
                                 <button type="button" id="editButton${movie.id}" class="editButton" data-id=${movie.id}>Edit</button>
                                 <button type="button" id="deleteButton${movie.id}" class="deleteButton" data-id=${movie.id}>Delete</button>
                                 </div>`);
        });
    }

    //click
    $(document).on("click",".editButton",function() {
        console.log("clicked");
        console.log($(this).attr("data-id"));
        // AJAX(serverURL + "/6", "DELETE")
        //     .then(data => console.log(data))
    });

    //UPDATE/EDIT existing data
    //"PATCH METHOD", edit only what put in
    // AJAX(serverURL + "/9", "PATCH", {
    //     message: "We are REALLY ready for the weekend!"
    // })
    //     .then(data => console.log(data));

    //save changes --> that's when to run patch request

    //one modal in index and all edit buttons bring it up
    //modal, when click button pops up. (bootstrap)


    //all share something, edit/delete buttons share a class. document.on, click functions don't work.
    //hidden input to hide ID, to grab, use this.attr (maybe), attribute for data



    //upon click of submit button, updates data and regenerates movies
    $('#submit').click(function(event) {
        event.preventDefault();

        //POST - Update data with new user input from form
        AJAX(serverURL, "POST",
            {title: $("#title").val(),
            year: $("#year").val(),
            rating: $("#rating").val(),
            plot: $("#plot").val()
            })
            .then(function (data){
                console.log(data);
            });

        //Refreshes movie data to display user input/movie
        AJAX(serverURL)
            .then(data => {console.log("Data load after user input:"); console.log(data); displayMovies(data); hideLoading()})
    });

    //TODO: CSS Styling
    //TODO: Mobile layout responsive (make look one way on desktop and another on mobile, etc)
    //TODO: Edit and delete button
