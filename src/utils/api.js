import axios from "axios";

// const BASE_URL = "https://youtube138.p.rapidapi.com/";

/*
const GOOGLE_API_KEY = "AIzaSyCA5lrdthYy-VU-VGNnq55AEzL73W752d8"

const YOUTUBE_VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=" + GOOGLE_API_KEY

*/




const BASE_URL = "https://youtube138.p.rapidapi.com";
const options = {
  method: 'GET',
  url: 'https://youtube138.p.rapidapi.com/auto-complete/',
  params: {
    q: 'desp',
    hl: 'en',
    gl: 'US'
  },
  headers: {
    'X-RapidAPI-Key': '7064ff79c0msh336de7edc859ea8p11ad0djsn20c4c2674153',
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};
export const fetchDataFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};