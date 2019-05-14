import React from "react";

class NavBar extends React.Component{
  constructor(props){
    super(props);
    this.state = {}
  }
  render(){
    let navItems = this.props.items.map((item)=>
      <button 
      onClick={this.props.handleClick.bind(this,item)}>{item}</button>
    )
    return (
      <div>
        {navItems}
      </div>
    )
  }
}
export default NavBar;