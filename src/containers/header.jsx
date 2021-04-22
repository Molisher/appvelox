import React from "react";
import { Header } from "../components";

export default function HeaderContainer({ title }) {
  return (
    <Header>
      <Header.Title>{title}</Header.Title>
      <Header.Profile>123</Header.Profile>
    </Header>
  );
}
