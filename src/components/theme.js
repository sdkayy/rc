/* @flow */
import styled from "styled-components";

export const theme = {
  primary: {
    bg: "#FFF",
    accent: "#28B662",
    text: "#333333",
    border: "#E2E5EA"
  },
  alt: {
    bg: "#EBECEE",
    success: "#28B662",
    error: "#E43726",
    text: "#818F8F"
  }
};

export const AppView = styled.div`
  width: 100%:
  height: 100%;
  background: ${theme.alt.bg};
`;
