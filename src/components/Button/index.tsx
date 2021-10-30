import { FC } from 'react';

import { ColorScheme, ButtonSizesScheme } from 'styled-components';

import { Wrapper } from './styles';

type TButton = {
  color?: ColorScheme;
  size?: ButtonSizesScheme;
  transparent?: boolean;
  bordered?: boolean;
};

export const Button: FC<TButton> = ({
  children,
  color = 'primary',
  size = 'medium',
  transparent = false,
  bordered = false,
}) => {
  return (
    <Wrapper
      bordered={bordered}
      transparent={transparent}
      color={color}
      size={size}
    >
      {children}
    </Wrapper>
  );
};
