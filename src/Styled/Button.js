import styled from "styled-components";

export const Button = styled.button`
  background-color: #000;
  color: #fff;
  padding: 10px 18px;
  border-radius: 5px;
  min-width: 220px;
  cursor: pointer;
  border: none;
  font-size: 16px;
  border: 1px solid transparent;

  &:hover {
    background-color: #fff;
    color: #000;
    border: 1px solid #000;
  }
`;

export const OutlineButton = styled(Button)`
  background-color: #fff;
  border: 1px solid #000;
  color: #000;
  &:hover {
    background-color: #000;
    color: #fff;
    border: 1px solid transparent;
  }
`;
