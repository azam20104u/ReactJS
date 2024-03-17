import React from "react";

export default class StateDemo extends React.Component {
    state = {
        name: this.props.name
    }
    changeName=()=>{
        this.setState({name:'Kiran'});
    }
  render() {
    return (<div>
        <h1>Hello Mrs. {this.state.name}</h1>
        <button onClick={this.changeName}>Change name</button>
        </div>);
  }
}
