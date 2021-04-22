import styled from "styled-components/macro";

export const Container = styled.header`
  width: 100%;
  height: 59px;
  background-color: #50caff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
`;

export const Title = styled.h2`
  font-size: 28px;
  color: white;
`;

export const Profile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    cursor: pointer;
  }
  img:not(:nth-last-child(-n + 2)) {
    margin-right: 20px;
  }

  img:nth-child(4) {
    margin-right: 9px;
    padding: 1px;
    border: 1px solid #ffffff;
    border-radius: 50%;
  }
`;
