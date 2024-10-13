import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const VideoCard = ({ video }) => {
  const { snippet } = video;
  const { title, thumbnails, channelTitle } = snippet;

  return (
    <div className="video-card">
      <Link href={`/watch?v=${video.id.videoId}`}>
        <Image src={thumbnails.high.url} width={500} height={500} alt={title} className="thumbnail" />
      </Link>
      <div className="video-info">
        <h3 className="video-title">{title}</h3>
        <p className="channel-name">{channelTitle}</p>
      </div>
    </div>
  );
};

export default VideoCard;
