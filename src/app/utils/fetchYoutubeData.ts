export const fetchYoutubeData = async (query: string) => {
    const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
    const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&key=${apiKey}`
    );
    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data.items; // List of videos here
}