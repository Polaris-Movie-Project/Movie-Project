// //grabbing data from glitch (GET request)
    //     fetch(serverURL)
    //     .then(response => response.json()) //parsing data
    //     .then(data => console.log(data));  //console.log data

// //POST Request (send/add data to server)
    // const objToSend= {
    //     user: "Samuel",
    //     message: "Really enjoyed the movies project!"
    // };
    // const options = {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(objToSend), //convert object into pure json object, puts esc characters in front of ""
    // };
    // fetch(serverURL, options)
    //     .then( response => console.log(response) ) /* review was created successfully */
    //     .catch( error => console.error(error) ); /* handle errors */

//update server base
    //"POST" METHOD
    // AJAX(serverURL, "POST", {title: "jquery ain't got nothing"})
    //     .then(function (data){
    //         console.log(data);
    //     });

//grab third entry in data base, don't have to specify GET
//use to grab individual item
    AJAX(serverURL + "/3" )
        .then(data => console.log(data))


//UPDATE/EDIT existing data (whatever has id of 9 in this case)
// "PUT METHOD", need to put in entire object want to change
    // AJAX(serverURL + "/9", "PUT", {
    //     name: "Polaris",
    //     message: "We are ready for the weekend!"
    // })
    //     .then(data => console.log(data));

//UPDATE/EDIT existing data
//"PATCH METHOD", edit only what put in
    // AJAX(serverURL + "/9", "PATCH", {
    //     message: "We are REALLY ready for the weekend!"
    // })
    //     .then(data => console.log(data));

//REMOVE OBJECT/MOVIE
    // AJAX(serverURL + "/6", "DELETE")
    //     .then(data => console.log(data))
