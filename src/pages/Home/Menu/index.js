/*
 * @Author: jiabingnan jiabingnan@sinosoft.com.cn
 * @Date: 2023-06-13 23:27:47
 * @LastEditors: jiabingnan jiabingnan@sinosoft.com.cn
 * @LastEditTime: 2023-06-13 23:38:23
 * @FilePath: /hello-react/src/pages/Home/Menu/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import menu from "./index.module.css";
export default class Menu extends React.Component {
  render() {
    return <div className={menu.title}>菜单</div>;
  }
}
