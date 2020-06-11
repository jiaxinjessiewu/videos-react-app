import React from 'react';
import VideoItem from './VideoItem'
const VideosList = ( {videos} ) => {
    const renderedList = videos.map(video => {
        return (
            <VideoItem
                key="test"
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
export default VideosList;