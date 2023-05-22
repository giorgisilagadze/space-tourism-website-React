import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  padding: 24px 24px 0px;

  @media (min-width: 768px) {
    padding: 0px 0px 0px 39px;
  }

  @media (min-width: 1440px) {
    margin-top: 40px;

    hr {
      width: 473px;
      height: 1px;
      margin: 0px auto;
      border: none;
      background-color: #383b4b;
      right: 800px;
      position: fixed;
      z-index: 99;
    }
  }
`;

export const Logo = styled.img`
  width: 40px;
  height: 40px;

  @media (min-width: 768px) {
    width: 48px;
    height: 48px;
  }
`;

export const Hamb = styled.img`
  @media (min-width: 768px) {
    display: none;
  }
`;

export const TabMenu = styled.nav`
  width: 450px;
  background-color: #1a1a27;
  padding: 39.5px 48px 0px;
  display: none;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }

  @media (min-width: 1440px) {
    width: 830px;
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(40.7742px);
    padding: 38.5px 167px 1px 123px;
  }
`;

interface MenuProps {
  wi?: string;
  right?: string;
  left?: string;
  display?: string;
  pb?: string;
}

export const Menu = styled.div<MenuProps>`
  position: fixed;
  top: 0px;
  right: 0px;
  width: ${({ wi }) => wi};
  height: 100vh;
  background-image: url("../assets/home/menu.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  transition: 0.5s;
  z-index: 10;
`;

export const Close = styled.img<MenuProps>`
  position: absolute;
  right: ${({ right }) => right};
  top: 35px;
  transition: 0.5s;
`;

export const PagesDiv = styled.div<MenuProps>`
  position: absolute;
  top: 86px;
  left: ${({ left }) => left};
  width: 100%;
  height: 178px;
  transition: 0.5s;
`;

export const SinglePageDiv = styled.div<MenuProps>`
  display: flex;
  gap: 11px;
  margin-top: 32px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: -6px;
    right: 32px;
    width: 4px;
    height: 31px;
    background-color: white;
    display: ${({ display }) => display};
    z-index: 11;
  }

  @media (min-width: 768px) {
    margin-top: 0px;
    &::before {
      display: none;
    }
  }

  @media (min-width: 1440px) {
    border-bottom: ${({ pb }) => pb};

    &::before {
      display: none;
    }

    &:hover {
      border-bottom: solid 3px #a2a7b4;
    }
  }
`;

export const PageId = styled.p`
  font-family: "Barlow Condensed", sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 19.2px;
  letter-spacing: 2.7px;
  color: white;

  @media (min-width: 768px) {
    display: none;
  }

  @media (min-width: 1440px) {
    display: block;
  }
`;

export const PageNameMenu = styled(PageId)`
  font-weight: 400;

  @media (min-width: 768px) {
    display: block;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const PageNameMenuTab = styled(PageNameMenu)<MenuProps>`
  line-height: 16.8px;
  letter-spacing: 2.36px;
  padding-bottom: 37px;
  border-bottom: ${({ pb }) => pb};

  @media (min-width: 1440px) {
    border-bottom: none;
  }
`;
