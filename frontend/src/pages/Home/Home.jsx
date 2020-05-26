import React, { useEffect } from 'react';
import axios from '../../core/axios';

import Main from '../../layouts/Main';

import { getCookie } from '../../utils/cookie';

function Home() {
  useEffect(() => {
    axios
      .get('/me', {
        headers: { Authorization: `Bearer ${getCookie('access_token')}` },
      })
      .then(({ data }) => {
        console.log(data);
      });
  }, []);

  return (
    <Main>
      <div>Home</div>
    </Main>
  );
}

export default Home;
