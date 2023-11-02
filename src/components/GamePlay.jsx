import React, { useState } from "react";
import styled from "styled-components";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import { Button, OutlineButton } from "../Styled/Button";
import Rules from "./Rules";

const GamePlay = () => {
  const [Score, setScore] = useState(0);
  const [SelectedNumber, setSelectedNumber] = useState();
  const [CurrentDice, setCurrentDice] = useState(1);
  const [Error, setError] = useState("");
  const [ShowRules, setShowRules] = useState(false);

  const GenerateRandomNumber = (num) => {
    return Math.floor(Math.random() * num + 1);
  };

  const rollDice = () => {
    if (!SelectedNumber) {
      setError("You have not selected any number");
      return;
    }
    setError("");
    const RandomNumber = GenerateRandomNumber(6);
    setCurrentDice((prev) => RandomNumber);

    if (SelectedNumber === RandomNumber) {
      setScore((prev) => prev + 10);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectedNumber(undefined);
  };

  const resetScore = () => {
    return setScore(0);
  };

  const RulesToggle =()=>{
    setShowRules((prev)=> !prev)
  }

  return (
    <Main>
      <div className="top_section">
        <TotalScore Score={Score} setScore={setScore} />
        <NumberSelector
          Error={Error}
          setError={setError}
          SelectedNumber={SelectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RollDice CurrentDice={CurrentDice} rollDice={rollDice} />
      <div className="btns">
        <OutlineButton onClick={resetScore}>Reset Scrore</OutlineButton>
        <Button onClick={RulesToggle}>{ShowRules ? "Hide" : "Show"} Rules</Button>
      </div>
      {ShowRules && <Rules />}
    </Main>
  );
};

export default GamePlay;

const Main = styled.main`
  max-width: 1180px;
  margin: 10px auto 0;
  .top_section {
    display: flex;
    align-items: end;
    justify-content: space-between;
  }

  .btns {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-top: 40px;
  }
`;
