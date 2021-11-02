import { FC } from 'react';

import { CardPlan } from './components/CardPlan';
import {
  Wrapper,
  WrapperSection,
  WrapperTitle,
  Title,
  Subtitle,
  WrapperContent,
} from './styles';

export const SectionPlans: FC = () => {
  return (
    <Wrapper>
      <WrapperSection>
        <WrapperTitle>
          <Title>Planos</Title>
          <Subtitle>
            Excepteur sint occaecat cupidatatnon proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </Subtitle>
        </WrapperTitle>
        <WrapperContent>
          <CardPlan
            logo="/logo-falemais30.png"
            name="FaleMais 30"
            price="29,99/mês"
            description="For organizing every corner of your life."
            titleBenefits="Everything in Personal, plus"
            benefits={[
              'Unlimited file uploads',
              'Unlimited file uploads',
              'Unlimited file uploads',
            ]}
          />
          <CardPlan
            logo="/logo-falemais60.png"
            name="FaleMais 60"
            price="59,99/mês"
            description="For organizing every corner of your life."
            titleBenefits="Everything in Personal, plus"
            benefits={[
              'Unlimited file uploads',
              'Unlimited file uploads',
              'Unlimited file uploads',
            ]}
          />
          <CardPlan
            logo="/logo-falemais120.png"
            name="FaleMais 120"
            price="99,99/mês"
            description="For organizing every corner of your life."
            titleBenefits="Everything in Personal, plus"
            benefits={[
              'Unlimited file uploads',
              'Unlimited file uploads',
              'Unlimited file uploads',
            ]}
          />
          <CardPlan
            logo="/logo-falemais-custom.png"
            name="Personalizado"
            altPrice="Customize o plano do seu jeito"
            description="For organizing every corner of your life."
            titleBenefits="Everything in Personal, plus"
            benefits={[
              'Unlimited file uploads',
              'Unlimited file uploads',
              'Unlimited file uploads',
            ]}
          />
        </WrapperContent>
      </WrapperSection>
    </Wrapper>
  );
};
