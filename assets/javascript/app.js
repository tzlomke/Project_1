
// Input function ()
    // search form
        // input field for searching artist names- store input as variable
        // submit button - click event
            // input validation with modal - if/else

// make ajax calls
    // bands in town - push object data into arrays for later for loop
    // spotify -push object data into widget

// else    //  Output function ()
    // clear previous data
    // for loop {}  to create output table for results from bands in town
        // filter down by date
        // include link to purchase tickets

    // push artist id into spotify widget


// band, date, venue, ticket

// Query AJAX for artist ID AJAX query to spotify using 'search'
// Utilize artist ID for widget

$(document).ready(function() {
    let artistRequested = 'Ivan Torrent';

        $('.spotify-link').on('click', function() {
            $('.spotify-link').attr('href', 'https://accounts.spotify.com/en/authorize?response_type=token&client_id=ca5834e480c6461fba72bb35632ecead&redirect_uri=https:%2F%2Ftzlomke.github.io%2FProject_1%2F&scope=user-top-read%20user-library-read&state=123');
        });
    
    $('.API_test').on('click', function() {
    // function spotifyAPICall() {
        console.log("Hey!");
        let queryURL = `https://api.spotify.com/v1/search?q=${artistRequested}&type=artist`;
        $.ajax ({
            url : queryURL,
            method: 'GET',
        }).then(function(response){
            console.log(response);
        });
    // };
});

    });