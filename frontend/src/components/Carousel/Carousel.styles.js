import styled from 'styled-components';
import { ChevronLeft, ChevronRight } from 'styled-icons/entypo';

export const Container = styled.div`
  display: flex;
`;

export const ActionButton = styled.button`
  width: 35px;
  height: 35px;
  border: none;
  background-color: transparent;
  padding: 5px;
  margin: 0px;
  margin-top: 10px;
  cursor: pointer;
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
