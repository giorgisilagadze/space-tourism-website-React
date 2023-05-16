import { useState } from "react";
import {
  HeaderStyled,
  Menu,
  Close,
  PagesDiv,
  SinglePageDiv,
  PageId,
  PageName,
  StyledLink
} from "../styled-components/Header.Styled";
import { useLocation } from "react-router-dom";

export default function Header() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const path = useLocation();

  const currentPath = path.pathname;

  console.log(currentPath);

  type Pages = {
    id: string;
    name: string;
    realPath: string;
  };

  type arrOfPages = Pages[];

  const pages: arrOfPages = [
    {
      id: "00",
      name: "HOME",
      realPath: "/",
    },
    {
      id: "01",
      name: "DESTINATION",
      realPath: "/Destination",
    },
    {
      id: "02",
      name: "CREW",
      realPath: "/Crew",
    },
    {
      id: "03",
      name: "TECHNOLOGY",
      realPath: "/Technology",
    },
  ];

  return (
    <HeaderStyled>
      <img src="./assets/shared/logo.svg" alt="logo" />
      <img
        src="./assets/shared/icon-hamburger.svg"
        alt="icon-hamburger"
        onClick={() => setIsVisible(true)}
      />
      <Menu wi={isVisible ? "254px" : "0px"}>
        <Close
          src="./assets/shared/icon-close.svg"
          alt="icon-close"
          onClick={() => setIsVisible(false)}
          right={isVisible ? "27px" : "-27px"}
        />
        <PagesDiv left={isVisible ? "32px" : "286px"}>
          {pages.map((item) => (
            <StyledLink to={item.realPath} key={Math.random()}>
              <SinglePageDiv
                display={item.realPath === currentPath ? "block" : "none"}
              >
                <PageId>{item.id}</PageId>
                <PageName>{item.name}</PageName>
              </SinglePageDiv>
            </StyledLink>
          ))}
        </PagesDiv>
      </Menu>
    </HeaderStyled>
  );
}
