import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
import { Helmet } from "react-helmet";
import { GlobalStyled } from "./styled-components/Global.Styled";
import Header from "./components/Header";
import { useState } from "react";

export const backgroundImages: { [key: string]: string } = {
  path: "./assets/home/background-home-mobile.jpg",
  pathDestination: "./assets/destination/background-destination-mobile.jpg",
  pathCrew: "./assets/crew/background-crew-mobile.jpg",
  pathTechnology: "./assets/technology/background-technology-mobile.jpg",
};

function App() {
  const [backgroundImage, setBackgroundImage] = useState<string>("");

  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow&family=Barlow+Condensed:wght@400;700&family=Bellefair&display=swap"
          rel="stylesheet"
        />
        <title>Space-tourism-website</title>
      </Helmet>
      <GlobalStyled backgroundImage={backgroundImage} />
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Home setBackgroundImage={setBackgroundImage} />}
          />
          <Route
            path="/Destination/:planet"
            element={<Destination setBackgroundImage={setBackgroundImage} />}
          />
          <Route
            path="/Crew/:member"
            element={<Crew setBackgroundImage={setBackgroundImage} />}
          />
          <Route
            path="/Technology/:vehicle"
            element={<Technology setBackgroundImage={setBackgroundImage} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
