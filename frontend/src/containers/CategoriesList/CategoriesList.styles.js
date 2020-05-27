import styled from 'styled-components';
import { ArrowIosDownwardOutline } from 'styled-icons/evaicons-outline';

export const ListTitle = styled.h2`
  font-size: 24px;
  color: var(--text-color);
  margin: 10px 10px 20px 10px;
  width: 100%;
  font-weight: bold;
  letter-spacing: 2px;
`;

export const List = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  overflow: hidden;

  transition: height 500ms;
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
