import React from "react";
import styled from "styled-components";
import { Button } from "../Styled/Button";

const StartGame = ({toggle}) => {
  return (
    <Container>
      <div>
        <img src="./images/dices.png" alt="Dices" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px auto;

  .content{
    display: flex;
    flex-direction: column;
    align-items: end;
  }
  .content h1 {
    font-size: 96px;
    white-space: nowrap;
  }

  .content Button{
    max-width: 220px;
  }
`;