import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsFacebook, BsYoutube } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";

export function Navbar({ position }) {
  return (
    <Container position={position}>
      <MenuWrapper>
        <Link to="/">
          <Logo src="./images/vascoLogo.png" alt="logo" />
        </Link>
        <Menu>
          <li>Before and After</li>
          <li>Automotive</li>
          <a target="_blank" href="https://vascoestrelado.teachable.com/" rel="noreferrer">
            <li>Escola</li>
          </a>
          <li>Adobe</li>
          <Link to="/Profile">
            <li>Profile</li>
          </Link>
          <li>Contact</li>
        </Menu>
      </MenuWrapper>
      <Socials>
        <a
          target="_blank"
          href="https://www.facebook.com/vascoestrelado.photographer"
          rel="noreferrer"
        >
          <BsFacebook />
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/vasco_estrelado_photographer/"
          rel="noreferrer"
        >
          <RiInstagramFill />
        </a>
        <a target="_blank" href="https://www.youtube.com/@VascoEstrelado" rel="noreferrer">
          <BsYoutube />
        </a>
      </Socials>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.6);
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

const MenuWrapper = styled.div`
  display: flex;
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

const Socials = styled.div`
  font-size: 30px;
  a {
    color: #ffbd2e;
    padding: 10px;
  }
  margin-right: 20px;
`;
