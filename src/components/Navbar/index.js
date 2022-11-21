import React from "react";
import styled from "styled-components";

export function Navbar() {
  return (
    <Container>
      <Logo src="./images/vascoLogo.png" alt="logo" />
      <Menu>
        <li>Before and After</li>
        <li>Automotive</li>
        <li>Escola</li>
        <li>Adobe</li>
        <li>Profile</li>
        <li>Contact</li>
      </Menu>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  margin-bottom: 20px;
`;

const Logo = styled.img`
  width: 250px;
  padding: 20px;
`;

const Menu = styled.ul`
  color: white;
  text-transform: uppercase;
  flex-wrap: wrap;
  list-style: none;
  display: flex;
  li {
    padding: 2px;
    margin: 10px;
    cursor: pointer;
    :hover {
      color: #ffbd2e;
      border-bottom: 1px solid white;
    }
  }
`;
