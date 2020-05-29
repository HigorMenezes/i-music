import axios from '../core/axios';
import { getCookie } from '../utils/cookie';

export function getAllCategories() {
  return axios.get('/browse/categories', {
    headers: { Authorization: `Bearer ${getCookie('access_token')}` },
    params: { limit: 4, country: 'US' },
  });
}

export function getAllFeaturedPlaylists() {
  return axios.get('/browse/featured-playlists', {
    headers: { Authorization: `Bearer ${getCookie('access_token')}` },
    params: { limit: 4, country: 'US' },
  });
}

export function getAllNewReleases() {
  return axios.get('/browse/new-releases', {
    headers: { Authorization: `Bearer ${getCookie('access_token')}` },
    params: { limit: 4, country: 'US' },
  });
}
