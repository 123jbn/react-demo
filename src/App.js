// import logo from "./logo.svg";

import "./App.css";
import React from "react";
import Home from "./pages/Home";
// 函数式组件
// function App() {
//   return (
//     <div className="App">
//       {/* <header className="App-header">hello react</header> */}
//       <Home></Home>
//     </div>
//   );
// }
// 类式组件
export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Home></Home>
      </div>
    );
  }
}
