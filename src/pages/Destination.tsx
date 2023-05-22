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
  DivTab,
  DestFlex,
} from "../styled-components/Destination.Styled";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
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
  description: string;
  distance: string;
  travel: string;
}

export default function Destination({
  setBackgroundImages,
  checked,
  setChecked,
}: BackgroundImage) {
  const params = useParams();

  const [planetData, setPlanetData] = useState<Data | undefined>();

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
    setBackgroundImages({
      mobile: "../assets/destination/background-destination-mobile.jpg",
      tablet: "../assets/destination/background-destination-tablet.jpg",
      desktop: "../assets/destination/background-destination-desktop.jpg",
    });
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
      <DestFlex>
        <Planet src={planetData?.images.png} alt="" />
        <div>
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
          <DivTab>
            <div>
              <Dinstance color="#D0D6F9" bb="0px">
                AVG. DISTANCE
              </Dinstance>
              <DinstP>{planetData?.distance}</DinstP>
            </div>
            <div>
              <Dinstance color="#D0D6F9" bb="0px">
                EST. TRAVEL TIME
              </Dinstance>
              <DinstP>{planetData?.travel}</DinstP>
            </div>
          </DivTab>
        </div>
      </DestFlex>
    </StyledDestination>
  );
}
