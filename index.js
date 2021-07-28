"use strict"

const serverURL = "https://candy-cottony-baroness.glitch.me/movies"

// const OMDBurl = "http://www.omdbapi.com/?apikey=[1d3b03a8]&"
// https://omdbapi.com/?t=scott+pilgrim&apikey=1d3b03a8

// //CALL OMDB Data Base
// function omdbURL(url, method = "GET", data) {
//     const options = {
//         method: method,
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//     };
//     fetch(url, options)
//         .then(response => response.json()) /* Movie was created successfully */
//         .catch(error => console.error(error)); /* handle errors */
//
// }
// omdbURL("https://omdbapi.com/?t=scott+pilgrim&apikey=1d3b03a8")
//     .then(data => console.log(data))


//CALL GLITCH DATA BASE
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
};

//-----------------------------------------

//DISPLAY GLITCH DATA
AJAX(serverURL)
    .then(data => {console.log(data); displayMovies(data); hideLoading()})

//-----------------------------------------

//HIDE LOADING ICON WHEN DATA IS LOADED
function hideLoading(){
    $(".loading").addClass("canSee");
};

//-----------------------------------------

//ADD MOVIE DATA TO HTML
function displayMovies(movies) {
    //resets html to blank, so when user adds movie page is reset
    $("#movieContainer").html("");

    //generates html for displaying movie
    movies.forEach(function (movie) {
        $("#movieContainer").append(`<div class="card col-md-4 mb-4 bg-light ">
                                    <img class="card-img-top" src="${movie.poster}" alt="Example Image">
                                    <div class="card-body">
                                        <h4 class="card-title overflow-auto" id="localMovie${movie.id}">${movie.title}</h4>
                                        <p class="card-text overflow-auto" id="movieYear${movie.id}">${movie.year}</p>
                                        <p class="card-text overflow-auto" id="movieRating${movie.id}">${movie.rating}</p>
                                        <p class="card-text overflow-auto" id="moviePlot${movie.id}">${movie.plot}</p>
                                    </div>
                                    <div class="btn-group"></div>
                                         <button type="button" id="editButton${movie.id}" class="editButton" data-id=${movie.id}>Edit</button>
                                        <button type="button" id="deleteButton${movie.id}" class="deleteButton" data-id=${movie.id}>Delete</button>
                                     </div>
                                     </div>`);
    });
};

//-----------------------------------------

//DELETE MOVIE WHEN CLICKED
$(document).on("click",".deleteButton",function() {
    const actuallyDelete = confirm("Do you really want to delete selected movie?");
    if(actuallyDelete){
        AJAX(serverURL + "/" + $(this).attr("data-id"), "DELETE")
            .then(AJAX(serverURL)
                .then(data => displayMovies(data)))
    }
});

//-----------------------------------------

//SORT BY SELECTED GENRE

//when new genre is selected, call updateGenreMovie and give it data + selected genre value
$("#genreSelect").change(function (event){
    event.preventDefault();
    AJAX(serverURL)
        .then(data => updateGenreMovie(data, $("#genreSelect").val()));
});

//function to only display movies that match selected genre
function updateGenreMovie(movies, genre) {
    //resets html to blank, so when user adds movie page is reset
    $("#movieContainer").html("");

    //generates html for displaying movie (only if match selected genre)
    movies.forEach(function (movie) {
        if(movie.genre.includes(genre)){
            $("#movieContainer").append(`<div class="card col-md-4 mb-4 bg-light ">
                                            <img class="card-img-top" src="${movie.poster}" alt="Example Image">
                                            <div class="card-body">
                                                <h4 class="card-title overflow-auto" id="localMovie${movie.id}">${movie.title}</h4>
                                                <p class="card-text overflow-auto" id="movieYear${movie.id}">${movie.year}</p>
                                                <p class="card-text overflow-auto" id="movieRating${movie.id}">${movie.rating}</p>
                                                <p class="card-text overflow-auto" id="moviePlot${movie.id}">${movie.plot}</p>
                                            </div>
                                            <div class="btn-group"></div>
                                                 <button type="button" id="editButton${movie.id}" class="editButton" data-id=${movie.id}>Edit</button>
                                                <button type="button" id="deleteButton${movie.id}" class="deleteButton" data-id=${movie.id}>Delete</button>
                                             </div>
                                             </div>`);
        }
        else if(genre === "Genre"){
            displayMovies(movies);
        }
    });
};

//-----------------------------------------

// SORT BY SELECTED RATING

//when new rating is selected, call updateRatingMovie and give it data + selected rating value
$("#ratingSelect").change(function (event){
    event.preventDefault();
    AJAX(serverURL)
        .then(data => updateRatingMovie(data, $("#ratingSelect").val()));
});

//function to only display movies that match selected rating
function updateRatingMovie(movies, rating) {
    //resets html to blank, so when user adds movie page is reset
    $("#movieContainer").html("");

    //generates html for displaying movie (only if match selected genre)
    movies.forEach(function (movie) {
        if(movie.rating.includes(rating)){
            $("#movieContainer").append(`<div class="card col-md-4 mb-4 bg-light ">
                                        <img class="card-img-top" src="${movie.poster}" alt="Example Image">
                                        <div class="card-body">
                                            <h4 class="card-title overflow-auto" id="localMovie${movie.id}">${movie.title}</h4>
                                            <p class="card-text overflow-auto" id="movieYear${movie.id}">${movie.year}</p>
                                            <p class="card-text overflow-auto" id="movieRating${movie.id}">${movie.rating}</p>
                                            <p class="card-text overflow-auto" id="moviePlot${movie.id}">${movie.plot}</p>
                                        </div>
                                        <div class="btn-group"></div>
                                             <button type="button" id="editButton${movie.id}" class="editButton" data-id=${movie.id}>Edit</button>
                                            <button type="button" id="deleteButton${movie.id}" class="deleteButton" data-id=${movie.id}>Delete</button>
                                         </div>
                                         </div>`);
        }
        else if(rating === "Rating"){
            displayMovies(movies);
        }
    });
};

//-----------------------------------------

//EDIT WITH MODAL
    // Get the modal
        var modal = document.getElementById("myModal");

    // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

    //When close button is clicked, closes model
        span.onclick = function() {
            modal.style.display = "none";
        };

    //function to close modal
        function closeModal(){
            modal.style.display = "none";
        }

    // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        };

    //default value for testID
        let testID ="";

    // When the user clicks the edit button, opens the modal
        $(document).on("click",".editButton",function(){

            //displays modal
            modal.style.display = "block";

            // sets number for ID to reference to later
            testID = $(this).attr("data-id");
            console.log(testID);
            console.log($("#localMovie" + testID).text());

            //DONE: set current values of year/rating/plot as default form text
            let movieObject = {
                title: $("#localMovie" + testID).text(),
                year: $("#movieYear" + testID).text(),
                rating: $("#movieRating" + testID).text(),
                plot: $("#moviePlot" + testID).text()
            }

            //makes default text current movie properties
            $("#movieTitle").val(movieObject.title);
            $("#yearReleased").val(movieObject.year);
            $("#movieRating").val(movieObject.rating);
            $("#moviePlot").val(movieObject.plot);

        });

    // upon submit click, edit current movie values to whatever input value is
        $('#editSubmit').click(function (event){
            event.preventDefault();
            console.log("Submit clicked!");
            console.log(testID);

            //PATCH
            AJAX(serverURL + "/" + testID, "PATCH", {
                title: $("#movieTitle").val(),
                year: $("#yearReleased").val(),
                rating: $("#movieRating").val(),
                plot: $("#moviePlot").val()
            }).then(AJAX(serverURL)
                .then(data => {displayMovies(data); closeModal()}))
        });
