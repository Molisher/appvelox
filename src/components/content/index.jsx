import React from "react";

import {
  Container,
  Box,
  BackwardLink,
  DoctorColumn,
  Calendar,
  Wrapper,
} from "./styles/content";

export default function Content({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Content.Box = function ContentBox({ title, nested, children, ...restProps }) {
  return (
    <Box {...restProps}>
      {nested ? (
        <BackwardLink to="/home">{title}</BackwardLink>
      ) : (
        <h3>{title}</h3>
      )}

      <div>{children}</div>
    </Box>
  );
};

Content.DoctorColumn = function ContentDoctor({ children, ...restProps }) {
  return <DoctorColumn {...restProps}>{children}</DoctorColumn>;
};
Content.Calendar = function ContentCalendar({ children, ...restProps }) {
  return <Calendar {...restProps}>{children}</Calendar>;
};

Content.Wrapper = function ContentWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};
