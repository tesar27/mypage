// src/components/Services.js
import React from "react";
import styled from "styled-components";

const Services = () => {
  return (
    <Section id="services">
      <Column>
        <Heading>Software Development</Heading>
      </Column>
      <Column>
        <Heading>Tech Lead / Coach</Heading>
      </Column>
      <Column>
        <Heading>Personal Attache</Heading>
      </Column>
    </Section>
  );
};

const Section = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 50px;
  background-color: #e0e0e0;
`;

const Column = styled.div`
  flex: 1;
  margin: 0 20px;
`;

const Heading = styled.h2`
  font-size: 2em;
  margin-bottom: 20px;
`;

export default Services;
