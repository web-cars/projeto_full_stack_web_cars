import { device } from './../../Global/media';
import styled from "styled-components";

export const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  gap: 1.2rem;
  border-radius: 8px;
  font-family: "Inter";

  .title--signIn,
  .subTitle {
    width: 85%;
    display: flex;
  }

  .choose-user {
    display: flex;
    width: 85%;
    flex-direction: column;
    gap: 1rem;

    margin-top: 1rem;
    cursor: pointer;



    .buttons {
      display: flex;
      gap: 1rem;
      height: 48px;

      @media ${device.mobile} {
      flex-direction: column;
      height: 98px;
      gap: 1rem;
    }

      .notSelected {
        background-color: #ffffff;

        color: #0B0D0D;
        font-size: 16px;
        font-weight: 600;
        font-family: "Inter";

        border: 0.14rem solid #CED4DA;
        border-radius: 4px;

        width: 100%;
        height: 48px;

        &:hover {
          background-color: #4529e6;
          color: #ffffff;
          border: none;
        }
      }

      .selected {
        background-color: #4529e6;

        color: #ffffff;
        font-size: 16px;
        font-weight: 600;
        font-family: "Inter";

        border: none;
        border-radius: 4px;

        width: 100%;
        height: 48px;

        &:hover {
          background-color: #b0a6f0;
          color: #ffffff;
          border: none;
        }
      }
    }

    p {
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
    }
  }

  input,
  .label--input,
  .label--error {
    width: 85%;
    margin-bottom: 0;
  }

  input {
    color: #30007D;
  }

  h1 {
    font-size: 1.5rem;
    padding: 1rem 0rem;
    font-family: "Lexend", sans-serif;
    background-color: #FDFDFD;
  }

  h2 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    text-align: left;
    margin-bottom: 15px;
  }

  .button--box {
    display: flex;
    justify-content: center;
    margin-bottom: 24px;
    cursor: pointer;

    .label--error {
      font-size: 0.875rem;
      color: #CD2B31;
      font-style: italic;
    }
  }

  .button--box > button {
    height: 48px;
  }

  .text--register {
    color: #495057;
    font-size: 0.875rem;
    padding: 0.5rem 0rem;
  }

  .description {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    width: 85%;
    label {
      font-size: 0.875rem;
      font-weight: 400;
      color: #212529;
    }

    textarea {
      border: 0.12rem solid #E9ECEF;
      resize: none;
      font-family: "Inter";
      font-size: 16px;
      padding: 0.6rem;
      height: 5rem;

      &:hover {
        background-color: #F1F3F5;
        border: 0.1rem solid #F1F3F5;
      }

      &:focus {
        outline: 0.1rem solid #5126ea;
      }

      &::placeholder {
        font-size: 14px;
        font-family: "Inter";
        font-weight: 400;
        color: #868e96;
      }
    }

    .label--error > label > p {
      font-size: 0.875rem;
      color: #CD2B31;
      font-style: italic;
    }
  }
`;