import { FC } from 'react';

import { BenefitOne } from './components/BenefitOne';
import { BenefitThree } from './components/BenefitThree';
import { BenefitTwo } from './components/BenefitTwo';
import { Wrapper, WrapperSection, Title, WrapperContent } from './styles';

export const SectionBenefits: FC = () => {
  return (
    <Wrapper>
      <WrapperSection>
        <Title>
          Vantagens
          <br /> do FaleMais
        </Title>
        <WrapperContent>
          <BenefitOne />
          <BenefitTwo />
          <BenefitThree />
        </WrapperContent>
      </WrapperSection>
    </Wrapper>
  );
};
