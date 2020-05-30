import styled from 'styled-components';
import {
  ArrowheadRightOutline,
  ArrowheadLeftOutline,
} from 'styled-icons/evaicons-outline';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  overflow: hidden;
`;

export const List = styled.ol`
  display: flex;
  flex-wrap: nowrap;

  transition: transform 0.3s;
  transform: translateX(calc(-100% * ${(props) => props.currentSlide - 1}));

  & > li {
    width: calc(100% / ${(props) => props.itemsPerSlide});
  }
`;

export const ListItem = styled.li`
  flex: 0 0 auto;
  padding: 5px;
`;

export const ActionsContainer = styled.div`
  align-self: flex-end;
  padding: 5px;
`;

export const ActionButton = styled.button`
  width: 22px;
  height: 22px;
  border: none;
  padding: 2px;
  cursor: pointer;
  outline: none;
  background-color: transparent;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const PreviousIcon = styled(ArrowheadLeftOutline)`
  color: var(--text-color);
  width: 18px;
  height: 18px;
`;

export const NextIcon = styled(ArrowheadRightOutline)`
  color: var(--text-color);
  width: 18px;
  height: 18px;
`;
