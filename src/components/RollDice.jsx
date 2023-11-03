import styled from "styled-components";

const RollDice = ({rollDice, CurrentDice}) => {

   
  return (
    <DiceContainer>
      <div
      className="dice" 
      onClick={rollDice}>
        <img src={`./public/images/dice_${CurrentDice}.png`} alt="Dice-1" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

export default RollDice;

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  align-items: center;
  flex-direction: column;

  .dice{
    cursor: pointer;
  }

  img{
    height: 250px;
  }

  p{
    font-size: 24px;
  }
`;
