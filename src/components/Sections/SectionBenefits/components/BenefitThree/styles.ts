import styled from 'styled-components';

export const WrapperIlustration = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
`;

export const WrapperTable = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  border: 1px solid ${(p) => p.theme.colors.border};
  border-radius: ${(p) => p.theme.borderRadius};

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Title = styled.div`
  font-size: ${(p) => p.theme.font.large};
  color: ${(p) => p.theme.colors.primary};
  font-weight: bold;
  padding: ${(p) => p.theme.spacing.medium} ${(p) => p.theme.spacing.xLarge};
  text-align: center;

  @media (max-width: 768px) {
    padding: ${(p) => p.theme.spacing.small} ${(p) => p.theme.spacing.medium};
    font-size: ${(p) => p.theme.font.medium};
  }
`;

export const Text = styled.div`
  padding: ${(p) => p.theme.spacing.medium} ${(p) => p.theme.spacing.xLarge};
  font-size: ${(p) => p.theme.font.small};
  text-align: center;
  border-top: 1px solid ${(p) => p.theme.colors.border};

  @media (max-width: 768px) {
    padding: ${(p) => p.theme.spacing.small} ${(p) => p.theme.spacing.medium};
    font-size: ${(p) => p.theme.font.small};
  }
`;
