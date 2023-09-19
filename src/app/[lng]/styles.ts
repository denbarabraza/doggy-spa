import { styled } from 'styled-components';

export const Wrapper = styled.div`
  margin: ${({ theme }) => theme.margins.xxxs} auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${({ theme }) => theme.width.s}%;
  background-color: transparent;
`;

export const WrapperError = styled.div`
  width: 100%;
`;

export const ErrorMessage = styled.h2`
  margin-top: 36px;
  text-align: center;
  font-size: 36px;
  color: purple;
`;

export const Button = styled.button`
  margin: 36px auto;
  width: 180px;
  height: 56px;
  background-color: yellow;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  color: red;
  transition: all 0.8s;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: yellow;
    color: white;
  }
`;
