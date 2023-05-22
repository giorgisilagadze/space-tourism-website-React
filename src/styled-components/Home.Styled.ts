import styled from "styled-components";

interface Styles {
  display?: string;
  mt?: string;
}

export const StyledHome = styled.div`
  margin: 48px 0px;

  @media (min-width: 768px) {
    margin: 106px 0px 89px;
  }

  @media (min-width: 1440px) {
    margin: 251px 0px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 391px;
  }
`;

export const HomeP = styled.p`
  font-family: "Barlow Condensed", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 19.2px;
  letter-spacing: 2.7px;
  text-align: center;
  color: #d0d6f9;

  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 3.38px;
  }

  @media (min-width: 1440px) {
    font-size: 28px;
    line-height: 33.6px;
    letter-spacing: 4.72px;
    text-align: start;
  }
`;

export const HomeTitle = styled.h1`
  font-family: "Bellefair", serif;
  font-weight: 400;
  font-size: 80px;
  line-height: 100px;
  text-align: center;
  margin-top: 16px;
  color: white;

  @media (min-width: 768px) {
    font-size: 150px;
    line-height: 150px;
    margin-top: 24px;
  }

  @media (min-width: 1440px) {
    line-height: 171.9px;
    text-align: start;
  }
`;

export const HomeTxt = styled.p`
  font-family: "Barlow", sans-serif;
  max-width: 327px;
  font-weight: 400;
  font-size: 15px;
  line-height: 25px;
  text-align: center;
  margin: 16px auto 0px;
  color: #d0d6f9;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 28px;
    margin: 24px auto 0px;
    max-width: 444px;
  }

  @media (min-width: 1440px) {
    font-size: 18px;
    line-height: 32px;
    margin: 24px auto 0px;
    text-align: start;
  }
`;

export const Explore = styled.div<Styles>`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Bellefair", serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 22.92px;
  letter-spacing: 1.25px;
  color: #0b0d17;
  margin: 81px auto 0px;

  @media (min-width: 768px) {
    width: 242px;
    height: 242px;
    font-size: 32px;
    line-height: 36.67px;
    letter-spacing: 2px;
    margin: 156px auto 0px;
  }

  @media (min-width: 1440px) {
    width: 274px;
    height: 274px;
    font-size: 32px;
    margin: ${({ mt }) => mt} auto 0px;
    position: relative;

    &:hover {
      box-shadow: 0 0 88px #364557;
    }

    &:hover::before {
      content: "";
      position: absolute;
      width: 450px;
      height: 450px;
      background-color: white;
      border-radius: 50%;
      opacity: 0.1;
    }
  }
`;
