import React from "react";

// 这是 HOC 函数
export const withCustomProps = (WrappedComponent: any) => {
  return class extends React.Component {
    render() {
      // 为 WrappedComponent 添加自定义属性
      return <WrappedComponent />;
    }
  };
};

const Hello = () => {
  return <div>
    <h1>HOC</h1>
    <p>接收一个或多个组件作为参数，并且返回一个组件</p>
    <p>提取通用部分，实现逻辑复用，提高灵活性</p>
    <h3>约定</h3>
    <p>props保持一致；不要以任何方式改变原始组件 WrappedComponent；不用在render()中使用高阶组件</p>
    <h3>应用场景</h3>
    <p>多个模块使用的功能，例如：权限控制；日志记录；数据校验；异常处理；统计上报</p>
  </div>
};

export const WrappedHello = withCustomProps(Hello);

