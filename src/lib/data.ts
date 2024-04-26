const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "d625a162f3msh09dacc7ff5642e3p1df166jsn8df9ccaad899",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const getByCategory = async (category: string) => {
  const url = `${BASE_URL}/search?q=${category}&part=snippet&maxResults=50`;

  try {
    const response = await fetch(url, options);
    const { items } = await response.json();
    return items;
  } catch (error) {
    console.error(error);
  }
};

export const getVideosByChannel = async (channelId: string) => {
  const url = `${BASE_URL}/search?channelId=${channelId}&part=snippet&order=date&maxResults=50`;

  try {
    const response = await fetch(url, options);
    const { items } = await response.json();
    return items;
  } catch (error) {
    console.error(error);
  }
};

export const getChannelDetails = async (channelId: string) => {
  const url = `${BASE_URL}/channels?part=snippet&id=${channelId}`;

  try {
    const response = await fetch(url, options);
    const { items } = await response.json();
    return items[0];
  } catch (error) {
    console.error(error);
  }
};

export const getVideoDetails = async (videoId: string) => {
  const url = `${BASE_URL}/videos?part=contentDetails%2Csnippet%2Cstatistics&id=${videoId}`;

  try {
    const response = await fetch(url, options);
    const { items } = await response.json();
    return items[0];
  } catch (error) {
    console.log(error);
  }
};

export const getComments = async (videoId: string) => {
  const url = `${BASE_URL}/commentThreads?part=snippet&videoId=${videoId}&maxResults=100`

  try {
    const response = await fetch(url, options);
    const { items } = await response.json();
    return items;
  } catch (error) {
    console.error(error);
  }
}

export const getSuggestedVideos = async (videoId: string) => {
  const url = `${BASE_URL}/search?relatedToVideoId=${videoId}&part=id%2Csnippet&type=video&maxResults=50`

  try {
    const response = await fetch(url, options);
    const { items } = await response.json();
    return items;
  } catch (error) {
    console.error(error);
  }
}