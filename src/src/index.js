import { StrictMode } from "react";
import ReactDomeClient from "react-dom/client";
import { Provider } from "react-redux";
import store from "./app/store";
import App from "./App";

const root = ReactDomeClient.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
