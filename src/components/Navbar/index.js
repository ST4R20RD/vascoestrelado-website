import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export function Navbar({ position }) {
  return (
    <Container position={position}>
      <Link to="/">
        <Logo src="./images/vascoLogo.png" alt="logo" />
      </Link>
      <Menu>
        <li>Before and After</li>
        <li>Automotive</li>
        <li>Escola</li>
        <li>Adobe</li>
        <Link to="/Profile">
          <li>Profile</li>
        </Link>
        <li>Contact</li>
      </Menu>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  margin-bottom: 20px;
  ${({ position }) => {
    if (position === "bottom") {
      return `
      position: fixed;
      bottom: 0;
      `;
    } else if (position === "top") {
      return `
      top: 0;
      `;
    }
  }}
`;

const Logo = styled.img`
  width: 250px;
  padding: 20px;
`;

const Menu = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  color: white;
  text-transform: uppercase;
  list-style: none;
  li {
    padding: 2px;
    margin: 10px;
    cursor: pointer;
    :hover {
      color: #ffbd2e;
      border-bottom: 1px solid white;
    }
  }

  a {
    text-decoration: none;
    color: white;
  }
`;
