import  axios2 from 'axios';

const axios = axios2.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export default axios;