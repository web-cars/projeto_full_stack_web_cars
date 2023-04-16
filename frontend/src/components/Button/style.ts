import styled, { css } from "styled-components";
import { device } from "../../Global/media";

interface ButtonProps {
  sizebutton?: string;
  colorbutton?: string;
  width?: string;
}

export const Button = styled.button<ButtonProps>`
  width: ${(props) => props.width};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border-radius: 4px;
  font-weight: 600;
  font-family: "Inter", sans-serif;
  width: 315px;
  height: 48px;

  ${(props) => {
    switch (props.colorbutton) {
      case "Grey":
        return css`
          color: #ffffff;
          background-color: #212529;
          border: 1px solid #212529;

          &:hover {
            background-color: #495057;
            border: 1px solid #212529;
          }
        `;

      case "Negative":
        return css`
          color: #495057;
          background-color: #DEE2E6;
          border: 1px solid #DEE2E6;

          &:hover {
            background-color: #CED4DA;
            border: 1px solid #CED4DA;
          }
        `;

      case "Disable":
        return css`
          color: #ffffff;
          background-color: #CED4DA;
          border: 1px solid #CED4DA;
          cursor: not-allowed;
        `;

      case "Brand":
        return css`
          color: #ffffff;
          background-color: #4529e6;
          border: none;

          &:hover {
            background-color: #ADB5BD;
            color: #4529e6;
          }
        `;

      case "Brand2":
        return css`
          color: #ffffff;
          background-color: #5126ea;
          border: 1px solid #FDFDFD;

          &:hover {
            background-color: #FDFDFD;
            border: 1px solid #FDFDFD;

            a {
              color: #212529;
            }
          }
        `;

      case "BrandNew":
        return css`
          color: #ffffff;
          background-color: #4529e6;
          border: 1px solid #FDFDFD;

          &:hover {
            background-color: #5126ea;
            border: 1px solid #5126ea;
          }
        `;

      case "BrandOpacity":
        return css`
          color: #4529e6;
          background-color: #edeafd;
          border: 1px solid #edeafd;

          &:hover {
            background-color: #212529;
            border: 1px solid #212529;
          }
        `;

      case "Light":
        return css`
          color: #212529;
          background-color: #FDFDFD;
          border: 1px solid #FDFDFD;
        `;

      case "LightLogin":
        return css`
          color: #495057;
          justify-content: flex-end;
          background-color: #FDFDFD;
          border: 1px solid #FDFDFD;
        `;

      case "Outline1":
        return css`
          color: #0B0D0D;
          background-color: transparent;
          border: 1px solid #0B0D0D;

          &:hover {
            background-color: #212529;
            color: #ffffff;
            border: 1px solid #212529;
          }
        `;

      case "Outline2":
        return css`
          color: #0B0D0D;
          background-color: transparent;
          border: 1px solid #ADB5BD;

          &:hover {
            background-color: #edeafd;
            border: 1px solid #4529e6;
          }
        `;

      case "OutlineBrand":
        return css`
          color: #4529e6;
          background-color: #ffffff;
          border: 1px solid #4529e6;

          &:hover {
            background-color: #edeafd;
            border: 1px solid #4529e6;
          }
        `;

      case "Link":
        return css`
          color: #212529;
          background-color: #ffffff;
          border: 1px solid #ffffff;

          &:hover {
            background-color: #F1F3F5;
            border: 1px solid #F1F3F5;
          }
        `;

      case "Alert":
        return css`
          color: #CD2B31;
          background-color: #FFE5E5;
          border: 1px solid #FFE5E5;

          &:hover {
            background-color: #FDD8D8;
            border: 1px solid #FDD8D8;
          }
        `;

      case "Sucess":
        return css`
          color: #18794E;
          background-color: #DDF3E4;
          border: 1px solid #DDF3E4;

          &:hover {
            background-color: #CCEBD7;
            border: 1px solid #CCEBD7;
          }
        `;

      case "BrandDisable":
        return css`
          color: #ffffff;
          background-color: #b0a6f0;
          border: 1px solid #b0a6f0;
          cursor: not-allowed;
        `;

      default:
        return false;
    }
  }}
  ${(props) => {
    switch (props.sizebutton) {
      case "medium":
        return css`
          font-size: 0.875rem;
          padding: 0.25rem 0.7rem;
        `;

      case "login":
        return css`
          font-size: 0.875rem;
          padding: 0.25rem 0rem;
        `;

      default:
        return css`
          padding: 0.75rem 1.75rem;
          font-size: 1rem;
        `;
    }
  }};
`;

export const ContainerButtonVehicle = styled.button`
  box-sizing: border-box;
  border: 1.5px solid #fdfdfd;
  height: 48px;
  width: 146px;
  padding: 12px 28px;
  gap: 10px;
  background-color: #5126ea;
  color: #fdfdfd;
  font-size: 16px;
  border-radius: 4px;
  font-family: "Inter";

  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
  @media ${device.mobile} {
    width: 100%;
  }
`;

export const DivButton = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  margin-top: 50px;

  @media ${device.mobile} {
    align-items: center;
    flex-direction: column;
  }
`;
