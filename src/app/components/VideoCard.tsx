import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


const truncateTitle = (title, maxWords = 7) => {
  const words = title.split(' ');
  return words.length > maxWords ? words.slice(0, maxWords).join(' ') + '...' : title;
};

const VideoCard = ({ video }) => {
  const videoId = video.id.videoId;
  // Gets high quality images for thumbnails
  const thumbnailUrl = video.snippet.thumbnails.high.url
  const title = video.snippet.title
  const truncatedTitle = truncateTitle(title); // Truncate the title
  const channelTitle = video.snippet.channelTitle

  return (
    <div className="p-4 shadow-lg rounded-lg">
      <Link href={`/watch?v=${videoId}`}>
        {/* made the widths and height bigger to make images better */}
        <Image src={thumbnailUrl} width={150} height={150} alt={title} className="w-full h-auto rounded-lg" />
      </Link>
      <div className="mt-2">
        <h3 className="text-md font-bold">{truncatedTitle}</h3>
        <p className="text-sm text-gray-600">{channelTitle}</p>
      </div>
    </div>
  );
};

export default VideoCard;
