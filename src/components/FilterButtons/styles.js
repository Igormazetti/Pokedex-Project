import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
  height: 100px;
  margin-left: 15%;
  margin-right: 15%;
  margin-bottom: -70px;
  border-radius: 0.5rem;

  button {
    width: 100px;
    height: 30px;
    background-color: #696969;
    color: #fff;
    border: none;
    font-size: 1rem;

    &:hover {
      cursor: pointer;
    }
  }
`;
