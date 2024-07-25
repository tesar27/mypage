// src/components/HeroSection.js
import React from "react";
import styled from "styled-components";
// import profilePic from "../path_to_your_image.jpg";

const HeroSection = () => {
  return (
    <Hero>
      <HeroLeft>
        <Title>I'M YERBOLAT!</Title>
        <Description>MERN Stack Developer</Description>
      </HeroLeft>
      <HeroRight>
        {/* <ProfileImage src={profilePic} alt="My Picture" /> */}
      </HeroRight>
    </Hero>
  );
};

const Hero = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 100px;
  background-color: #1d1d2d;
  color: white;
`;

const HeroLeft = styled.div`
  flex: 1;
`;

const HeroRight = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 3em;
  margin: 0;
`;

const Description = styled.p`
  font-size: 1.5em;
`;

const ProfileImage = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
`;

export default HeroSection;
