import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-color: #d3d3d3;

  img {
    height: 100px;
    width: 100px;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  h4,
  p,
  h5 {
    text-transform: capitalize;
    margin-left: 10px;
  }
`;
