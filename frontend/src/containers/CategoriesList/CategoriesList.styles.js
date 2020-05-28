import styled, { css } from 'styled-components';
import { ArrowIosDownwardOutline } from 'styled-icons/evaicons-outline';

const renderListItemFrom = (showAll, n) => {
  if (showAll) {
    return css`
      & > li {
        width: calc(100% / ${n});
      }
    `;
  }

  return css`
    & > li {
      width: calc(100% / ${n});
      &:nth-child(n + ${n + 1}) {
        display: none;
      }
    }
  `;
};

export const List = styled.ol`
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;

  ${(props) => renderListItemFrom(props.showAll, 4)}
`;

export const ShowMore = styled.button`
  position: relative;
  width: 100%;
  height: 35px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  outline: none;

  &:hover,
  &:active {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

export const ShowMoreArrow = styled(ArrowIosDownwardOutline)`
  width: 28px;
  height: 28px;
  color: var(--text-color);
  position: absolute;
  top: 50%;
  left: 50%;
  transition: transform 300ms;

  transform: ${(props) =>
    props.isShowingMore
      ? `translate(-50%, -50%) rotate(180deg)`
      : `translate(-50%, -50%) rotate(0deg)`};
`;
