import styled from "styled-components";
import { HomeP, HomeTitle, HomeTxt } from "./Home.Styled";

interface Styles {
  color: string;
  bb: string;
}

export const StyledDestination = styled.div`
  margin: 24px 0px 57px;

  hr {
    width: 327px;
    height: 1px;
    margin: 32px auto 0px;
    border: none;
    background-color: #383b4b;
  }

  @media (min-width: 768px) {
    margin: 40px 0px 62px;
    padding: 0px 38.5px;

    hr {
      width: 573px;
      margin: 49px auto 0px;
    }
  }

  @media (min-width: 1440px) {
    margin: 76px 0px 112px;
    padding: 0px 165px;

    hr {
      width: 444px;
      margin: 54px auto 0px;
    }
  }
`;

export const PageName = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    justify-content: start;
  }
`;

export const Number = styled(HomeP)`
  font-weight: 700;
  text-align: start;
  opacity: 0.25;
  color: white;
`;

export const Begin = styled(HomeP)`
  color: white;
  text-align: start;
  text-transform: uppercase;
`;

export const Planet = styled.img`
  width: 170px;
  height: 170px;
  margin: 32px auto 0px;
  display: block;
  opacity: 0.8;

  @media (min-width: 768px) {
    width: 300px;
    height: 300px;
    margin: 60px auto 0px;
  }

  @media (min-width: 1440px) {
    width: 445px;
    height: 445px;
    margin: 0px 0px 0px 40px;
  }
`;

export const PlanetsDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 26px;
  margin-top: 26px;

  @media (min-width: 768px) {
    margin-top: 53px;
    gap: 36px;
  }

  @media (min-width: 1440px) {
    margin-top: 0px;
    justify-content: start;
  }
`;

export const Name = styled.p<Styles>`
  font-family: "Barlow Condensed", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 16.8px;
  letter-spacing: 2.36px;
  padding-bottom: 8px;
  color: ${({ color }) => color};
  border-bottom: ${({ bb }) => bb};

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 19.2px;
    letter-spacing: 2.7px;
    padding-bottom: 12px;
  }

  @media (min-width: 1440px) {
    cursor: pointer;

    &:hover {
      border-bottom: solid 3px #a2a7b4;
    }
  }
`;

export const HugeName = styled(HomeTitle)`
  font-size: 56px;
  line-height: 64.18px;
  margin-top: 20px;
  text-transform: uppercase;

  @media (min-width: 768px) {
    font-size: 80px;
    line-height: 91.68px;
    margin-top: 32px;
  }

  @media (min-width: 1440px) {
    font-size: 100px;
    line-height: 114.6px;
    margin-top: 37px;
  }
`;

export const PlanetTxt = styled(HomeTxt)`
  margin-top: 1px;

  @media (min-width: 768px) {
    margin-top: 8px;
    max-width: 573px;
  }

  @media (min-width: 1440px) {
    margin: 14px 0px 0px;
    max-width: 444px;
  }
`;

export const Dinstance = styled(Name)<Styles>`
  text-align: center;
  margin-top: 32px;

  @media (min-width: 768px) {
    margin-top: 0px;
    font-size: 14px;
    line-height: 16.8px;
    letter-spacing: 2.36px;
    padding: 0px;
  }

  @media (min-width: 1440px) {
    text-align: start;
  }
`;
export const DinstP = styled(HugeName)`
  font-size: 28px;
  line-height: 32.09px;
  margin-top: 12px;

  @media (min-width: 768px) {
    font-size: 28px;
    line-height: 32.09px;
  }
`;

export const DivTab = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    gap: 90px;
    margin-top: 28px;
  }

  @media (min-width: 1440px) {
    justify-content: start;
  }
`;

export const DestFlex = styled.div`
  @media (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 157px;
    margin-top: 64px;
  }
`;
