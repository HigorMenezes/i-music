import axios from '../core/axios';
import { getCookie } from '../utils/cookie';

function customFetch(url) {
  return axios.get(url, {
    headers: { Authorization: `Bearer ${getCookie('access_token')}` },
  });
}

export default customFetch;
