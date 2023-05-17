import {
  StyledHome,
  HomeP,
  HomeTitle,
  HomeTxt,
  Explore,
} from "../styled-components/Home.Styled";
import { StyledLink } from "../styled-components/Header.Styled";

export default function Home() {
  return (
    <StyledHome>
      <HomeP>SO, YOU WANT TO TRAVEL TO</HomeP>
      <HomeTitle>SPACE</HomeTitle>
      <HomeTxt>
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </HomeTxt>
      <StyledLink to="/Destination">
        <Explore>EXPLORE</Explore>
      </StyledLink>
    </StyledHome>
  );
}
