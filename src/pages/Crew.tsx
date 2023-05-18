import { useEffect } from "react";

interface BackgroundImage {
  setBackgroundImage: (backgroundImage: string) => void;
}

export default function Crew({ setBackgroundImage }: BackgroundImage) {
  useEffect(() => {
    setBackgroundImage("../assets/crew/background-crew-mobile.jpg");
  }, []);
  return <div>crew</div>;
}
