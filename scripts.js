// API Key: 6053f1a230348aba0c3dd2138e005c79
// Documentation: https://developers.themoviedb.org/3/getting-started/introduction
// Support forum: https://www.themoviedb.org/talk/category/5047958519c29526b50017d6
// Wrappers & libraries: https://www.themoviedb.org/documentation/api/wrappers-libraries
// Service status: https://status.themoviedb.org

// https://www.youtube.com/playlist?list=PLNCevxogE3fiLT6bEObGeVfHVLnttptKv - API project playlist
// https://www.youtube.com/watch?v=0WPCyqW6N7Y - search bar through data tut using filter()
// https://www.youtube.com/watch?v=hBbrGFCszU4 - dropdown menu tut -- will have to implement the DOM to replace the menu options with movie genres
// https://www.youtube.com/watch?v=AVmGmLFcukM - another dropdown menu but with API implementation

//idea 1.netflix style scroll through movies, click on movie to show the description + a like / dislike button. 3 event listeners there. 
//idea 2. have a dropdown filter at top of the page, select a genre and have cards pop up with movies. Click on cards to display the movie description. review / comment box at the bottom of each card?
// EL 1. like / dislike the movie? or a fav option
// EL 2. comment box/ review box
// EL 3. mouse hover / click, so when you hover or click the movie it displays the description of it? or a pop up card on click. 

const tmdbKey = "6053f1a230348aba0c3dd2138e005c79";
const tmdbBaseUrl = "https://api.themoviedb.org/3";

const start = async () => {
    const movies = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=6053f1a230348aba0c3dd2138e005c79`)
    .then(res=>res.json())
    .then(data=>console.log(data))
}
start()
// fetch genres from the API and make the dropdown menu
const getGenres = async () => {
    const genreRequestEndpoint = "/genre/movie/list";
    const requestParams = `?api_key=${tmdbKey}`;
    const urlToFetch = `${tmdbBaseUrl}${genreRequestEndpoint}${requestParams}`;
    try {
      const response = await fetch(urlToFetch);
      if (response.ok) {
        const jsonResponse = await response.json();
        const genres = jsonResponse.genres;
        console.log(jsonResponse.genres)

        document.getElementById("genres").innerHTML = `
        ${genres.map(function (genre) {
            return `<option>${genre.name}</option>`}).join('')}`
        return genres;
      }
    } catch (error) {
      console.log(error);
    }

  };
getGenres();