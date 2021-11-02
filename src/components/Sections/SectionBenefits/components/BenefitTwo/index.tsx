import { FC } from 'react';

import {
  DescriptionBenefit,
  TitleBenefit,
  WrapperBenefit,
  WrapperContentBenefit,
} from 'components/Sections/SectionBenefits/styles';

import { WrapperIlustration, WrapperIcon, Icon, Text, Price } from './styles';

export const BenefitTwo: FC = () => {
  return (
    <WrapperBenefit>
      <WrapperContentBenefit>
        <TitleBenefit>Os melhores planos para você</TitleBenefit>
        <DescriptionBenefit>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </DescriptionBenefit>
      </WrapperContentBenefit>
      <WrapperIlustration>
        <WrapperIcon>
          <Icon src="map-pin.svg" />
          <Text>Qualquer lugar</Text>
        </WrapperIcon>
        <WrapperIcon>
          <Icon src="plus.svg" />
        </WrapperIcon>
        <WrapperIcon>
          <Icon src="phone-call.svg" />
          <Text>Minutos grátis</Text>
        </WrapperIcon>
        <Price>
          <span>A partir de</span>
          <span>24,</span>
          <span>
            <span>99</span>
            <span>/mês</span>
          </span>
        </Price>
      </WrapperIlustration>
    </WrapperBenefit>
  );
};
