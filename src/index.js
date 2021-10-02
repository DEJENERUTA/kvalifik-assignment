import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import reportWebVitals from "./reportWebVitals";
import Home from "./components/Home";

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
			{<Home />}
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);

reportWebVitals();
