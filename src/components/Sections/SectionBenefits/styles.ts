import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${(p) => p.theme.colors.background};
`;

export const WrapperSection = styled.div`
  width: 100%;
  max-width: ${(p) => p.theme.maxWidth};
  padding: ${(p) => p.theme.spacing.giant} ${(p) => p.theme.spacing.giant};
  margin: 0 auto;

  display: flex;

  gap: ${(p) => p.theme.spacing.giant};
`;

export const Title = styled.h2`
  font-weight: 500;
  font-size: ${(p) => p.theme.font.xxxLarge};
  width: 300px;
`;

export const WrapperContent = styled.div``;

export const WrapperBenefit = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${(p) => p.theme.spacing.small};

  padding: ${(p) => p.theme.spacing.xxxxLarge} 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      width: 100vw;
      height: 1px;
      background-color: ${(p) => p.theme.colors.border};
    }
  }
`;

export const TitleBenefit = styled.h3`
  font-weight: 500;
  font-size: ${(p) => p.theme.font.xxxLarge};
  width: 380px;
`;

export const DescriptionBenefit = styled.p`
  width: 380px;
  color: ${(p) => p.theme.colors.textSecondary};
  font-size: ${(p) => p.theme.font.large};
  line-height: ${(p) => p.theme.spacing.large};
`;
