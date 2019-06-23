import * as React from "react";
import Button from "./Button";
import { methods } from "../model/methods";

interface Props {}

interface State {
  inputText: string;
  outputText: string;
}

export default class JsonSorter extends React.Component<Props, State> {
  public state: State = {
    inputText: "",
    outputText: ""
  };

  public execute = () => {
    try {
      const beforeObj = JSON.parse(this.state.inputText);
      const afterObj = methods.objectSort(beforeObj);
      this.setState({ outputText: JSON.stringify(afterObj, null, 2) });
    } catch (e) {
      console.error(e);
    }
  };

  private changeText = (e: any): void => {
    this.setState({ inputText: e.target.value });
  };

  render() {
    return (
      <div>
        <div>
          <span>input</span>
          <textarea
            id="input-json"
            cols={30}
            rows={10}
            value={this.state.inputText}
            onChange={this.changeText}
          />
        </div>
        <div>
          <Button label="sort!!" onClick={this.execute} />
        </div>
        <div>
          <span>output</span>
          <textarea
            id="output-json"
            cols={30}
            rows={10}
            value={this.state.outputText}
          />
        </div>
      </div>
    );
  }
}
