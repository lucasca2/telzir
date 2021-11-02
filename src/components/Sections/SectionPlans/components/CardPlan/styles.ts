import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: ${(p) => p.theme.spacing.xLarge};
  border: 1px solid ${(p) => p.theme.colors.border};
  border-radius: ${(p) => p.theme.borderRadius};
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  gap: ${(p) => p.theme.spacing.medium};
  font-size: ${(p) => p.theme.font.small};

  flex: 1;
  align-self: stretch;
`;

export const Logo = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
  object-position: center;
`;

export const Title = styled.div`
  font-weight: bold;
`;

export const Price = styled.div`
  display: flex;
  align-items: flex-end;
  font-weight: 500;
  gap: ${(p) => p.theme.spacing.nano};

  & > span:first-child {
    font-size: ${(p) => p.theme.font.xxxLarge};
  }

  & span:last-child {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: ${(p) => p.theme.font.medium};
  }
`;

export const AltPrice = styled.div`
  display: flex;
  align-items: flex-end;
  font-weight: 500;
  font-size: ${(p) => p.theme.font.medium};
  max-width: 150px;
`;

export const Description = styled.div`
  max-width: 200px;
  line-height: ${(p) => p.theme.font.large};
`;

export const TitleBenefits = styled.div`
  font-weight: bold;
`;

export const Benefits = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 ${(p) => p.theme.spacing.medium};
  gap: ${(p) => p.theme.spacing.small};
`;

export const Benefit = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${(p) => p.theme.spacing.nano};

  & svg {
    color: ${(p) => p.theme.colors.success};
  }
`;
