import axios from '../core/axios';
import { getCookie } from '../utils/cookie';

export function getAllCategories() {
  return axios.get('/browse/categories', {
    headers: { Authorization: `Bearer ${getCookie('access_token')}` },
    params: { limit: 20 },
  });
}
