import { FC } from 'react';

import { TaxCalculator } from '../../TaxCalculator';
import {
  Wrapper,
  WrapperSection,
  WrapperTitle,
  Title,
  Subtitle,
  WrapperContent,
} from './styles';

export const SectionCalculate: FC = () => {
  return (
    <Wrapper>
      <WrapperSection>
        <WrapperTitle>
          <Title>
            Faça o cálculo
            <br /> do FaleMais
          </Title>
          <Subtitle>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </Subtitle>
        </WrapperTitle>
        <WrapperContent>
          <TaxCalculator />
        </WrapperContent>
      </WrapperSection>
    </Wrapper>
  );
};
