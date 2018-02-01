import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  const videos = props.videos.slice(0, 5);
  const videoItems = videos.map((video) => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.id}
        video={video}/>
    );
  });

  return(
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
}

export default VideoList;