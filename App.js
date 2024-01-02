{/* <div id="parent">
    <div id="child">
        <h1>I amm h1 tag</h1>
        <h2>I amm h2 tag</h2>
    </div>
    <div id="child2">
        <h1>I amm h1 tag</h1>
        <h2>I amm h2 tag</h2>
    </div>
</div> */}

const parent = React.createElement("div",{id: "parent"},
    [React.createElement("div",{id: "child"},[
        React.createElement("h1",{},"I am h1 tag"),
        React.createElement("h2",{},"I am h2 tag")
    ]),
    React.createElement("div",{id: "child2"},[
        React.createElement("h1",{},"I am h1 tag"),
        React.createElement("h2",{},"I am h2 tag")
    ]),
]);

console.log("parent",parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);


// const heading = React.createElement("h1",{id: "heading"},"hello world from react");

// console.log("heading",heading); //object

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);