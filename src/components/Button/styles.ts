import { readableColor, transparentize } from 'polished';
import styled, { css, ColorScheme, ButtonSizesScheme } from 'styled-components';

type TWrapper = {
  color: ColorScheme;
  size: ButtonSizesScheme;
  transparent: boolean;
  bordered: boolean;
};

export const Wrapper = styled.button<TWrapper>`
  cursor: pointer;
  font-size: ${(p) => p.theme.font.medium};
  background-color: ${(p) =>
    p.transparent ? 'transparent' : p.theme.colors[p.color]};
  padding: ${(p) => p.theme.button[p.size]};
  border-radius: ${(p) => p.theme.borderRadius};
  font-weight: bold;
  color: ${(p) =>
    p.transparent
      ? p.theme.colors[p.color]
      : readableColor(
          p.theme.colors[p.color],
          p.theme.colors.textDark,
          p.theme.colors.textLight
        )};

  border-style: solid;
  border-color: ${(p) => p.theme.colors[p.color]};
  border-width: ${(p) => (p.bordered ? '1px' : 0)};

  transition: background-color 0.3s, transform 0.3s, color 0.3s;
  will-change: background-color, transform, color;

  &:hover {
    ${(p) =>
      p.transparent &&
      p.bordered &&
      css`
        background-color: ${p.theme.colors[p.color]};
        color: ${readableColor(
          p.theme.colors[p.color],
          p.theme.colors.textDark,
          p.theme.colors.textLight
        )};
      `}

    ${(p) =>
      p.transparent &&
      !p.bordered &&
      css`
        color: ${transparentize(0.25, p.theme.colors[p.color])};
      `}

    ${(p) =>
      !p.transparent &&
      !p.bordered &&
      css`
        background-color: ${transparentize(0.25, p.theme.colors[p.color])};
      `}
  }

  &:active {
    transform: scale(0.98);
  }
`;
