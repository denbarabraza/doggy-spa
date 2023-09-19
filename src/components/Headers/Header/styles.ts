import { styled } from 'styled-components';

export const Wrapper = styled.header`
  margin: ${({ theme }) => theme.margins.xxxs} auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${({ theme }) => theme.width.s}%;
  background-color: ${({ theme }) => theme.colors.WHITE};
  font-family: ${({ theme }) => theme.fontFamilies.cormorant};
  color: ${({ theme }) => theme.colors.CHARCOAL};
`;

export const NavBar = styled.div`
  margin: ${({ theme }) => theme.margins.xxxs} auto;
  width: ${({ theme }) => theme.width.s}%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.gaps.px20}px;

  @media (max-width: ${({ theme }) => theme.dimensions.laptop}px) {
    margin-top: ${({ theme }) => theme.margins.xs}px;
    justify-content: space-evenly;
  }
`;

export const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ theme }) => theme.width.s}%;
  height: ${({ theme }) => theme.height.xs}px;
  background-color: ${({ theme }) => theme.colors.BEIGE};

  @media (max-width: ${({ theme }) => theme.dimensions.laptop}px) {
    padding: 0 ${({ theme }) => theme.paddings.xxs}px 0
      ${({ theme }) => theme.paddings.xxs}px;
    text-align: center;
  }
`;

export const Message = styled.h5`
  margin: ${({ theme }) => theme.margins.xxxs} auto;
  font-family: ${({ theme }) => theme.fontFamilies.cormorant};
  font-size: ${({ theme }) => theme.fontSizes.s}px;
  font-weight: ${({ theme }) => theme.fontWeights.xl};
  color: ${({ theme }) => theme.colors.CHARCOAL};

  @media (max-width: ${({ theme }) => theme.dimensions.laptop}px) {
    font-size: ${({ theme }) => theme.fontSizes.xs}px;
    font-weight: ${({ theme }) => theme.fontWeights.m};
  }
`;

export const Icon = styled.div`
  margin-left: ${({ theme }) => theme.margins.s}px;
  transition: all 0.5s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;
