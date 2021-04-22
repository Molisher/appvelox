import React from "react";

import { Container, Title, Profile } from "./styles/header";

export default function Header({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Header.Title = function HeaderTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Header.Profile = function HeaderWrapper({ children, ...restProps }) {
  return (
    <Profile {...restProps}>
      <img src="images/search.svg" alt="Search" />
      <img src="images/bell.svg" alt="Notification" />
      <img src="images/eye.svg" alt="Visually impaired" />
      <img src="images/Avatar.png" alt="Profile" />
      <img src="images/dropdown.svg" alt="Dropdown menu" />
    </Profile>
  );
};
