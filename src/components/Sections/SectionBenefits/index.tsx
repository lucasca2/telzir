import { FC } from 'react';

import {
  Wrapper,
  Title,
  WrapperContent,
  WrapperBenefit,
  TitleBenefit,
  DescriptionBenefit,
} from './styles';

export const SectionBenefits: FC = () => {
  return (
    <Wrapper>
      <Title>
        Vantagens
        <br /> do FaleMais
      </Title>
      <WrapperContent>
        <WrapperBenefit>
          <TitleBenefit>Lorem ipsum dolor sit amet</TitleBenefit>
          <DescriptionBenefit>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </DescriptionBenefit>
        </WrapperBenefit>
        <WrapperBenefit>
          <TitleBenefit>Duis aute irure dolor in reprehenderit</TitleBenefit>
          <DescriptionBenefit>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </DescriptionBenefit>
        </WrapperBenefit>
        <WrapperBenefit>
          <TitleBenefit>Excepteur sint occa ecat cupidatat</TitleBenefit>
          <DescriptionBenefit>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </DescriptionBenefit>
        </WrapperBenefit>
      </WrapperContent>
    </Wrapper>
  );
};
