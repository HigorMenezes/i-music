import React, { useEffect } from 'react';
import axios from 'axios';

import { getCookie } from '../../utils/cookie';

function Home() {
  useEffect(() => {
    axios
      .get('https://api.spotify.com/v1/me', {
        headers: { Authorization: `Bearer ${getCookie('access_token')}` },
      })
      .then(({ data }) => {
        console.log(data);
      });
  }, []);

  return <div>Home</div>;
}

export default Home;
