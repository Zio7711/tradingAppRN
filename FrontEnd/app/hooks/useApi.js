import { useState } from 'react';
import { getListings } from '../api/listings';

const useApi = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const request = async () => {
    setLoading(true);
    getListings
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
