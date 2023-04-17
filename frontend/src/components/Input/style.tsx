import styled from "styled-components";
import { Input } from "@chakra-ui/react";

interface InputProps {
  width: string;
}

export const InputStyled = styled(Input)<InputProps>`
  width: ${(props) => props.width};
  padding: 0.6rem;
  background-color: #ffffff;
  color: #0B0D0D;
  border: 0.12rem solid #E9ECEF;
  border-radius: 0.2rem;
  margin-bottom: 20px;

  font-size: 14px;
  font-family: "Inter";

  &:hover {
    background-color: #F1F3F5;
    border: 0.1rem solid #F1F3F5;
  }

  &:focus {
    outline: 0.1rem solid #5126ea;
  }
`;

export const StyledDiv = styled.div<InputProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.5rem;

  .label--input,
  .label--error {
    width: ${(props) => props.width};
    justify-content: flex-start;
    margin: 0 auto;
  }

  div {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  div > label > p {
    font-size: 0.875rem;
  }

  .label--error > label > p {
    font-size: 0.875rem;
    color: #CD2B31;
    font-style: italic;
  }
`;
