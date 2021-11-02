import styled from 'styled-components';

export const WrapperIlustration = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  gap: ${(p) => p.theme.spacing.medium};

  @media (max-width: 768px) {
    gap: ${(p) => p.theme.spacing.small};
  }
`;

export const WrapperIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${(p) => p.theme.spacing.small};

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const Icon = styled.img`
  width: ${(p) => p.theme.spacing.xxLarge};

  @media (max-width: 768px) {
    width: ${(p) => p.theme.spacing.xLarge};
  }
`;

export const Text = styled.div`
  font-size: ${(p) => p.theme.font.small};
`;

export const Price = styled.div`
  position: relative;
  margin-left: ${(p) => p.theme.spacing.xxLarge};
  color: ${(p) => p.theme.colors.primary};
  display: flex;
  align-items: center;
  gap: ${(p) => p.theme.spacing.nano};

  & > span:nth-child(1) {
    color: ${(p) => p.theme.colors.textSecondary};
    font-size: ${(p) => p.theme.font.nano};
    position: absolute;
    bottom: 100%;
  }
  & > span:nth-child(2) {
    font-size: ${(p) => p.theme.font.xxxLarge};
  }
  & > span:nth-child(3) {
    display: flex;
    flex-direction: column;
    font-size: ${(p) => p.theme.font.large};
  }

  @media (max-width: 768px) {
    & > span:nth-child(2) {
      font-size: ${(p) => p.theme.font.xxLarge};
    }

    & > span:nth-child(3) {
      font-size: ${(p) => p.theme.font.small};
    }
  }
`;
