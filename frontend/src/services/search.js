import axios from '../core/axios';
import { getCookie } from '../utils/cookie';

export function searchForAlbums(album) {
  return axios.get('/search', {
    headers: { Authorization: `Bearer ${getCookie('access_token')}` },
    params: { q: `album:${album}`, type: 'album', limit: 20 },
  });
}
