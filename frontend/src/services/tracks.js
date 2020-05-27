import axios from '../core/axios';
import { getCookie } from '../utils/cookie';

export function getTracksByText(q = 'a') {
  return axios.get('/search', {
    params: { q, type: 'track' },
    headers: { Authorization: `Bearer ${getCookie('access_token')}` },
  });
}
