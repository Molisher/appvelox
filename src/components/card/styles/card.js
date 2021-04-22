import styled from "styled-components/macro";

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    padding: 0 40px;
  }
`;
export const Info = styled.div`
  padding: 20px 36px;
`;

export const Title = styled.h4`
  font-size: 28px;
`;
export const Subtitle = styled.p``;

export const Break = styled.div`
  height: 2px;
  background-color: #ebe7ff;
  margin: 10px 0 15px 0;
`;

export const List = styled.ul`
  list-style: none;
`;

export const ListItem = styled.li`
  margin-bottom: 7px;

  &:before {
    content: "•";
    color: #ebe7ff;
    padding-right: 11px;
  }
`;

export const Container = styled.div`
  max-width: 540px;
  min-height: 180px;
  box-shadow: 0px 0px 5px ${({ active }) => (active ? "#50CAFF" : "#ebe7ff")};
  border-radius: 5px;
  display: flex;
  margin: 0 15px 15px 0;
  background-color: white;

  ${({ active }) => {
    if (active) {
      return `${Break}, ${Icon}{
            background-color: #50CAFF;
        }
        ${Icon}{
            img{
                filter: brightness(0) saturate(100%);
                filter: brightness(1);

            }
        }

        ${ListItem}:before{
            color:  #50CAFF;
        }
        border: 2px solid #50CAFF; `;
    }
  }}
`;
