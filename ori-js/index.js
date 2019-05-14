import ReactDOM from "react-dom";
import React from "react";
import Tick from "../components/Tick";
import NavBar from "../components/NavBar";

// class定义组件
class Welcome extends React.Component{
  render(){
    return <h1>Hello,{this.props.name}</h1>;
  }
}
class Page extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      nav_items:["首页","时间","其他"],
      nav: "首页"
    };
  }

  itemClick(item,e){
    console.log(this,item)
    this.setState({
      nav: item
    })
  }

  render(){
    let content = null;
    console.log("nav:",this.state.nav)
    if(this.state.nav=="首页"){
      content = <Welcome name="Lily" />;
    }
    else if(this.state.nav=="时间"){
      content = <Tick />;
    }
    else if(this.state.nav=="其他"){
      content = <Welcome name="Lily" />;
    }
    return(
      <div>
        <NavBar items={["首页","时间","其他"]} 
        handleClick={this.itemClick.bind(this)}/>
        {content}
      </div>
    )
  }
}
ReactDOM.render(
  <Page />,
  document.getElementById('root')
);




