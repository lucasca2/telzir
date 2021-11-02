import styled from 'styled-components';

export const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;

  align-items: center;
  background-color: ${(p) => p.theme.footer.background};
`;

export const WrapperContent = styled.div`
  width: 100%;
  max-width: ${(p) => p.theme.maxWidth};
  padding: ${(p) => p.theme.spacing.giant} ${(p) => p.theme.spacing.giant} 0;

  @media (max-width: 769px) {
    padding: ${(p) => p.theme.spacing.large} ${(p) => p.theme.spacing.medium} 0;
  }
`;

export const WrapperTop = styled.div`
  border-bottom: 1px solid ${(p) => p.theme.footer.border};
  padding: 0 0 ${(p) => p.theme.spacing.xLarge} 0;
  gap: ${(p) => p.theme.spacing.giant};
  justify-content: space-between;
  display: flex;

  @media (max-width: 769px) {
    flex-direction: column;
    padding: 0 0 ${(p) => p.theme.spacing.large} 0;
  }
`;

export const WrapperCopyRight = styled.div`
  width: 100%;
  max-width: ${(p) => p.theme.maxWidth};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${(p) => p.theme.spacing.medium};
  padding: ${(p) => p.theme.spacing.xLarge};
  font-size: ${(p) => p.theme.font.nano};

  @media (max-width: 769px) {
    padding: ${(p) => p.theme.spacing.large} ${(p) => p.theme.spacing.medium};
  }
`;

export const Logo = styled.img`
  height: 40px;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(p) => p.theme.spacing.medium};
  font-size: ${(p) => p.theme.font.medium};

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const Title = styled.p`
  margin-bottom: ${(p) => p.theme.spacing.small};
  font-size: ${(p) => p.theme.font.large};
  font-weight: bold;
`;

export const FooterLink = styled.a`
  cursor: pointer;
  transition: opacity 0.3s;
  will-change: opacity;

  &:hover {
    opacity: 0.5;
    text-decoration: underline;
  }
`;
