import styled from 'styled-components';

export const Wrapper = styled.section`
  background-color: ${(p) => p.theme.colors.secondary};
`;

export const WrapperSection = styled.div`
  width: 100%;
  max-width: ${(p) => p.theme.maxWidth};
  padding: ${(p) => p.theme.spacing.giant} ${(p) => p.theme.spacing.giant};
  margin: 0 auto;
  display: flex;

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
  gap: ${(p) => p.theme.spacing.small};
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
  width: 300px;
  color: ${(p) => p.theme.colors.textSecondary};
  font-size: ${(p) => p.theme.font.large};
  line-height: ${(p) => p.theme.spacing.large};

  @media (max-width: 768px) {
    font-size: ${(p) => p.theme.font.medium};
  }
`;

export const WrapperContent = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-start;
  justify-content: flex-end;
`;
