import React from "react";
import { Sidebar } from "../components";

export default function SidebarContainer() {
  return (
    <Sidebar>
      <Sidebar.Wrapper>
        <Sidebar.Logo>Логотип</Sidebar.Logo>
        <Sidebar.Link icon="images/heart.svg" to="/home">
          Профиль
        </Sidebar.Link>
        <Sidebar.Link icon="images/doctors.svg" to="/doctors">
          Врачи и клиники
        </Sidebar.Link>
        <Sidebar.Link icon="images/speak.svg" to="/messages">
          Сообщения{" "}
        </Sidebar.Link>
        <Sidebar.Link icon="images/test.svg" to="/test">
          Тестирование
        </Sidebar.Link>
        <Sidebar.Link icon="images/book.svg" to="/useful">
          Полезно знать
        </Sidebar.Link>
        <Sidebar.Button>Подать заявку</Sidebar.Button>
      </Sidebar.Wrapper>
      <Sidebar.Footer>
        <Sidebar.FooterLink icon="images/help.svg" to="/help">
          Помощь
        </Sidebar.FooterLink>
      </Sidebar.Footer>
    </Sidebar>
  );
}
