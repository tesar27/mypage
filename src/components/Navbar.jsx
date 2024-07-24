// src/components/Navbar.js
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Nav scroll={scroll}>
      <NavLinks>
        <NavLink href="#bio">BIO</NavLink>
        <NavLink href="#portfolio">Portfolio</NavLink>
        <NavLink href="#services">Services</NavLink>
        <NavLink href="#blog">Blog</NavLink>
      </NavLinks>
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background-color: ${({ scroll }) => (scroll ? "white" : "#1D1D2D")};
  color: ${({ scroll }) => (scroll ? "#1D1D2D" : "white")};
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  transition: all 0.3s ease-in-out;
`;

const NavLinks = styled.div`
  display: flex;
`;

const NavLink = styled.a`
  margin: 0 10px;
  color: inherit;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    text-decoration: underline;
  }
`;

export default Navbar;
