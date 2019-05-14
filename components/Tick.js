import React from "react";
// tick 组件
class Tick extends React.Component{
  constructor(props){
    super(props);
    this.state = {date: new Date().toString()}
  }

  // 组件方法
  tick(){
    this.setState({
      date: new Date().toString()
    });
  }

  // 组件挂载时
  componentDidMount(){
    this.tickSI = setInterval(() => {
      this.tick();
    }, 1000);
  }

  // 组件卸载时
  componentWillUnmount(){
    clearInterval(this.tickSI);
  }

  render(){
    return <h2>现在是：{this.state.date}</h2>
  }
}
export default Tick;