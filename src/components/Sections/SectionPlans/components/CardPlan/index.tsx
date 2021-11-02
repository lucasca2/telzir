import { FC } from 'react';
import { MdCheck } from 'react-icons/md';

import { Button } from 'components/Button';

import {
  Wrapper,
  Logo,
  Title,
  Price,
  Description,
  TitleBenefits,
  Benefits,
  Benefit,
  AltPrice,
} from './styles';

type TCardPlan = {
  logo: string;
  name: string;
  price?: string;
  description: string;
  titleBenefits: string;
  benefits: string[];
  altPrice?: string;
};

export const CardPlan: FC<TCardPlan> = ({
  logo,
  name,
  price,
  altPrice,
  description,
  titleBenefits,
  benefits,
}) => {
  return (
    <Wrapper>
      <Logo src={logo} />
      <Title>{name}</Title>
      {price && (
        <Price
          dangerouslySetInnerHTML={{
            __html: price.replace(
              /(.{3})(.{2})(.{4})/g,
              '<span>$1</span><span><span>$2</span><span>$3</span></span>'
            ),
          }}
        />
      )}
      {altPrice && <AltPrice>{altPrice}</AltPrice>}

      <Description>{description}</Description>
      <Benefits>
        <TitleBenefits>{titleBenefits}</TitleBenefits>
        {benefits.map((benefit) => (
          <Benefit>
            <MdCheck />
            {benefit}
          </Benefit>
        ))}
      </Benefits>
      <Button transparent bordered>
        Contratar
      </Button>
    </Wrapper>
  );
};
