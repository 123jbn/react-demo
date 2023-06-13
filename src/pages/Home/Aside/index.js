/*
 * @Author: jiabingnan jiabingnan@sinosoft.com.cn
 * @Date: 2023-06-12 22:44:24
 * @LastEditors: jiabingnan jiabingnan@sinosoft.com.cn
 * @LastEditTime: 2023-06-13 23:36:49
 * @FilePath: /hello-react/src/pages/Home/Aside/Aside.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AEex[p]
 */
import React from "react";
import aside from "./index.module.css";
export default class Aside extends React.Component {
  render() {
    return <div className={aside.title}>左侧菜单栏</div>;
  }
}
