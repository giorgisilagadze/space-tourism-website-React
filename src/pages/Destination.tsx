import { StyledDestination } from "../styled-components/Destination.Styled";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../../data.json";

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

export default function Home({ setBackgroundImage }: BackgroundImage) {
  const params = useParams();
  console.log(data);

  const [planetData, setPlanetData] = useState<Data | undefined>();

  useEffect(() => {
    setBackgroundImage(
      "./assets/destination/background-destination-mobile.jpg"
    );
    const findData = data.destinations.find(
      (item) => item.name == params.planet
    );
    setPlanetData(findData);
  }, []);

  console.log(planetData);

  return <StyledDestination>dest</StyledDestination>;
}
