import React from "react";
import { Link } from "react-router-dom";

function MenuItems() {
  return (
    <>
      <li>Before and After</li>
      <li>Automotive</li>
      <a target="_blank" href="https://vascoestrelado.teachable.com/" rel="noreferrer">
        <li>Escola</li>
      </a>
      <li>Adobe</li>
      <Link to="/Profile">
        <li>Profile</li>
      </Link>
    </>
  );
}

export default MenuItems;
