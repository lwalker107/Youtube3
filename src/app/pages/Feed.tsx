'use client'


import VideoCard from '../components/VideoCard'
import { useEffect, useState } from 'react';
import { fetchYoutubeDataByCategory } from '../utils/fetchYoutubeData';

const Feed = () => {
  const [trendingVideos, setTrendingVideos] = useState([]);
  const [liveVideos, setLiveVideos] = useState([]);
  const [latestVideos, setLatestVideos] = useState([]);

  useEffect(() => {
    const getVideos = async () => {
      try {
        // Fetch trending videos
        const trendingData = await fetchYoutubeDataByCategory('trending');
        setTrendingVideos(trendingData);

        // Fetch live videos
        const liveData = await fetchYoutubeDataByCategory('live');
        setLiveVideos(liveData);

        // Fetch latest videos
        const latestData = await fetchYoutubeDataByCategory('latest');
        setLatestVideos(latestData);
      } catch (error) {
        console.error('Error fetching videos: ', error);
      }
    };

    getVideos();
  }, []);

  return (
    <div className="space-y-8">
    <section>
      <h2 className="text-white font-bold mb-4">Discover Live</h2>
      <div className="flex space-x-4 overflow-x-scroll">
        {liveVideos.map(video => (
          <VideoCard key={video.id.videoId} video={video} />
        ))}
      </div>
    </section>

  <section>
    <h2 className="text-white font-bold mb-4">Trending</h2>
    <div className="grid grid-cols-4 gap-4">
      {trendingVideos.map(video => (
        <VideoCard key={video.id.videoId} video={video} />
      ))}
    </div>
  </section>

  <section>
    <h2 className="text-white font-bold mb-4">Latest</h2>
    <div className="grid grid-cols-4 gap-4">
      {latestVideos.map(video => (
        <VideoCard key={video.id.videoId} video={video} />
      ))}
    </div>
  </section>
</div>
  )
}

export default Feed