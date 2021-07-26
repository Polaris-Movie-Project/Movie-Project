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

    //function to hide loading when data is loaded in
    function hideLoading(){
        $(".loading").addClass("canSee");
        console.log("this is still working");
    };

    //DISPLAY DATA
    AJAX(serverURL)
        .then(data => console.log(data))
        .then(hideLoading);

    // //GET INDIVIDUAL MOVIE
    // AJAX(serverURL + "/3" )
    // .then(data => console.log(data))
    //
    // //POST MOVIE REQUEST
    // AJAX(serverURL, "POST", {title: "I am excited for the Olympics!!!"})
    // .then(function (data){
    //     console.log(data);
    // });

// //UPDATE/EDIT existing data (whatever has id of 9 in this case)
// // "PUT METHOD", need to put in entire object want to change
// AJAX(serverURL + "/9", "PUT", {
//     name: "Polaris",
//     message: "Star Wars"
// })
//     .then(data => console.log(data));

//UPDATE/EDIT existing data
//"PATCH METHOD", edit only what put in
// AJAX(serverURL + "/9", "PATCH", {
//     message: "Hello World"
// })
//     .then(data => console.log(data));

// //REMOVE OBJECT/MOVIE
//     AJAX(serverURL + "/19", "DELETE")
//     .then(data => console.log(data))


    //TODO: Function to remove loading message once data is called DONE

    //TODO: Function to add data to html (cards?)

    //TODO: Create form and have it update movie data base

    //TODO: Make mobile responsive?
