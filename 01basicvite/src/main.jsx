import { createElement } from "react";
import * as React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

const reactElement = {
  type: "a",
  props: {
    href: "https:google.com",
    target: "_blank",
  },
  Children: "click me to visit",
};

function myApp() {
  return (
    <div>
      <h1>Custom React app</h1>
    </div>
  );
}

const AnotherElement = (
  <a href="http://google.com" target="_blank">
    Visit Google
  </a>
);

//USING REACT
const areactElement = React.createElement(
  "a", // element
  { href: "https://google.com", target: "_blank" }, //Attributes
  "Click to visit google", //children
);

createRoot(document.getElementById("root")).render(
  // AnotherElement
  //   areactElement,
  <App />,
);
