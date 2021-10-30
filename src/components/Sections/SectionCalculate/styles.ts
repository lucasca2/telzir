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
`;

export const Subtitle = styled.p`
  width: 380px;
  color: ${(p) => p.theme.colors.textSecondary};
  font-size: ${(p) => p.theme.font.large};
`;

export const WrapperContent = styled.div``;
