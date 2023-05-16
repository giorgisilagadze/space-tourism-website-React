import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
import Planet from "./pages/Planet";
import CrewMember from "./pages/CrewMember";
import Vehicle from "./pages/Vehicle";
import { Helmet } from "react-helmet";
import { GlobalStyled } from "./styled-components/Global.Styled";

function App() {

  return (
    <>
    <Helmet>
    <link href="https://fonts.googleapis.com/css2?family=Barlow&family=Barlow+Condensed:wght@400;700&family=Bellefair&display=swap" rel="stylesheet" />
    <title>Space-tourism-website</title>
    </Helmet>
    <GlobalStyled />
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Destination" element={<Destination />}/>
        <Route path="/Destination/:planet" element={<Planet />}/>
        <Route path="/Crew" element={<Crew />}/>
        <Route path="/Crew/:member" element={<CrewMember />}/>
        <Route path="/Technology" element={<Technology />}/>
        <Route path="/Technology/:vehicle" element={<Vehicle />}/>
      </Routes>
    </Router>
      
    </>
  )
}

export default App;
