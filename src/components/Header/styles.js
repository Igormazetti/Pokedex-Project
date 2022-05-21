import styled from "styled-components";

export const Container = styled.header`
  background-color: #232c36;
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;

  div {
    display: flex;

    button {
      background-color: transparent;
      margin-left: -37px;
      border: none;
      width: 30px;
      height: 30px;
    }

    button:hover {
      cursor: pointer;
    }

    img {
      width: 30px;
      height: 30px;
    }
  }

  input {
    font-size: 1rem;
    border: 0;
    padding: 0 1rem;
    border-radius: 0.25rem;
    height: 2rem;
    margin-left: 1rem;
  }
`;
