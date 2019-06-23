import * as React from "react";
import Button from "./Button";
import { methods } from "../model/methods";
import Textarea from "./Textarea";

interface Props {}

interface State {
  errorMessage: String;
}

export default class JsonSorter extends React.Component<Props, State> {
  public state: State = { errorMessage: "" };

  private inputText = React.createRef<Textarea>();
  private outputText = React.createRef<Textarea>();

  public execute = () => {
    try {
      const beforeObj = JSON.parse(this.inputText.current.getValue());
      const afterObj = methods.objectSort(beforeObj);
      this.outputText.current.setValue(JSON.stringify(afterObj, null, 2));
    } catch (e) {
      console.error(e);
      this.setState({ errorMessage: e.message });
    }
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <span className="col-sm" id="error-message">
            {this.state.errorMessage}
          </span>
        </div>
        <div className="row">
          <div className="col-sm-5 child-width-max">
            <span>input</span>
            <Textarea ref={this.inputText} />
          </div>
          <div className="col-sm-2 button-area">
            <Button
              label="sort!!"
              className="positive"
              onClick={this.execute}
            />
          </div>
          <div className="col-sm-5 child-width-max">
            <span>output</span>
            <Textarea ref={this.outputText} />
          </div>
        </div>
      </div>
    );
  }
}
