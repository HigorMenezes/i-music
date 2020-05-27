import React from 'react';

import PageTitle from '../../components/PageTitle';
import TracksContent from '../../containers/TracksContent';

import { TracksContainer } from './Tracks.styles';

function Tracks() {
  return (
    <TracksContainer>
      <PageTitle>Tracks</PageTitle>
      <TracksContent />
    </TracksContainer>
  );
}

export default Tracks;
