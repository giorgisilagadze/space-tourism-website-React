import styled from "styled-components";
import { PageName, PlanetTxt } from "./Destination.Styled";
import { ChangePath, Proffesion } from "./Crew.Styled";

interface Styles {
  bg: string;
  color: string;
  border: string;
}

export const StyledTech = styled.div`
  margin: 24px 0px 56px;

  @media (min-width: 768px) {
    margin: 40px 0px 97.33px;
  }

  @media (min-width: 1440px) {
    margin: 40px 0px 101px;
    padding-left: 166.5px;
  }
`;

export const PageNameTech = styled(PageName)`
  @media (min-width: 768px) {
    justify-content: start;
    margin-left: 38.5px;
  }

  @media (min-width: 1440px) {
    margin-left: 0px;
  }
`;

export const VehicleImg = styled.img`
  width: 375px;
  height: 170px;
  margin: 32px auto 0px;
  display: block;

  @media (min-width: 768px) {
    width: 768px;
    height: 310px;
    margin: 60px auto 0px;
  }

  @media (min-width: 1440px) {
    max-width: 515px;
    height: 527px;
    margin: 0px;
  }
`;

export const ChangeDiv = styled.div<Styles>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: ${({ border }) => border};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ bg }) => bg};
  color: ${({ color }) => color};

  @media (min-width: 768px) {
    width: 60px;
    height: 60px;
    margin: 16px auto 0px;
  }

  @media (min-width: 1440px) {
    width: 80px;
    height: 80px;
    margin: 32px auto 0px;
    cursor: pointer;

    &:hover {
      border: 1px solid white;
    }
  }
`;

export const Termp = styled.p`
  font-family: "Barlow Condensed", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 16.8px;
  letter-spacing: 2.36px;
  text-align: center;
  color: #d0d6f9;
  margin-top: 26px;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 19.2px;
    letter-spacing: 2.7px;
    margin-top: 44px;
  }

  @media (min-width: 1440px) {
    text-align: start;
    margin-top: 0px;
  }
`;

export const NameTech = styled(Proffesion)`
  font-size: 24px;
  line-height: 27.5px;
  margin-top: 8px;
  opacity: 1;

  @media (min-width: 768px) {
    font-size: 40px;
    line-height: 45.84px;
    display: block;
    margin-top: 16px;
  }

  @media (min-width: 1440px) {
    font-size: 56px;
    line-height: 64.18px;
    margin-top: 11px;
    text-align: start;
  }
`;

export const TechTxt = styled(PlanetTxt)`
  margin-top: 16px;

  @media (min-width: 768px) {
    max-width: 458px;
  }
`;

export const TechFlex = styled.div`
  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
    margin-top: 26px;
    gap: 128px;
  }
`;

export const ChangePathTech = styled(ChangePath)`
  @media (min-width: 1440px) {
    display: block;
    margin-top: -32px;
  }
`;

export const TechChildFlex = styled.div`
  @media (min-width: 1440px) {
    display: flex;
    gap: 80px;
  }
`;
