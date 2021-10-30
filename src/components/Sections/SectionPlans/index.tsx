import { FC } from 'react';

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
        <WrapperContent />
      </WrapperSection>
    </Wrapper>
  );
};
