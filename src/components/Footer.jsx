// src/components/Footer.js
import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterSection>
      <FooterContent>
        <p>&copy; 2023 Your Name. All rights reserved.</p>
        <FooterLinks>
          <FooterLink href="#bio">BIO</FooterLink>
          <FooterLink href="#portfolio">Portfolio</FooterLink>
          <FooterLink href="#services">Services</FooterLink>
          <FooterLink href="#blog">Blog</FooterLink>
        </FooterLinks>
      </FooterContent>
    </FooterSection>
  );
};

const FooterSection = styled.footer`
  padding: 20px;
  background-color: #1d1d2d;
  color: white;
  text-align: center;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterLinks = styled.div`
  margin-top: 10px;
`;

const FooterLink = styled.a`
  color: white;
  margin: 0 10px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default Footer;
