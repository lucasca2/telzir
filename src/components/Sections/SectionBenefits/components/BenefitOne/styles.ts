import styled from 'styled-components';

export const WrapperIlustration = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const Device = styled.img`
  height: 200px;
  object-fit: contain;

  &:first-child {
    height: 185px;
    transform: translateX(130px);
  }

  &:last-child {
    transform: translateX(50px);
  }

  @media (max-width: 768px) {
    height: 150px;

    &:first-child {
      height: 150px;
      transform: translateX(20px);
    }

    &:last-child {
      transform: translateX(-50px);
    }
  }
`;
