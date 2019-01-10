/* @flow */
import * as React from "react";
import {
  InputHolder,
  InputLabel,
  InputBox,
  ActionHolder,
  ActionButton
} from "./style";

type Props = {
  onButton?: *,
  buttonLabel?: *,
  label?: string,
  withButton?: boolean
};

class Input extends React.Component<Props> {
  render() {
    return (
      <InputHolder>
        <InputLabel>{this.props.label}</InputLabel>
        {this.props.withButton && (
          <ActionHolder>
            <InputBox {...this.props} />
            <ActionButton onClick={this.props.onButton}>
              {this.props.buttonLabel}
            </ActionButton>
          </ActionHolder>
        )}
        {!this.props.withButton && <InputBox {...this.props} />}
      </InputHolder>
    );
  }
}

export default Input;
