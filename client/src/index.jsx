import ReactDOM from "react-dom";
import React from "react"; // ** IMPORTANT! Although not used explicitly in this file, this is required to be imported
import App from "./components/App.jsx";
import Footer from "./components/Footer.jsx";

ReactDOM.render(<App />, document.getElementById("app"));
ReactDOM.render(<Footer />, document.getElementById("footer"));
