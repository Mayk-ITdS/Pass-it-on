import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./Store/store";
import App from "./App";
import { Container } from "./Components/Container/Container";
import "./main.css";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Container>
        <App />
      </Container>
    </Provider>
  </React.StrictMode>
);
