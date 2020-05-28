import styled from 'styled-components';

export const Container = styled.li`
  position: relative;
  padding: 5px;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
`;

export const Name = styled.h3`
  position: absolute;
  bottom: 10%;
  left: 50%;
  padding: 10px;
  width: 80%;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.6);
  transform: translateX(-50%);
  color: var(--text-color);
  font-size: 16px;
  font-weight: bold;
  word-wrap: break-word;
  text-align: center;
  vertical-align: center;
`;
