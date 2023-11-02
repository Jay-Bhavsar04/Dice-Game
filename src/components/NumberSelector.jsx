import styled from "styled-components";

const NumberSelector = ({Error, setError, SelectedNumber, setSelectedNumber}) => {

  const arrNumber = [1, 2, 3, 4, 5, 6];
  const numberSelectorHandler = (value)=>{
    setSelectedNumber(value);
    setError("");
  }
  return (
    <NumberSelectorContainer>
      <p className="error">{Error}</p>
      <div className="flex">
        {arrNumber.map((value) => {
          return (
            <Box
              isSelected={value === SelectedNumber}
              onClick={() => numberSelectorHandler(value)}
            >
              {value}
            </Box>
          );
        })}
      </div>
      <span>Select Number</span>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid #000;
  display: grid;
  place-items: center;
  font-weight: 700;
  font-size: 24px;
  cursor: pointer;
  background-color: ${(props) => (props.isSelected ? "#000 " : "#fff")};
  color: ${(props) => (!props.isSelected ? "#000 " : "#fff")};

  &:hover {
    border: 1px solid transparent;
    color: #fff;
    background-color: #000;
  }
`;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  .flex{
    display: flex;
    gap: 24px;
  }

  span{
    font-size: 24px;
    font-weight: 700;
    line-height: 36px;
  }

  p{
    color: red;
    font-size: 16px;
    font-weight: 600;
    margin-bottom:10px;
  }
`;
