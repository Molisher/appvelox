import styled from "styled-components/macro";

export const Container = styled.div`
  padding: 20px;
  box-shadow: 0px 0px 5px #ebe7ff;
  border-radius: 5px;
  max-width: 475px;
  background-color: white;
  margin-right: 20px;
  min-width: 450px;
`;

export const Time = styled.p`
  font-weight: 500;
  margin-bottom: 5px;
`;

export const Hospital = styled.div``;
export const Adress = styled.div``;
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;
export const Person = styled.div`
  display: flex;
  align-items: center;
  img {
    margin-right: 10px;
  }
  p {
    font-size: 0.875rem;
    font-weight: 500;
  }
  small {
    font-size: 0.875rem;
    color: #ebe7ff;
  }
`;
export const Button = styled.button`
  padding: 12px 15px;
  color: white;
  background-color: #7761ff;
  border-radius: 5px;
  max-height: 40px;
  align-self: flex-end;
  cursor: pointer;
`;

export const More = styled.div`
  font-size: 0.875rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
