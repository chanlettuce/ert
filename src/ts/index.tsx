import "bootstrap/dist/css/bootstrap.min.css";
import "../css/json-sorter.css";
import * as $ from "jquery";
import "bootstrap";
import * as React from "react";
import * as ReactDOM from "react-dom";
import JsonSorter from "./components/JsonSorter";

ReactDOM.render(<JsonSorter />, $("#root")[0]);
