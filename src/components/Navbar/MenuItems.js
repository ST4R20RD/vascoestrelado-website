import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

function MenuItems() {
  return (
    <>
      <li>Before and After</li>
      <li>Automotive</li>
      <a
        target="_blank"
        href="https://vascoestrelado.teachable.com/"
        rel="noreferrer"
      >
        <li>Escola</li>
      </a>
      <li>Adobe</li>
      <LinkElem to="/Profile">
        <li>Profile</li>
      </LinkElem>
    </>
  );
}

const LinkElem = styled(NavLink)`
  &.active {
    li {
      color: #ffbd2e;
      border-bottom: 1px solid white;
    }
  }
`;

export default MenuItems;
