import React from "react";
import { Nav, NavLink, NavIcon, Bars } from "./NavbarElements";

export default function Navbar({ toggle }) {
  return (
    <>
      <Nav>
        <NavLink to="/">Burgerland</NavLink>
        <NavIcon onClick={toggle}>
          <p>Menu</p>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
}
