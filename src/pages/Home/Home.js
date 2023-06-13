/*
 * @Author: jiabingnan jiabingnan@sinosoft.com.cn
 * @Date: 2023-06-12 22:22:35
 * @LastEditors: jiabingnan jiabingnan@sinosoft.com.cn
 * @LastEditTime: 2023-06-13 23:39:13
 * @FilePath: /hello-react/src/pages/Home.js
 */
import React from "react";
import "./Home.css"; //引入home样式
import Aside from "./Aside/index";
import Menu from "./Menu/index";
// 创建并暴露组建home
export default class Home extends React.Component {
  render() {
    return (
      <>
        <div className="home">
          <Aside></Aside>
          <div className="home-menu">
            <Menu></Menu>
          </div>
        </div>
      </>
    );
  }
}
