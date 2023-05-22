import {
  StyledHome,
  HomeP,
  HomeTitle,
  HomeTxt,
  Explore,
  ShadDiv,
} from "../styled-components/Home.Styled";
import { StyledLink } from "../styled-components/Header.Styled";
import { useEffect, useState } from "react";

interface BackgroundImage {
  setBackgroundImages: (backgroundImages: {
    mobile: string;
    tablet: string;
    desktop: string;
  }) => void;
}

export default function Home({ setBackgroundImages }: BackgroundImage) {
  const [hover, setHover] = useState<boolean>(false);

  useEffect(() => {
    setBackgroundImages({
      mobile: "../assets/home/background-home-mobile.jpg",
      tablet: "../assets/home/background-home-tablet.jpg",
      desktop: "../assets/home/background-home-desktop.jpg",
    });
  }, []);

  return (
    <StyledHome>
      <div>
        <HomeP>SO, YOU WANT TO TRAVEL TO</HomeP>
        <HomeTitle>SPACE</HomeTitle>
        <HomeTxt>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </HomeTxt>
      </div>
      <StyledLink to="/Destination/Moon">
        <ShadDiv display={hover ? "block" : "none"} />
        <Explore
          onMouseOver={() => setHover(true)}
          onMouseOut={() => setHover(false)}
          mt={hover ? "-362px" : "88px"}
        >
          EXPLORE
        </Explore>
      </StyledLink>
    </StyledHome>
  );
}
