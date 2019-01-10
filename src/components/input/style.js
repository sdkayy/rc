/* @flow */
import styled from "styled-components";
import { theme } from "../theme";

export const InputHolder = styled.div`
  display: flex;
  flex-direction: column;
  flex-flow: no-wrap;
`;

export const InputLabel = styled.p`
  color: ${theme.primary.text};
  font-size: 18px;
  margin-bottom: 6px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const InputBox = styled.input`
  padding: 8px;
  border-radius: ${props => (props.withButton ? "4px 0 0 4px" : "4px")};
  font-size: 18px;
  color: ${theme.primary.text};
  border: 1px solid ${theme.primary.accent};
  ${props => props.withButton && "border-right: none;"};
  &:focus {
    outline: none;
  }
`;

export const ActionHolder = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 90% 10%;
`;

export const ActionButton = styled.button`
  padding: 8px;
  font-size: 18px;
  border-radius: 0 4px 4px 0;
  border: 1px solid ${theme.primary.accent};
  background: ${theme.primary.accent};
  color: white;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover {
    background: ${theme.primary.bg};
    color: ${theme.primary.accent};
  }
`;
