import React from 'react';

const VideoDetail = ({video}) => {
  if (!video) {
    return <div>No videos were found for this search...</div>;
  }

  const url = `https://www.youtube.com/embed/${video.id}`;
  return(
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url} title={video.title}></iframe>
      </div>
      <div className="details">
        <div>{video.title}</div>
        <div>{video.description}</div>
      </div>
    </div>
  );
}

export default VideoDetail;