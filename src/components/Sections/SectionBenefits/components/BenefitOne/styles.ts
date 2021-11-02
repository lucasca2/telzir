import styled from 'styled-components';

export const WrapperIlustration = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
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
`;
