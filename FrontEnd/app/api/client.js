import axios from 'axios';
const client = axios.create({
  baseURL: 'http://172.17.236.190:8000/api',
  timeout: 1000,
});
export default client;