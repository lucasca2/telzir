import styled from 'styled-components';

export const WrapperContent = styled.div`
  flex: 1;
  display: flex;
  gap: ${(p) => p.theme.spacing.small};
`;

export const Label = styled.label`
  text-transform: uppercase;
`;

export const Placeholder = styled.div`
  flex: 1;

  white-space: nowrap;
  color: ${(p) => p.theme.colors.placeholder};
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const Value = styled.div`
  flex: 1;

  display: flex;
  white-space: nowrap;
  align-items: center;
  justify-content: flex-start;
`;

export const WrapperIndicator = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    font-size: ${(p) => p.theme.font.large};
  }

  transition: opacity 0.3s;
`;

export const Dropdown = styled.div`
  z-index: 1;
  position: absolute;
  top: calc(100% + ${(p) => p.theme.spacing.quark});
  left: 50%;
  min-width: 100%;
  border: 1px solid ${(p) => p.theme.colors.border};
  background-color: ${(p) => p.theme.colors.background};
  border-radius: ${(p) => p.theme.borderRadius};
  overflow: auto;
  max-height: 200px;

  visibility: hidden;
  opacity: 0;

  transform: translateX(-50%) translateY(-${(p) => p.theme.spacing.small});

  transition: visibility 0.3s, opacity 0.3s, transform 0.3s;

  &.isOpen {
    visibility: visible;
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
`;

export const Option = styled.div`
  line-height: ${(p) => p.theme.spacing.large};
  padding: ${(p) => p.theme.spacing.small} ${(p) => p.theme.spacing.large};
  white-space: nowrap;

  transition: background-color 0.3s;

  &:hover {
    background-color: ${(p) => p.theme.colors.backgroundHover};
  }
`;

export const Overlay = styled.div`
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  overflow: hidden;

  visibility: hidden;

  &.isOpen {
    visibility: visible;
  }
`;

export const Wrapper = styled.div`
  border-radius: ${(p) => p.theme.borderRadius};
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: ${(p) => p.theme.colors.background};
  padding: ${(p) => p.theme.spacing.medium} ${(p) => p.theme.spacing.xLarge};
  gap: ${(p) => p.theme.spacing.nano};
  border: 1px solid transparent;

  flex: 1;

  cursor: pointer;

  &:hover ${WrapperIndicator} {
    opacity: 0.5;
  }

  &.isOpen {
    border: 1px solid ${(p) => p.theme.colors.textSecondary};
  }
`;
