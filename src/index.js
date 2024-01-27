import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/styles.scss"

import App from "./components/App";
import Collapsed from "./components/Collapsed";
import Mapa from "./components/Mapa";
import Toogle from "./components/Toogle";
// import "./styles/index.scss";

ReactDOM.createRoot(document.getElementById("app")).render(
  <React.StrictMode>
     {/* <Collapsed /> */}
     <Toogle />
  </React.StrictMode>
);