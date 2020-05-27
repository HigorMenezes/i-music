import styled from 'styled-components';

export const Paper = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  background-color: transparent;
  margin: 5px;
  border-radius: 15px;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    ${(props) => `background-image: url(${props.iconUrl});`}
    background-position: center center;
    background-size: 150px;

    transition: filter 200ms;
  }

  .category-name {
    position: absolute;
    width: 100%;
    padding: 15px 5px;
    background-color: rgba(0, 0, 0, 0.6);
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    color: var(--text-color);
    font-size: 18px;
    font-weight: bold;
    word-wrap: break-word;
    text-align: center;
    vertical-align: center;
  }

  &:hover::before {
    filter: saturate(1.5);
  }
`;
