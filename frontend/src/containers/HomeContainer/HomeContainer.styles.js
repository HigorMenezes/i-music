import styled from 'styled-components';
import { ArrowIosDownwardOutline } from 'styled-icons/evaicons-outline';

export const CategoriesList = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  overflow: hidden;

  transition: height 500ms;
`;

export const ShowMoreCategories = styled.button`
  position: relative;
  width: 100%;
  height: 35px;
  border: none;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

export const ShowMoreCategoriesArrow = styled(ArrowIosDownwardOutline)`
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
