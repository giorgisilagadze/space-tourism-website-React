import { useEffect, useState } from "react";
import {
  StyledCrew,
  Member,
  ChangePath,
  ChangeDiv,
  Proffesion,
  ProfName,
  CrewTxt,
} from "../styled-components/Crew.Styled";
import {
  PageName,
  Number,
  Begin,
} from "../styled-components/Destination.Styled";
import { useParams, useLocation } from "react-router-dom";
import data from "../../data.json";
import { StyledLink } from "../styled-components/Header.Styled";

interface BackgroundImage {
  setBackgroundImage: (backgroundImage: string) => void;
}

interface Images {
  png: string;
  webp: string;
}

interface Data {
  name: string;
  images: Images;
  role: string;
  bio: string;
}

export default function Crew({ setBackgroundImage }: BackgroundImage) {
  const params = useParams();

  const [memberData, setMembertData] = useState<Data | undefined>();
  const [checked, setChecked] = useState("");

  const location = useLocation();
  console.log(location.pathname);

  useEffect(() => {
    setBackgroundImage("../assets/crew/background-crew-mobile.jpg");
    const findData = data.crew.find((item) => item.name == params.member);
    setMembertData(findData);
  }, [checked]);
  console.log(memberData);

  const links = [
    "/Crew/Douglas%20Hurley",
    "/Crew/Mark%20Shuttleworth",
    "/Crew/Victor%20Glover",
    "/Crew/Anousheh%20Ansari",
  ];

  return (
    <StyledCrew>
      <PageName>
        <Number>02</Number>
        <Begin>Meet your crew</Begin>
      </PageName>
      <Member src={memberData?.images.webp} alt="member" />
      <hr />
      <ChangePath>
        {links.map((item) => (
          <StyledLink to={item} key={Math.random()}>
            <ChangeDiv
              onClick={() => setChecked(item)}
              opa={location.pathname == item ? "1" : "0.17"}
            ></ChangeDiv>
          </StyledLink>
        ))}
      </ChangePath>
      <Proffesion>{memberData?.role}</Proffesion>
      <ProfName>{memberData?.name}</ProfName>
      <CrewTxt>{memberData?.bio}</CrewTxt>
    </StyledCrew>
  );
}
