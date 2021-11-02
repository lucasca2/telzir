import styled from 'styled-components';

export const Wrapper = styled.div`
  border: 1px solid ${(p) => p.theme.colors.border};
  border-radius: ${(p) => p.theme.borderRadius};
  font-size: ${(p) => p.theme.font.small};
  background-color: ${(p) => p.theme.colors.background};
`;

export const Line = styled.div`
  display: flex;
  border-top: 1px solid ${(p) => p.theme.colors.border};

  &:first-child {
    border-top: none;
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
