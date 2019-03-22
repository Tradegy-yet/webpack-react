import React from "react";
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Sara" />;

module.exports = element;

// import React from 'react';

// class App extends React.Component {
//    render() {
//       return (
//          <div>
//             Hello World!!!<br />
//             欢迎来到菜鸟教程学习！！！
//          </div>
//       );
//    }
// }

// export default Greeter;