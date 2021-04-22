import React, { useContext } from "react";
import { RecordContext } from "../context/record";

import { Content, Doctor, Card } from "../components";

import { getDay } from "../helpers/getDay";

export default function HomeContainer() {
  const { records } = useContext(RecordContext);

  const RenderRecords = () => {
    const data = records.length > 2 ? records.slice(0, 2) : records;
    return data.map((record) => (
      <Doctor key={record.id}>
        <Doctor.Time>
          {getDay(record.date)} {record.date} | {record.time}
        </Doctor.Time>
        <Doctor.Hospital>{record.hospital}</Doctor.Hospital>
        <Doctor.HospitalAdress>{record.hospitalAdress}</Doctor.HospitalAdress>
        <Doctor.Wrapper>
          <Doctor.Person spec={record.specialty} img={record.doctorAvatar}>
            {record.doctorName}
          </Doctor.Person>
          <Doctor.Button id={record.id}>Отменить</Doctor.Button>
        </Doctor.Wrapper>
      </Doctor>
    ));
  };
  return (
    <Content>
      <Content.Box title="Записи на прием">
        {RenderRecords()}
        <Doctor.More length={records.length} />
      </Content.Box>
      <Content.Box title="Электронная карта">
        <Card active>
          <Card.Icon src="images/report.svg" />
          <Card.Info>
            <Card.Title>Информация о пациенте</Card.Title>
            <Card.Break />
            <Card.List>
              <Card.ListItem>Ваши личные данные</Card.ListItem>
              <Card.ListItem>Рекомендации врачей</Card.ListItem>
              <Card.ListItem>История болезний</Card.ListItem>
            </Card.List>
          </Card.Info>
        </Card>
        <Card>
          <Card.Icon src="images/analys.svg" />
          <Card.Info>
            <Card.Title>Результаты анализов</Card.Title>
            <Card.Break />
            <Card.Subtitle>
              Вы можете узнать здесь результаты своих анализов
            </Card.Subtitle>
          </Card.Info>
        </Card>
        <Card>
          <Card.Icon src="images/add.svg" />
          <Card.Info>
            <Card.Title>Добавить информацию</Card.Title>
            <Card.Break />
            <Card.Subtitle>
              Добавляйте в свою электронную медицинскую карту новые данные
            </Card.Subtitle>
          </Card.Info>
        </Card>
        <Card>
          <Card.Icon src="images/clock.svg" />
          <Card.Info>
            <Card.Title>История приемов</Card.Title>
            <Card.Break />
            <Card.Subtitle>
              Вся информация о полученных услугах за все время хранится здесь
            </Card.Subtitle>
          </Card.Info>
        </Card>
      </Content.Box>
    </Content>
  );
}
