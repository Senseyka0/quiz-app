import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import { store } from "./store";

import App from "./App";

import "./index.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.querySelector("#root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
