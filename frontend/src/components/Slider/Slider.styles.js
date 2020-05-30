import styled from 'styled-components';
import { ChevronLeft, ChevronRight } from 'styled-icons/entypo';

export const Container = styled.div`
  display: flex;
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

export const ActionButton = styled.button`
  width: 35px;
  height: 60px;
  border: none;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 5px;
  margin: 5px 0px;
  cursor: pointer;
  outline: none;
`;

export const PreviousIcon = styled(ChevronLeft)`
  color: var(--text-color);
  width: 24px;
  height: 24px;
`;

export const NextIcon = styled(ChevronRight)`
  color: var(--text-color);
  width: 24px;
  height: 24px;
`;
