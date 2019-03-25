
import ReactDOM from "react-dom";
import React from "react";
function getGreeting(user){
  if(user){
    return <h1>hello,{user}!</h1>
  }
  return <h1>hello,stranger!</h1>
}
const element = (
  <h1>
    hello,world!
  </h1>
)
ReactDOM.render(
  element,
  document.getElementById('root')
);




