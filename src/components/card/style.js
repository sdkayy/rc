/* @flow */
import styled from "styled-components";
import { theme } from "../theme";
export const CardContainer = styled.div`
  width: 60%;
  margin: 16px auto;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const CardHeaderText = styled.h1`
  font-size: 21px;
`;

export const CardHeaderDate = styled.p`
  font-size: 14px;
`;

export const SortingButton = styled.button`
  padding: 8px;
  border-radius: 2px;
  float: right;
  border: 1px solid ${theme.primary.border};

  &:focus {
    outline: none;
  }
`;

export const ButtonInners = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  grid-gap: 4px;
`;

export const ButtonText = styled.p`
  font-size: 14px;
`;

export const Flipper = styled.div`
  padding-top: 6px;

  transform: ${props => (props.sorting ? "rotate(180deg)" : "rotate(0deg)")};
`;

export const CardBody = styled.div`
  border-radius: 2px;
  width: 100%;
  background: ${theme.primary.bg};
  padding: 16px;
  box-sizing: border-box;
`;

export const CardHeader = styled.div`
  border-top: 6px solid ${theme.primary.accent};
  border-radius: 2px;
  width: 100%;
  padding: 16px;
  background: ${theme.primary.bg};
  margin-bottom: 16px;
  box-sizing: border-box;
`;

export const CardBodyOpts = styled.div`
  padding: 0 8px;
`;

export const ListContainer = styled.div`
  width: 100%;
`;

export const ListItem = styled.div`
  padding: 20px 0;
  width: 100%;
  border-bottom: 1px solid ${theme.primary.border};

  &:last-of-type {
    border: none;
  }
`;

export const ListItemDate = styled.p`
  width: 100%;
  color: ${theme.alt.text};
  font-size: 14px;
  padding: 4px 8px;
  margin-bottom: 7px;
`;

export const TeamEntry = styled.div`
  display: grid;
  grid-template-columns: 90% 10%;
  padding: 4px 8px;
`;

export const TeamName = styled.p`
  font-size: 16px;
  margin: 2.5px;
  padding-left: 8px;
  border-left: 4px solid
    ${props => (props.winner ? theme.alt.success : theme.alt.error)};
  border-radius: 2px 0px 0px 2px;
`;

export const TeamScore = styled.p`
  font-size: 21px;
  font-weight: ${props => (props.winner ? "700" : "400")};
  text-align: right;
`;
