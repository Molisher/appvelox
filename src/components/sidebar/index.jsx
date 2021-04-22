import React from "react";

import { Link as BrowserrouterLink } from "react-router-dom";

import {
  Container,
  Wrapper,
  Link,
  Logo,
  Button,
  Footer,
  FooterLink,
} from "./styles/sidebar";

export default function Sidebar({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Sidebar.Wrapper = function SidebarWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

Sidebar.Link = function SidebarLink({ icon, to, children, ...restProps }) {
  return (
    <Link {...restProps} activeClassName="active" to={to}>
      <img src={icon} alt={children} />
      <p>{children}</p>
    </Link>
  );
};

Sidebar.Logo = function SidebarLogo({ children, ...restProps }) {
  return (
    <Logo {...restProps}>
      <BrowserrouterLink to="/home">{children}</BrowserrouterLink>
    </Logo>
  );
};

Sidebar.Button = function SidebarButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};

Sidebar.Footer = function SidebarFooter({ children, ...restProps }) {
  return (
    <Footer {...restProps}>
      {children}
      <img src="images/logo.svg" alt="AppVelox" />
    </Footer>
  );
};

Sidebar.FooterLink = function SidebarFooterLink({
  to,
  icon,
  children,
  ...restProps
}) {
  return (
    <FooterLink {...restProps} to={to}>
      <img src={icon} alt={children} />
      <p>{children}</p>
    </FooterLink>
  );
};
