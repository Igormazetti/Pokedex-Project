import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import PokemonsProvider from "./context/PokemonsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PokemonsProvider>
      <App />
    </PokemonsProvider>
  </React.StrictMode>
);
