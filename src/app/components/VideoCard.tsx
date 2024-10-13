import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const VideoCard = ({ video }) => {
  const { snippet } = video;
  const { title, thumbnails, channelTitle } = snippet;

  return (
    <div className="p-4 shadow-lg rounded-lg">
      <Link href={`/watch?v=${video.id.videoId}`}>
        <Image src={thumbnails.high.url} width={50} height={50} alt={title} className="w-full h-auto rounded-lg" />
      </Link>
      <div className="mt-2">
        <h3 className="text-md font-bold">{title}</h3>
        <p className="text-sm text-gray-600">{channelTitle}</p>
      </div>
    </div>
  );
};

export default VideoCard;
