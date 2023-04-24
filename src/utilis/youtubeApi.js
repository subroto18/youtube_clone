const API_KEY = "AIzaSyCl-0EM-sMKvSwbC0xxSOrXZxMqv9DQfRQ";
export const YOUTUBE_API = (maxResults) => {
  let totalResult = 0;
  return (
    `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&resultsPerPage=1&maxResults=${maxResults}&regionCode=IN&key=` +
    API_KEY
  );
};

export const YOUTUBE_SEARCH_API = (query) => {
  return `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${query}`;
  // return (
  //   `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${query}&key=` +
  //   API_KEY
  // );
};

export const YOUTUBE_SEARCH_RESULT_API = (query) => {
  return (
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=` +
    API_KEY
  );
};
