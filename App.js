import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h2",
  { id: "heading" },
  "react using core react"
);
console.log(heading);

//JSX => is a HTML like syntax or XML like syntax
//JSX => (transpiled before it reaches the jS) => PARCEL => BABEL (transpile)
const jsxHeading = <h1>Hello I am from jsx using heading</h1>;
console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
