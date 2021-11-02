import { FC, Fragment } from 'react';

import {
  DescriptionBenefit,
  TitleBenefit,
  WrapperBenefit,
  WrapperContentBenefit,
} from 'components/Sections/SectionBenefits/styles';

import { WrapperIlustration, WrapperTable, Text, Title } from './styles';

const data = [
  { origin: '011', destiny: '016', tax: 1.9 },
  { origin: '016', destiny: '011', tax: 2.9 },
  { origin: '011', destiny: '017', tax: 1.7 },
  { origin: '017', destiny: '011', tax: 2.7 },
];

export const BenefitThree: FC = () => {
  return (
    <WrapperBenefit>
      <WrapperContentBenefit>
        <TitleBenefit>Taxas fixas de acordo com a região</TitleBenefit>
        <DescriptionBenefit>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </DescriptionBenefit>
      </WrapperContentBenefit>
      <WrapperIlustration>
        <WrapperTable>
          <Title>Origem</Title>
          <Title>Destino</Title>
          <Title>$/min</Title>
          {data.map((d) => (
            <Fragment key={`${d.origin}-${d.destiny}-${d.tax}`}>
              <Text>{d.origin}</Text>
              <Text>{d.destiny}</Text>
              <Text>{d.tax}</Text>
            </Fragment>
          ))}
        </WrapperTable>
      </WrapperIlustration>
    </WrapperBenefit>
  );
};
