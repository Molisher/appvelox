import React from "react";
import { Container } from "./styles/404";

export default function NotFound({ children, restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
