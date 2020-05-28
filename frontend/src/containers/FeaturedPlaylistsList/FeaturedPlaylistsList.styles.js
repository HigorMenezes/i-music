import styled from 'styled-components';
import media from 'styled-media-query';

export const List = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 20px;
  justify-items: center;

  ${media.greaterThan('800px')`
    grid-template-columns: repeat(2, 1fr);
  `}

  ${media.greaterThan('1000px')`
    grid-template-columns: repeat(3, 1fr);
  `}

  ${media.greaterThan('1200px')`
    grid-template-columns: repeat(4, 1fr);
  `}
`;
