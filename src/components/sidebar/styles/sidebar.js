import styled from "styled-components/macro";

import {
  NavLink as BrowserRouterNavLink,
  Link as BrowserRouterLink,
} from "react-router-dom";

export const Container = styled.div`
  position: fixed;
  width: 14%;
  background-color: #003b72;
  height: 100vh;
  color: white;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Wrapper = styled.div``;

export const Link = styled(BrowserRouterNavLink)`
  padding: 14px 20px;
  font-size: 0.875rem;
  display: flex;
  color: white;
  text-decoration: none;
  position: relative;
  margin-bottom: 10px;

  img {
    margin-right: 14px;
  }

  &.active {
    p {
      color: #7761ff;
    }
    background-color: #fcfcfc;

    img {
      filter: invert(39%) sepia(77%) saturate(2841%) hue-rotate(230deg)
        brightness(100%) contrast(102%);
    }
  }
  &.active:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 3px;
    height: 100%;
    background-color: #7761ff;
  }
`;

export const Logo = styled.div`
  margin-bottom: 20px;
  padding-left: 20px;
  cursor: pointer;
  a {
    color: white;
    text-decoration: none;
  }
`;

export const Button = styled.button`
  padding: 12px 25px;
  color: white;
  font-size: 0.875rem;
  background-color: #7761ff;
  font-weight: 500;
  border-radius: 5px;
  margin-left: 20px;
  cursor: pointer;
`;

export const Footer = styled.footer`
  img {
    padding-left: 20px;
  }
`;
export const FooterLink = styled(BrowserRouterLink)`
  padding: 14px 0;
  font-size: 0.875rem;
  display: flex;
  color: white;
  text-decoration: none;
  position: relative;
  margin-bottom: 10px;

  img {
    margin-right: 14px;
  }
`;
