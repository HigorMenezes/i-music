import styled from 'styled-components';

export const List = styled.ol`
  display: flex;
  flex-wrap: wrap;

  & > li {
    width: calc(100% / 3);
  }
`;
