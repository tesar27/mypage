// src/App.js
import Navbar from "./components/Navbar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import Education from "./components/Education.jsx";
import Services from "./components/Services.jsx";
import Pricing from "./components/Pricing.jsx";
import Footer from "./components/Footer.jsx";
import styled from "styled-components";
import GlobalStyle from "./globalStyles";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <MainContent>
        <HeroSection />
        <Education />
        <Services />
        <Pricing />
        <Footer />
      </MainContent>
    </>
  );
};

const MainContent = styled.div`
  margin-top: 60px; /* Adjust based on Navbar height */
`;

export default App;
