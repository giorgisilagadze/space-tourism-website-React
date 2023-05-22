import { useEffect, useState } from "react";
import {
  PageName,
  Number,
  Begin,
} from "../styled-components/Destination.Styled";
import {
  StyledTech,
  VehicleImg,
  ChangeDiv,
  Termp,
  PageNameTech,
  NameTech,
  TechTxt,
  TechFlex,
  ChangePathTech,
  TechChildFlex,
} from "../styled-components/Technology.Styled";
import { useLocation, useParams } from "react-router-dom";
import data from "../../data.json";
import {
  ChangePath,
  ProfName,
  CrewTxt,
} from "../styled-components/Crew.Styled";
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
  portrait: string;
  landscape: string;
}

interface Data {
  name: string;
  images: Images;
  description: string;
}

export default function Technology({
  setBackgroundImages,
  checked,
  setChecked,
}: BackgroundImage) {
  const params = useParams();

  const [vehicleData, setVehicleData] = useState<Data | undefined>();

  const [documentWidth, setDocumentWidth] = useState(
    document.documentElement.clientWidth
  );

  useEffect(() => {
    function handleResize() {
      setDocumentWidth(document.documentElement.clientWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [document.documentElement.clientWidth]);

  const location = useLocation();

  useEffect(() => {
    setBackgroundImages({
      mobile: "../assets/technology/background-technology-mobile.jpg",
      tablet: "../assets/technology/background-technology-tablet.jpg",
      desktop: "../assets/technology/background-technology-desktop.jpg",
    });
    const findData = data.technology.find(
      (item) => item.name == params.vehicle
    );
    setVehicleData(findData);
  }, [checked]);

  useEffect(() => {}, []);

  const buttons = [
    { number: "1", link: "/Technology/Launch%20vehicle" },
    { number: "2", link: "/Technology/Spaceport" },
    { number: "3", link: "/Technology/Space%20capsule" },
  ];

  return (
    <StyledTech>
      <PageNameTech>
        <Number>03</Number>
        <Begin>SPACE LAUNCH 101</Begin>
      </PageNameTech>
      <TechFlex>
        <VehicleImg
          src={
            documentWidth >= 1440
              ? vehicleData?.images.portrait
              : vehicleData?.images.landscape
          }
          alt="vehicle"
        />
        <TechChildFlex>
          <ChangePathTech>
            {buttons.map((item) => (
              <StyledLink
                to={item.link}
                key={Math.random()}
                onClick={() => setChecked(item.link)}
              >
                <ChangeDiv
                  bg={item.link == location.pathname ? "white" : "none"}
                  color={item.link == location.pathname ? "#0B0D17" : "white"}
                  border={
                    item.link == location.pathname
                      ? "1px solid white"
                      : "1px solid #4c4c56"
                  }
                >
                  {item.number}
                </ChangeDiv>
              </StyledLink>
            ))}
          </ChangePathTech>
          <div>
            <Termp>THE TERMINOLOGY…</Termp>
            <NameTech>{vehicleData?.name}</NameTech>
            <TechTxt>{vehicleData?.description}</TechTxt>
          </div>
        </TechChildFlex>
      </TechFlex>
    </StyledTech>
  );
}
