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
`;

export const Title = styled.div`
  font-size: ${(p) => p.theme.font.large};
  color: ${(p) => p.theme.colors.primary};
  font-weight: bold;
  padding: 16px 32px;
  text-align: center;
`;

export const Text = styled.div`
  padding: 16px 32px;
  font-size: ${(p) => p.theme.font.small};
  text-align: center;
  border-top: 1px solid ${(p) => p.theme.colors.border};
`;
