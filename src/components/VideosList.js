import React from 'react';
import VideoItem from './VideoItem';

export const VideosList = ({ videos }) => {
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