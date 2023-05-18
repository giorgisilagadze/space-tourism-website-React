import { useEffect } from "react";

interface BackgroundImage {
  setBackgroundImage: (backgroundImage: string) => void;
}

export default function Home({ setBackgroundImage }: BackgroundImage) {
  useEffect(() => {
    setBackgroundImage("./assets/technology/background-technology-mobile.jpg");
  }, []);
  return <div>tech</div>;
}
