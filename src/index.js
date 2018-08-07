import React from "react";
import ReactDOM from "react-dom";
import App from "components/App";
import Root from "Root.js";
import { BrowserRouter as Router, Route } from "react-router-dom";

ReactDOM.render(
	<Root>
		<Router>
			<Route path="/" component={App} />
		</Router>
	</Root>,
	document.querySelector("#root")
);
