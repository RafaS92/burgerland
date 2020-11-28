import React from "react";
import {
  SidebarLink,
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";

const Sidebar = ({ toggle, isOpen }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>

      <SidebarMenu>
        <SidebarLink href="#burgers">Burgers</SidebarLink>
        <SidebarLink href="#special">Daily Special</SidebarLink>
        <SidebarLink href="#contact">Contact</SidebarLink>
      </SidebarMenu>

      <SideBtnWrap>
        <SidebarRoute to="/">Order Now</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
