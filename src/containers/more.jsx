import React, { useContext, useState } from "react";
import { Content, Doctor } from "../components";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import { getDay } from "../helpers/getDay";

import { RecordContext } from "../context/record";

export default function MoreContainer() {
  const { records } = useContext(RecordContext);
  const [clickedDay, setClickedDay] = useState();

  const allDates = records && records.map((record) => record.date);
  const reducedDates = allDates.reduce(function (acc, i) {
    acc[i] = (acc[i] || 0) + 1;
    return acc;
  }, {});

  const clickOnDay = () => {
    if (clickedDay) {
      const tempArr = records.filter((record) => {
        let splittedDate = record.date.split(".");
        return +new Date(
          splittedDate[2],
          splittedDate[1] - 1,
          splittedDate[0]
        ) === +clickedDay
          ? record
          : null;
      });
      return tempArr;
    }
    return records;
  };
  return (
    <Content>
      <Content.Box title="Мои записи" nested>
        <Content.Wrapper>
          <Content.DoctorColumn>
            {clickOnDay().map((record) => (
              <Doctor key={record.id}>
                <Doctor.Time>
                  {getDay(record.date)} {record.date} | {record.time}
                </Doctor.Time>
                <Doctor.Hospital>{record.hospital}</Doctor.Hospital>
                <Doctor.HospitalAdress>
                  {record.hospitalAdress}
                </Doctor.HospitalAdress>
                <Doctor.Wrapper>
                  <Doctor.Person
                    spec={record.specialty}
                    img={record.doctorAvatar}
                  >
                    {record.doctorName}
                  </Doctor.Person>
                  <Doctor.Button id={record.id}>Отменить</Doctor.Button>
                </Doctor.Wrapper>
              </Doctor>
            ))}
          </Content.DoctorColumn>
          <Content.Calendar>
            <Calendar
              onClickDay={(value) => setClickedDay(value)}
              tileContent={({ activeStartDate, date, view }) => {
                for (let dateRecord in reducedDates) {
                  let splittedDateRecord = dateRecord.split(".");
                  if (
                    +new Date(
                      splittedDateRecord[2],
                      splittedDateRecord[1] - 1,
                      splittedDateRecord[0]
                    ) === +date
                  ) {
                    return (
                      <div>
                        <p>{reducedDates[dateRecord]}</p>
                      </div>
                    );
                  }
                }
              }}
            />
          </Content.Calendar>
        </Content.Wrapper>
      </Content.Box>
    </Content>
  );
}
