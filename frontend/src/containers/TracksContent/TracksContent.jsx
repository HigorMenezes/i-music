import React, { useEffect } from 'react';

import { getTracksByText } from '../../services/tracks';

function TracksContent() {
  useEffect(() => {
    getTracksByText().then(({ data }) => {
      console.log(data);
    });
  }, []);

  return <div>content</div>;
}

export default TracksContent;
