import styled from 'styled-components';

export const Wrapper = styled.div`
  border: 1px solid ${(p) => p.theme.colors.border};
  border-radius: ${(p) => p.theme.borderRadius};
  font-size: ${(p) => p.theme.font.small};
  background-color: ${(p) => p.theme.colors.background};

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Line = styled.div`
  display: flex;
  border-top: 1px solid ${(p) => p.theme.colors.border};

  &:first-child {
    border-top: none;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Column = styled.div`
  flex: 1;
  flex-shrink: 0;
  border-left: 1px solid ${(p) => p.theme.colors.border};

  &:first-child {
    border-left: none;
  }

  display: flex;
  align-items: center;
  justify-content: space-between;

  & > div {
    min-width: 200px;
  }

  @media (max-width: 768px) {
    border-top: 1px solid ${(p) => p.theme.colors.border};
    border-left: none;

    &:first-child {
      border-top: none;
    }
  }
`;

export const ColumnResult = styled.div`
  flex: 1;
  flex-shrink: 0;
  border-left: 1px solid ${(p) => p.theme.colors.border};
  padding: ${(p) => p.theme.spacing.medium} ${(p) => p.theme.spacing.xLarge};

  &:first-child {
    border-left: none;
  }

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ColumnAction = styled.div`
  flex: 1;
  flex-shrink: 0;
  padding: ${(p) => p.theme.spacing.medium} ${(p) => p.theme.spacing.xLarge};

  display: flex;
  align-items: center;
  justify-content: center;

  & button {
    min-width: 300px;
  }

  @media (max-width: 768px) {
    & button {
      min-width: unset;
      width: 100%;
    }
  }
`;
