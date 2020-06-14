import { combineReducers } from 'redux';

const VideosReducer = (state = {}, action) => {
    switch (action.type) {
        case 'FETCH_VIDEOS':
          return { 
              ...state, 
              videos: action.payload.videos, 
              selectedVideo : action.payload.selectedVideo 
            };
        case 'SELECT_VIDEO':
            return { 
                ...state, 
                selectedVideo : action.payload
              };
        default:
          return state;
    }
    
};

// const selectedVideoReducer = (state = null, action) => {
//     switch (action.type) {
//         case 'SELECT_VIDEO':
//           return action.payload;
//         default:
//           return state;
//     }
// }

export default combineReducers({
    VideosReducer
    // selectedVideoReducer
});

