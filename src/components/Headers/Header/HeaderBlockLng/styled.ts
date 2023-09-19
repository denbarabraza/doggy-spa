import { styled } from 'styled-components';

export const Wrapper = styled.div`
  width: ${({ theme }) => theme.width.s}px;
`;

export const Switcher = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.sss}px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.BLACK};
  font-weight: ${({ theme }) => theme.fontWeights.xl};
  font-family: ${({ theme }) => theme.fontFamilies.cormorant};
`;

export const CurrentLng = styled.div`
  color: ${({ theme }) => theme.colors.PINK};
`;
