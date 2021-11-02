import styled from 'styled-components';

export const Wrapper = styled.header`
  position: relative;
  flex-shrink: 0;
  height: 585px;

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow: hidden;
  background: ${(p) => p.theme.header.background};

  @media (max-width: 768px) {
    height: auto;
  }
`;

export const Image = styled.img`
  position: absolute;
  top: -80px;
  right: -50px;
  min-height: 100%;
  width: 115%;
  object-fit: cover;
  object-position: right;

  @media (max-width: 1250px) {
    width: 125%;
  }

  @media (max-width: 1160px) {
    width: 135%;
    right: -100px;
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const Logo = styled.img`
  width: 60px;
  height: auto;

  @media (max-width: 768px) {
    width: 40px;
  }
`;

export const WrapperContent = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;
  z-index: 1;
  width: 100%;
  max-width: ${(p) => p.theme.maxWidth};
  padding: ${(p) => p.theme.spacing.xLarge} ${(p) => p.theme.spacing.giant};

  height: 100%;

  @media (max-width: 768px) {
    gap: ${(p) => p.theme.spacing.xxLarge};
    padding: ${(p) => p.theme.spacing.medium} ${(p) => p.theme.spacing.medium}
      ${(p) => p.theme.spacing.large};
  }
`;

export const WrapperMenu = styled.ul`
  display: flex;
  gap: ${(p) => p.theme.spacing.xxLarge};
  font-size: ${(p) => p.theme.font.medium};
  list-style: none;

  align-items: center;

  @media (max-width: 768px) {
    gap: ${(p) => p.theme.spacing.medium};
    font-size: ${(p) => p.theme.font.small};

    & button {
      padding: ${(p) => p.theme.spacing.small};
      font-size: ${(p) => p.theme.font.small};
    }
  }
`;

export const Menu = styled.li`
  user-select: none;
  cursor: pointer;

  transition: opacity 0.3s, transform 0.3s;
  will-change: opacity, transform;

  &:active {
    transform: scale(0.98);
  }

  &:hover {
    opacity: 0.5;
  }
`;

export const WrapperTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const WrapperBottom = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 450px;
  margin: auto 0 auto ${(p) => p.theme.spacing.giant};
  align-items: flex-start;

  gap: ${(p) => p.theme.spacing.medium};

  @media (max-width: 768px) {
    width: 100%;
    margin: auto;

    & button {
      padding: ${(p) => p.theme.spacing.small} ${(p) => p.theme.spacing.large};
      font-size: ${(p) => p.theme.font.small};
    }
  }
`;

export const Title = styled.h1`
  display: flex;
  flex-direction: column;
  font-size: ${(p) => p.theme.font.giant};
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: ${(p) => p.theme.font.xxLarge};
  }
`;

export const Description = styled.p`
  font-size: ${(p) => p.theme.font.large};
  line-height: ${(p) => p.theme.spacing.large};
  margin-bottom: ${(p) => p.theme.spacing.medium};

  @media (max-width: 768px) {
    font-size: ${(p) => p.theme.font.medium};
  }
`;
