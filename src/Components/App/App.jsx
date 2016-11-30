import React, { Component } from 'react';
import Login from '../Login/Login.jsx';
import Signup from '../Signup/Signup.jsx';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      signup: {
        username: '',
        password: ''
      }
    }
  }

trackSignup(e){
  let inputs = e.target.parentElement.children
  console.log(inputs)
  this.setState({
    signup: {
      username: inputs[0].value,
      password: inputs[1].value
    }
  }, () => {
    console.log('this is what i need to know',this.state)
  })
}

postSignup(){
  // console.log(e)
  fetch('/user/signup', {
    method: 'POST', 
    body: JSON.stringify({
      username: this.state.signup.username,
      password: this.state.signup.password
    })
  })
  .then(r=>r.json())
  .then(() => {
    console.log('it posted')
  })
  .catch(error =>console.log(error))
}




  render() {
    return(
      <div>
        <Login
          
        />

        <Signup
          trackSignup = {this.trackSignup.bind(this)}
          postSignup = {this.postSignup.bind(this)}
        />

      </div>
    )
  }
}
