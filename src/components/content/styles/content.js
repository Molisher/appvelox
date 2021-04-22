import styled from "styled-components/macro";

import { Link } from "react-router-dom";

export const Container = styled.div`
  padding: 15px 20px 0 20px;
  background-color: #fcfcfc;
`;

export const Box = styled.div`
  h3 {
    padding-left: 20px;
    margin-bottom: 15px;
  }
  margin-bottom: 35px;

  & > div {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
`;

export const BackwardLink = styled(Link)`
  color: black;
  text-decoration: none;
  padding-left: 20px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  width: 15%;

  &:before {
    content: url("images/back.svg");
    margin-right: 14px;
    height: 18px;
  }
`;

export const DoctorColumn = styled.div`
  height: 76vh;
  overflow-y: scroll;
  width: 45%;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background-color: #ebe7ff;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background: #003b72;
    border-radius: 5px;
  }
`;
export const Calendar = styled.div`
  padding: 0 40px;
  display: inline-block;
  width: 48%;
  height: 60%;

  .react-calendar {
    width: 100%;
    height: 100%;
    border: none;
  }

  .react-calendar__navigation {
    background: #7761ff;
    border-radius: 5px;
    margin: 0;
    & button {
      color: white;
      font-size: 0.875rem;
    }
  }
  .react-calendar__viewContainer {
    border-radius: 5px;
    padding: 10px 10px 40px 10px;
    background: #ebe7ff !important;
  }

  .react-calendar__navigation__arrow {
    font-size: 1.5rem !important;
  }
  .react-calendar__month-view__weekdays {
    font-weight: normal;
    abbr {
      text-decoration: none;
    }
  }

  .react-calendar__month-view__days__day--neighboringMonth {
    color: rgba(0, 0, 0, 0.25);
    background-color: #ebe7ff !important;
  }
  .react-calendar__month-view__days__day {
    background-color: white;
    font-size: 1rem;
    color: black;
  }

  .react-calendar__tile--active {
    background-color: #003b72 !important;
    color: white !important;
  }

  .react-calendar__tile {
    font-family: "Rubik", sans-serif;
    padding: 0;
    height: 63px;
    display: flex;
    flex-direction: column;
    padding: 10px 14px;
    justify-content: space-between;
    div {
      align-self: flex-end;
    }
    p {
      display: flex;
      justify-content: center;
      align-items: center;
      justify-self: flex-end;
      width: 22px;
      height: 22px;
      font-size: 0.875rem;
      background-color: #50caff;
      border-radius: 50%;
      color: white;
    }
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
