// Cache 
let cache = {};


// Function to fetch Youtube Videos by category
export const fetchYoutubeDataByCategory = async (category: string, maxResults: number = 4) => {
      const cacheKey = `${category}-${maxResults}`;


      // Check if the data is already cached
        if (cache[cacheKey]) {
            console.log('Returning cached data');
            return cache[cacheKey];
        }

        // Retrieve Youtube API key from env. variables
        const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

        // construct the URL for the API request with category and max results
        const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResults}&q=${category}&type=video&regionCode=US&key=${apiKey}`;
    
    try {
        // Make a GET request to the Youtube Data API
        const res = await fetch(url);

        // Check if the response is successful; if not, throw an error
        if (!res.ok) throw new Error(`Failed to fetch videos for ${category}`);
        
        // Parse the response JSON into a javascript object
        const data = await res.json();

        // Store response in cache
        cache[cacheKey] = data.items;


        // Return the list of video items from the response
        return data.items;
    } catch (error) {
        // Log the error to the console for debugging purposes
        console.error(`Error fetching Youtube data: `, error);
        
        // Return an empty array in case of an error to avoid breaking the app
        return [];
    }
}