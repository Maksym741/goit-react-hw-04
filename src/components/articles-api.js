import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

export const fetchImages = async (topic, currentPage) => {
  const res = await axios.get("/search/photos", {
    params: {
      query: topic,
      page: currentPage,
      orientation: 'squarish',
      per_page: 12,
    },
    headers: {
      Authorization: `Client-ID FTgAqGZHqO_wNYCM-7F7Hv50wDs_rRtqVLfyyztyROE`
    }
  });

  return res.data.results;
};








