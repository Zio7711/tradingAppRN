import axios from 'axios';
const client = axios.create({
  baseURL: 'http://172.17.104.194:8000/api',
});
export default client;
