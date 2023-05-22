import { useEffect, useState } from "react";
import {
  StyledCrew,
  Member,
  ChangePath,
  ChangeDiv,
  Proffesion,
  ProfName,
  CrewTxt,
  ProffesionTab,
  ProfNameTab,
  CrewTxtTab,
  MemberTab,
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
  setBackgroundImages: (backgroundImages: {
    mobile: string;
    tablet: string;
    desktop: string;
  }) => void;
  checked: string;
  setChecked: (checked: string) => void;
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

export default function Crew({
  setBackgroundImages,
  checked,
  setChecked,
}: BackgroundImage) {
  const params = useParams();

  const [memberData, setMembertData] = useState<Data | undefined>();

  const location = useLocation();
  console.log(location.pathname);

  useEffect(() => {
    setBackgroundImages({
      mobile: "../assets/crew/background-crew-mobile.jpg",
      tablet: "../assets/crew/background-crew-tablet.jpg",
      desktop: "../assets/crew/background-crew-desktop.jpg",
    });
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
      <ProffesionTab>{memberData?.role}</ProffesionTab>
      <ProfNameTab>{memberData?.name}</ProfNameTab>
      <CrewTxtTab max={params.member == "Douglas Hurley" ? "458px" : "592px"}>
        {memberData?.bio}
      </CrewTxtTab>
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
      <MemberTab src={memberData?.images.webp} alt="member" />
      <Proffesion>{memberData?.role}</Proffesion>
      <ProfName>{memberData?.name}</ProfName>
      <CrewTxt>{memberData?.bio}</CrewTxt>
    </StyledCrew>
  );
}
