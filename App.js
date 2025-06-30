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
const Title = () => <h1>Hello I am from jsx using heading 🚀</h1>;
// console.log(jsxHeading);

// React functional component
const HeadingComponent = () => {
  return <h1 className="heading">React functional component</h1>;
};
//OR
const HeadingComponent1 = () => (
  <div id="container">
    {Title()}
    <Title/>
    <Title></Title>
    <h1 className="heading">React functional component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent1 />);
