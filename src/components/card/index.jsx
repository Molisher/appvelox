import React from "react";
import {
  Container,
  Icon,
  Info,
  Title,
  Subtitle,
  Break,
  List,
  ListItem,
} from "./styles/card";

export default function Card({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Card.Icon = function CardIcon({ src, ...restProps }) {
  return (
    <Icon {...restProps}>
      <img src={src} alt="Analys block" />
    </Icon>
  );
};

Card.Info = function CardInfo({ children, ...restProps }) {
  return <Info {...restProps}>{children}</Info>;
};

Card.Title = function CardTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Card.Subtitle = function CardSubtitle({ children, ...restProps }) {
  return <Subtitle {...restProps}>{children}</Subtitle>;
};

Card.Break = function CardBreak({ children, ...restProps }) {
  return <Break {...restProps} />;
};

Card.List = function CardList({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>;
};

Card.ListItem = function CardListItem({ children, ...restProps }) {
  return <ListItem {...restProps}>{children}</ListItem>;
};
