'use client'

import React from 'react'
import VideoCard from '../components/VideoCard'
import { useEffect, useState } from 'react';
import { fetchYoutubeData } from '../utils/fetchYoutubeData';

const Feed = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getTrendingVideos = async () => {
      try {
        const data = await fetchYoutubeData('trending');
        setVideos(data);
      } catch (error) {
        console.error('Error fetching videos: ', error);
      }
    };

    getTrendingVideos();
  }, []);

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <h1 className='text-2xl font-bold mb-4'>Trending Videos</h1>
      {videos.map((video) => (
        <VideoCard key={video.id.videoId} video={video} />
      ))}
    </section>
  )
}

export default Feed