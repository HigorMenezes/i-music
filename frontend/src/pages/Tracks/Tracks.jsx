import React from 'react';

import TracksContent from '../../containers/TracksContent';

import { TracksContainer } from './Tracks.styles';

function Tracks() {
  return (
    <TracksContainer>
      <TracksContent />
    </TracksContainer>
  );
}

export default Tracks;
