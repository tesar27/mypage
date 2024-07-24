// src/components/Pricing.js
import React from "react";
import styled from "styled-components";

const Pricing = () => {
  return (
    <Section>
      <Column>
        <Heading>Basic</Heading>
        <Price>100 Euro/hour</Price>
        <Description>Software Development</Description>
      </Column>
      <Column>
        <Heading>Medium</Heading>
        <Price>300 Euro/hour</Price>
        <Description>
          Software Development with Tech Leading/Engineering Managing/Coaching
        </Description>
      </Column>
      <Column>
        <Heading>Premium</Heading>
        <Price>Contact for Pricing</Price>
        <Description>Attache, Travelling</Description>
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
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 2em;
  margin-bottom: 20px;
`;

const Price = styled.p`
  font-size: 1.5em;
  margin: 10px 0;
`;

const Description = styled.p`
  font-size: 1.2em;
`;

export default Pricing;
