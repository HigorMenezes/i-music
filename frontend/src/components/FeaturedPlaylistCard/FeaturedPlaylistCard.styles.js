import styled from 'styled-components';

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;

  background: var(--loading-bg-color);

  box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.3);
`;

export const Name = styled.h3`
  font-size: 14px;
  color: var(--text-color);
  font-weight: 700;
  margin: 5px;
`;

export const Description = styled.p`
  font-size: 14px;
  color: var(--subtext-color);
  font-weight: 500;
  margin: 5px;

  a {
    color: var(--primary-color);
  }
`;
