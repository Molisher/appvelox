import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { RecordContext } from "../../context/record";
import {
  Container,
  Time,
  Hospital,
  Adress,
  Wrapper,
  Button,
  Person,
  More,
} from "./styles/doctor";

export default function Doctor({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Doctor.Time = function DoctorTime({ children, ...restProps }) {
  return <Time {...restProps}>{children}</Time>;
};

Doctor.Hospital = function DoctorHospital({ children, ...restProps }) {
  return <Hospital {...restProps}>{children}</Hospital>;
};

Doctor.HospitalAdress = function DoctorHospitalAdress({
  children,
  ...restProps
}) {
  return <Adress {...restProps}>{children}</Adress>;
};

Doctor.Wrapper = function DoctorWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

Doctor.Person = function DoctorPerson({ spec, img, children, ...restProps }) {
  return (
    <Person {...restProps}>
      <img src={img} alt={children} />
      <div>
        <p>{children}</p>
        <small>{spec}</small>
      </div>
    </Person>
  );
};

Doctor.Button = function DoctorButton({ id, children, ...restProps }) {
  const { deleteRecords } = useContext(RecordContext);
  return (
    <Button onClick={() => deleteRecords(id)} {...restProps}>
      {children}
    </Button>
  );
};

Doctor.More = function DoctorMore({ length, children, ...restProps }) {
  const remain = length > 2 ? length - 2 : null;
  return (
    <More {...restProps}>
      {remain && <p>Ещё {remain} записи</p>}
      <Link to="/home/more">Подробнее</Link>
    </More>
  );
};
