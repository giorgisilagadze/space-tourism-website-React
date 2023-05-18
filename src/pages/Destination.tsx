import {
  StyledDestination,
  PageName,
  Number,
  Begin,
  Planet,
  PlanetsDiv,
  Name,
  HugeName,
  PlanetTxt,
  Dinstance,
  DinstP,
} from "../styled-components/Destination.Styled";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
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
  description: string;
  distance: string;
  travel: string;
}

export default function Destination({ setBackgroundImage }: BackgroundImage) {
  const params = useParams();

  const [planetData, setPlanetData] = useState<Data | undefined>();
  const [checked, setChecked] = useState("");

  const location = useLocation();
  const page = location.pathname;
  console.log(page);

  const planets = [
    { name: "MOON", link: "/Destination/Moon" },
    { name: "MARS", link: "/Destination/Mars" },
    { name: "EUROPA", link: "/Destination/Europa" },
    { name: "TITAN", link: "/Destination/Titan" },
  ];

  useEffect(() => {
    setBackgroundImage(
      "../assets/destination/background-destination-mobile.jpg"
    );
    const findData = data.destinations.find(
      (item) => item.name == params.planet
    );
    setPlanetData(findData);
  }, [checked]);
  console.log(planetData);

  return (
    <StyledDestination>
      <PageName>
        <Number>01</Number>
        <Begin>Pick your destination</Begin>
      </PageName>
      <Planet src={planetData?.images.png} alt="" />
      <PlanetsDiv>
        {planets.map((item) => (
          <StyledLink to={item.link} key={Math.random()}>
            <Name
              onClick={() => setChecked(item.name)}
              color={page == item.link ? "#FFFFFF" : "#D0D6F9"}
              bb={page == item.link ? "3px solid white" : ""}
            >
              {item.name}
            </Name>
          </StyledLink>
        ))}
      </PlanetsDiv>
      <HugeName>{planetData?.name}</HugeName>
      <PlanetTxt>{planetData?.description}</PlanetTxt>
      <hr />
      <Dinstance color="#D0D6F9" bb="0px">
        AVG. DISTANCE
      </Dinstance>
      <DinstP>{planetData?.distance}</DinstP>
      <Dinstance color="#D0D6F9" bb="0px">
        EST. TRAVEL TIME
      </Dinstance>
      <DinstP>{planetData?.travel}</DinstP>
    </StyledDestination>
  );
}
