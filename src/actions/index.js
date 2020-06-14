import { finalURL } from '../apis/youtube';

export const fetchVideos = (keyWord) => (dispatch) => {
    let searchQuery = `&q=${keyWord}`;
    fetch(finalURL + searchQuery)
    .then(response => {
        return response.json();
    })
    .then(results => {
        dispatch({
            type    : 'FETCH_VIDEOS',
            payload : {
                videos        : results.items,
                selectedVideo : results.items[0]
            }
        })
    });
}

export const selectVideo = (video) => {
    return {
        type    : 'SELECT_VIDEO',
        payload : video
    }
}
