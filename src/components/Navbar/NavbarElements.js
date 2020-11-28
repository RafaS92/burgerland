import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaHamburger } from "react-icons/fa";

export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  align-items: center;
`;

export const NavLink = styled(Link)`
  color: white;
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  padding: 20px;
  @media screen and(max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
  }
`;

export const NavIcon = styled.div`
  display: flex;
  cursor: pointer;
  position: relative;
  margin-right: 5px;

  p {
    transform: traslate(-175%, 100%);
    font-weight: bold;
    color: white;
    position: relative;
    right: 15px;
  }
`;

export const Bars = styled(FaHamburger)`
  font-size: 2rem;
  transform: traslate(-50%, -15%);
  color: white;
`;
