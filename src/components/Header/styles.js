import styled from "styled-components";

export const Container = styled.header`
  background-color: #ff0000;
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: black;

  h2 {
    margin-top: 20px;
  }

  > div {
    position: relative;

    button {
      z-index: 2;
    }
  }

  #poke-image {
    width: 100px;
    height: 100px;
    margin-right: 20px;
  }

  .animate {
    position: absolute;
    animation: fadein 0.4s ease-in-out forwards;
  }

  .getback {
    position: absolute;
    animation: fadeout 0.4s ease-in-out forwards;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    button {
      z-index: 2;
      background-color: transparent;
      border: none;
    }

    #searchbtn {
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

  @keyframes fadein {
    0% {
      left: 0;
      opacity: 0;
    }
    100% {
      left: 115px;
      opacity: 1;
    }
  }

  @keyframes fadeout {
    0% {
      left: 115px;
      opacity: 1;
    }
    100% {
      left: 0;
      opacity: 0;
    }
  }
`;
