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
//idea 2. have a dropdown filter at top of the page, select a genre and have cards pop up with movies. Click on cards to display the movie description. review box at the bottom of each card?
//--> HTML logic - start with header, search??, filter then movie cards below. 

const tmdbKey = "6053f1a230348aba0c3dd2138e005c79";
const tmdbBaseUrl = "https://api.themoviedb.org/3";
