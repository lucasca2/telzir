import type { FC } from 'react';

import { Button } from 'components/Button';

import {
  Wrapper,
  Image,
  Logo,
  WrapperTop,
  WrapperContent,
  WrapperMenu,
  Menu,
  WrapperBottom,
  Title,
  Description,
} from './styles';

export const Header: FC = () => {
  return (
    <Wrapper>
      <Image src="/image-header.jpeg" />
      <WrapperContent>
        <WrapperTop>
          <Logo src="/logo-telzir.png" />
          <WrapperMenu>
            <Menu>Vantagens</Menu>
            <Menu>Cálculo</Menu>
            <Button>Contratar</Button>
          </WrapperMenu>
        </WrapperTop>
        <WrapperBottom>
          <Title>
            Pague menos,
            <strong>Fale Mais</strong>
          </Title>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Description>
          <Button bordered transparent>
            Saiba mais
          </Button>
        </WrapperBottom>
      </WrapperContent>
    </Wrapper>
  );
};
