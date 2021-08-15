import { useState } from 'react';
import client from '../api/client';

const useApi = (endpoint) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const request = async () => {
    setLoading(true);
    client
      .get(endpoint)
      .then((res) => {
        setData(res.data);
        setError(false);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
        setLoading(false);
      });
  };

  return { request, data, error, loading };
};

module.exports = { useApi };
