import * as React from "react";

interface State {
  inputText: string;
  outputText: string;
}

interface Props {
  label: string;
  className: string;
  onClick: () => void;
}

const Button = (props: Props) => (
  <button className={props.className} onClick={props.onClick}>
    {props.label}
  </button>
);

export default Button;
