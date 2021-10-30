import { FC } from 'react';

import {
  Wrapper,
  WrapperContent,
  WrapperTop,
  WrapperCopyRight,
  Logo,
  Section,
  Title,
  FooterLink,
} from './styles';

export const Footer: FC = () => {
  return (
    <Wrapper>
      <WrapperContent>
        <WrapperTop>
          <Section>
            <Title>Combo</Title>
            <FooterLink>Planos</FooterLink>
            <FooterLink>Atendimentos</FooterLink>
            <FooterLink>Serviços adicionais</FooterLink>
          </Section>
          <Section>
            <Title>Celular</Title>
            <FooterLink>Planos</FooterLink>
            <FooterLink>Atendimentos</FooterLink>
            <FooterLink>Serviços adicionais</FooterLink>
          </Section>
          <Section>
            <Title>Fixo</Title>
            <FooterLink>Planos</FooterLink>
            <FooterLink>Atendimentos</FooterLink>
            <FooterLink>Serviços adicionais</FooterLink>
          </Section>
          <Section>
            <Title>Sobre</Title>
            <FooterLink>A empresa</FooterLink>
            <FooterLink>Franquia</FooterLink>
            <FooterLink>Sobre nós</FooterLink>
          </Section>
          <Section>
            <Title>Comunidade</Title>
            <FooterLink>Acessibilidade</FooterLink>
            <FooterLink>Diversidade e pertencimento</FooterLink>
            <FooterLink>telzir.org</FooterLink>
          </Section>
        </WrapperTop>
        <WrapperCopyRight>
          <Logo src="/logo-telzir.png" />
          2021
        </WrapperCopyRight>
      </WrapperContent>
    </Wrapper>
  );
};
