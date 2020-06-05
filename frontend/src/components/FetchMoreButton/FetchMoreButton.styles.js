import styled from 'styled-components';

export const Container = styled.div`
  margin: 10px 5px;
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.button`
  position: relative;
  margin: 0;
  padding: 10px 15px;
  border: 0;
  font-size: 14px;
  color: var(--primary-color);
  outline: none;
  background-color: transparent;
  border-radius: 5px;
  font-weight: 900;

  &:not(:disabled):hover,
  &:not(:disabled):active {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.3);
  }

  .loader {
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: 0;
    padding: 0;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    border-top: 2px solid var(--primary-color);
    border-radius: 50%;

    animation: rotating 1s linear infinite;

    @keyframes rotating {
      from {
        transform: translate(-50%, -50%) rotate(0deg);
      }
      to {
        transform: translate(-50%, -50%) rotate(360deg);
      }
    }
  }

  &:disabled {
    color: transparent;

    .loader {
      display: inline-block;
    }
  }
`;
