import React from "react";
import {
  SidebarContainer,
  HeaderContainer,
  NotFoundContainer,
} from "../containers";

export default function NotFoundPage() {
  return (
    <div style={{ display: "flex" }}>
      <SidebarContainer />
      <div
        style={{ flexDirection: "column", width: "100%", marginLeft: "14%" }}
      >
        <HeaderContainer />
        <NotFoundContainer />
      </div>
    </div>
  );
}
