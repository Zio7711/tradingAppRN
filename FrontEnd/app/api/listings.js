import client from './client';

const endpoint = '/listings';
const getListings = client.get(endpoint);

module.exports = {
  getListings,
};