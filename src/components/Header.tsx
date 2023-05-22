import { useState } from "react";
import {
  HeaderStyled,
  Logo,
  Menu,
  Hamb,
  Close,
  PagesDiv,
  SinglePageDiv,
  PageId,
  PageNameMenu,
  StyledLink,
  TabMenu,
  PageNameMenuTab,
} from "../styled-components/Header.Styled";
import { useLocation } from "react-router-dom";

interface State {
  checked: string;
  setChecked: (checked: string) => void;
}

export default function Header({ setChecked }: State) {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const path = useLocation();

  const currentPath = path.pathname;

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
      realPath: "/Destination/Moon",
    },
    {
      id: "02",
      name: "CREW",
      realPath: "/Crew/Douglas Hurley",
    },
    {
      id: "03",
      name: "TECHNOLOGY",
      realPath: "/Technology/Launch vehicle",
    },
  ];

  return (
    <HeaderStyled>
      <Logo src="../assets/shared/logo.svg" alt="logo" />
      <hr />
      <TabMenu>
        {pages.map((item) => (
          <StyledLink
            to={item.realPath}
            onClick={() => setChecked(item.realPath)}
            key={Math.random()}
          >
            <SinglePageDiv
              pb={
                item.realPath.split("/")[1] === currentPath.split("/")[1]
                  ? "3px solid white"
                  : ""
              }
            >
              <PageId>{item.id}</PageId>
              <PageNameMenuTab
                pb={
                  item.realPath.split("/")[1] === currentPath.split("/")[1]
                    ? "3px solid white"
                    : ""
                }
              >
                {item.name}
              </PageNameMenuTab>
            </SinglePageDiv>
          </StyledLink>
        ))}
      </TabMenu>
      <Hamb
        src="../assets/shared/icon-hamburger.svg"
        alt="icon-hamburger"
        onClick={() => setIsVisible(true)}
      />
      <Menu wi={isVisible ? "254px" : "0px"}>
        <Close
          src="../assets/shared/icon-close.svg"
          alt="icon-close"
          onClick={() => setIsVisible(false)}
          right={isVisible ? "27px" : "-27px"}
        />
        <PagesDiv left={isVisible ? "32px" : "286px"}>
          {pages.map((item) => (
            <StyledLink
              to={item.realPath}
              key={Math.random()}
              onClick={() => {
                setChecked(item.realPath);
                setIsVisible(false);
              }}
            >
              <SinglePageDiv
                display={
                  item.realPath.split("/")[1] === currentPath.split("/")[1]
                    ? "block"
                    : "none"
                }
              >
                <PageId>{item.id}</PageId>
                <PageNameMenu>{item.name}</PageNameMenu>
              </SinglePageDiv>
            </StyledLink>
          ))}
        </PagesDiv>
      </Menu>
    </HeaderStyled>
  );
}
