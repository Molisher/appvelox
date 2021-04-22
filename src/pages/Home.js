import React from "react";
import { Route } from "react-router-dom";
import {
  SidebarContainer,
  HeaderContainer,
  HomeContainer,
  MoreContainer,
} from "../containers";

export default function Home() {
  return (
    <div style={{ display: "flex" }}>
      <SidebarContainer />
      <div
        style={{ flexDirection: "column", width: "100%", marginLeft: "14%" }}
      >
        <HeaderContainer title="Мой профиль" />
        <Route exact path={["/", "/home"]} component={HomeContainer} />
        <Route exact path="/home/more" component={MoreContainer} />
      </div>
    </div>
  );
}
