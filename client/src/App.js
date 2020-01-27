import React from "react";
import "./styles.scss";
import RouterView from "./router/index";

function App() {
  return (
    <div className="App">
      {/* 
 Build a PrivateRoute component that will 
 display BubblePage when you're authenticated 
*/}
      <RouterView />
    </div>
  );
}

export default App;
