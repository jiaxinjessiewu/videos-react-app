import React from 'react';
import VideoItem from './VideoItem';
import { fetchVideos, selectVideo } from '../actions'; 

export const VideosList = (videos) => {
    const renderedList = videos.map(video => {
        return (
            <VideoItem
                key={video.etag}
                video={video}
            />
        )
    });
    return (
        <div className="ui relaxed divided list">
            {renderedList}
        </div>
    );
}
// const VideosList = () => {
//     const renderedList = this.props.videos.map(video => {
//         return (
//             <VideoItem
//                 key="test"
//                 video={video}
//                 onVideoSelect={this.props.selectVideo(video)}
//             />
//         )
//     });
//     return (
//         <div className="ui relaxed divided list">
//             {renderedList}
//         </div>
//     );
// }
// const mapStateToProps = (state) => {
//     return { 
//         videos : state.videos 
//     };
// }
// export default connect(mapStateToProps, { selectVideo })(VideosList);