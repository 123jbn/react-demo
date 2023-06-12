/*
 * @Author: jiabingnan jiabingnan@sinosoft.com.cn
 * @Date: 2023-06-12 20:27:45
 * @LastEditors: jiabingnan jiabingnan@sinosoft.com.cn
 * @LastEditTime: 2023-06-12 22:02:23
 * @FilePath: /hello-react/src/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react"; //react核心库
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
