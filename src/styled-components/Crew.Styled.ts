import styled from "styled-components";
import { PlanetTxt } from "./Destination.Styled";

interface Styles {
  opa?: string;
  max?: string;
}

export const StyledCrew = styled.div`
  margin: 24px 0px 80px;

  hr {
    width: 327px;
    height: 1px;
    margin: 0px auto;
    border: none;
    background-color: #383b4b;
  }

  @media (min-width: 768px) {
    margin: 40px 0px 0px;
    padding: 0px 38.5px;

    hr {
      display: none;
    }
  }
`;

export const Member = styled.img`
  width: 180.12px;
  height: 222px;
  margin: 32px auto 0px;
  display: block;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const MemberTab = styled.img`
  width: 456px;
  height: 532px;
  margin: 40px auto 0px;
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

export const ChangePath = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 32px;

  @media (min-width: 768px) {
    margin-top: 40px;
  }
`;

export const ChangeDiv = styled.div<Styles>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: white;
  opacity: ${({ opa }) => opa};
`;

export const Proffesion = styled.p`
  font-family: "Bellefair", serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 18.34px;
  text-align: center;
  color: white;
  opacity: 0.5;
  margin-top: 32px;
  text-transform: uppercase;

  @media (min-width: 768px) {
    display: none;
  }
`;
export const ProfName = styled(Proffesion)`
  font-size: 24px;
  line-height: 27.5px;
  margin-top: 8px;
  opacity: 1;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const CrewTxt = styled(PlanetTxt)`
  margin-top: 16px;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const ProffesionTab = styled.p`
  font-family: "Bellefair", serif;
  font-weight: 400;
  font-size: 24px;
  line-height: 27.5px;
  text-align: center;
  color: white;
  opacity: 0.5;
  margin-top: 60px;
  text-transform: uppercase;
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;
export const ProfNameTab = styled(Proffesion)`
  font-size: 40px;
  line-height: 45.84px;
  margin-top: 8px;
  opacity: 1;
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

export const CrewTxtTab = styled(PlanetTxt)<Styles>`
  margin-top: 16px;
  max-width: ${({ max }) => max};
  font-size: 16px;
  line-height: 28px;
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;
