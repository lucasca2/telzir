import { FC } from 'react';

import {
  DescriptionBenefit,
  TitleBenefit,
  WrapperBenefit,
  WrapperContentBenefit,
} from 'components/Sections/SectionBenefits/styles';

import { WrapperIlustration, Device } from './styles';

export const BenefitOne: FC = () => {
  return (
    <WrapperBenefit>
      <WrapperContentBenefit>
        <TitleBenefit>Lorem ipsum dolor sit amet</TitleBenefit>
        <DescriptionBenefit>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </DescriptionBenefit>
      </WrapperContentBenefit>
      <WrapperIlustration>
        <Device src="/device1.png" />
        <Device src="/device2.png" />
      </WrapperIlustration>
    </WrapperBenefit>
  );
};
