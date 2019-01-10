/* @flow */
import * as React from "react";
import { AppView } from "../theme";
import { ScaleLoader } from "react-spinners";
import { theme } from "../theme";

class Loading extends React.Component<{}, {}> {
  render() {
    return (
      <AppView
        style={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <ScaleLoader
          sizeUnit={"px"}
          size={150}
          color={theme.primary.accent}
          loading={true}
        />
      </AppView>
    );
  }
}

export default Loading;
