import styled from "styled-components";

export const Container = styled.main`
  background-color: #dcdcdc;
  width: 70%;
  height: 100%;
  margin: 70px 15%;
  border-radius: 0.5rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    background-color: #696969;
    border-radius: 0.25rem 0.25rem 0 0;
  }

  .card-container {
    display: grid;
    grid-template-columns: 200px repeat(auto-fill, 200px) 200px;
    gap: 10px;
    margin-top: 40px;
    margin-bottom: 40px;
  }

  span {
    font-size: 18px;
    margin-left: 45%;
    margin-top: 100px;
  }
`;
