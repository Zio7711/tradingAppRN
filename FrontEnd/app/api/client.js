import axios from 'axios';
import cache from '../utility/cache';
const client = axios.create({
  baseURL: 'http://172.17.236.190:8000/api',
  timeout: 1000,
});

//below is the async cache layer which failed
//

// const get = client.get;
// client.get = (url, params, axiosConfig) => {
//   get(url, params, axiosConfig)
//     .then((res) => {
//       cache.store(url, res.data);
//       return res;
//     })
//     .catch((err) => {
//       cache
//         .get(url)
//         .then((data) => {
//           return { ok: true, data };
//         })
//         .catch((err) => {
//           return err;
//         });
//     });
// };

export default client;
