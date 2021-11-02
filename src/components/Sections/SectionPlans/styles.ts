import styled from 'styled-components';

export const Wrapper = styled.section`
  background-color: ${(p) => p.theme.colors.background};
`;

export const WrapperSection = styled.div`
  width: 100%;
  max-width: ${(p) => p.theme.maxWidth};
  padding: ${(p) => p.theme.spacing.giant} ${(p) => p.theme.spacing.giant};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: ${(p) => p.theme.spacing.giant};

  @media (max-width: 768px) {
    flex-direction: column;
    padding: ${(p) => p.theme.spacing.large} ${(p) => p.theme.spacing.medium};
    gap: ${(p) => p.theme.spacing.large};
  }
`;

export const WrapperTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${(p) => p.theme.spacing.small};
  text-align: center;
`;

export const Title = styled.h2`
  font-weight: 500;
  font-size: ${(p) => p.theme.font.xxxLarge};
  width: 300px;

  @media (max-width: 768px) {
    font-size: ${(p) => p.theme.font.xxLarge};
  }
`;

export const Subtitle = styled.p`
  width: 500px;
  color: ${(p) => p.theme.colors.textSecondary};
  font-size: ${(p) => p.theme.font.large};
  line-height: ${(p) => p.theme.spacing.large};

  @media (max-width: 768px) {
    width: 100%;
    font-size: ${(p) => p.theme.font.medium};
  }
`;

export const WrapperContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  gap: ${(p) => p.theme.spacing.large};
`;
