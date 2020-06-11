


const KEY = 'AIzaSyBBIBQD9piJKwaIAsc9WcRPQ9otWOOmSbA';
const maxResults = 20;
const URL = 'https://www.googleapis.com/youtube/v3/search?';
const query = `key=${KEY}&part=snippet&maxResults=${maxResults}`;
const finalURL = URL + query;

export const fetchVideos = (keyWord) => async (dispatch) => {
    // const response = await fetch(finalURL)
    console.log("fetchVideos")
    let searchQuery = `q=${keyWord}`;
    fetch(finalURL + searchQuery)
    .then(response => {
        console.log("youtube response: ",response)
    })
    .catch(error => {
        console.log("youtube error: ",error)
    });
}