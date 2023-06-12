/*
 * @Author: jiabingnan jiabingnan@sinosoft.com.cn
 * @Date: 2023-06-12 20:27:45
 * @LastEditors: jiabingnan jiabingnan@sinosoft.com.cn
 * @LastEditTime: 2023-06-12 22:06:53
 * @FilePath: /hello-react/src/reportWebVitals.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import("web-vitals").then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;

//用于记录页面性能
//web-vitals  页面性能检测
