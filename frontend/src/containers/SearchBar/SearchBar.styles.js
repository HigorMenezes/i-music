import styled from 'styled-components';
import { SearchAlt2 } from 'styled-icons/boxicons-regular';

export const Container = styled.form`
  height: var(--search-bar-height);
  max-width: 500px;
  margin: 0px auto;

  display: flex;
  align-items: center;
  overflow: hidden;

  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background-color: rgba(0, 0, 0, 0.1);
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  padding: 10px 5px 10px 20px;

  color: var(--text-color);
  font-size: 16px;

  outline: none;
  background-color: transparent;
  border: none;
`;

export const SearchButton = styled.button`
  height: 100%;
  padding: 0px 15px;

  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;

  color: var(--subtext-color);

  &:hover,
  &:active,
  &:focus {
    background-color: rgba(0, 0, 0, 0.1);
    color: var(--text-color);
  }
`;

export const SearchIcon = styled(SearchAlt2)`
  width: 20px;
  height: 20px;
`;
