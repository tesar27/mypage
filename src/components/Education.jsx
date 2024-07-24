// src/components/Education.js
import React from "react";
import styled from "styled-components";

const Education = () => {
  return (
    <Section>
      <Column>
        <Heading>Education</Heading>
        <Item>MSc in Computer Science</Item>
      </Column>
      <Column>
        <Heading>Languages</Heading>
        <Item>English</Item>
        <Item>Russian</Item>
        <Item>German</Item>
        <Item>Kazakh</Item>
      </Column>
      <Column>
        <Heading>Skills</Heading>
        <Item>Javascript</Item>
        <Item>Python</Item>
        <Item>React</Item>
        <Item>Expressjs</Item>
        <Item>MongoDB</Item>
        <Item>GithubActions CI/CD</Item>
        <Item>Adding some skills like Docker, Kubernetes</Item>
      </Column>
    </Section>
  );
};

const Section = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 50px;
  background-color: #f0f0f0;
`;

const Column = styled.div`
  flex: 1;
  margin: 0 20px;
`;

const Heading = styled.h2`
  font-size: 2em;
  margin-bottom: 20px;
`;

const Item = styled.p`
  font-size: 1.2em;
`;

export default Education;
