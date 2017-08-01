import React, { Component } from 'react';
import $ from 'jquery';

class Ajax extends Component {
  constructor(){
    super()
    this.state={
     arr:[1,2,3]
    }
  }
  componentDidMount (){
   $.ajax({
    url:'http://localhost:8005/ajax',
    type:'get',
    success:function(a){
      console.log(a)
      this.setState({arr:a});
    }.bind(this)
   })
  }
  render (){
    return (
      <div>
         <ul>{this.state.arr.map(function(e){
                return <li key={e.uid}>{e.title}</li>
         })}</ul>
      </div>
      )
  }
}

export default Ajax;