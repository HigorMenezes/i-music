import styled from 'styled-components';

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  padding: 5px;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
`;

export const Name = styled.h3`
  margin: 5px;
  color: var(--text-color);
  font-weight: 600;
  letter-spacing: 0.5px;
`;

export const Description = styled.p`
  margin: 5px;
  color: var(--subtext-color);
  font-weight: 400;
`;
