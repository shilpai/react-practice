/**
 * <div id="parent">
 * <div id="child">
 *  <h1>I am an h1 tag</h1>
 *  <h2>I am an h2 tag</h2>
 * </div>
 * </div>
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "I am an h2 tag")
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "I am an h2 tag")
  ])
]);

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello world! from React"
// );

console.log(parent); // Object or react element
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
