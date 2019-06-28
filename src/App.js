import React, { Component } from 'react';
import './App.css';
import LoginForm from './LoginForm';
import RegisterBruiseForm from './RegisterBruiseForm';
import BruiseDatingResult from './BruiseDatingResult';

class App extends Component {
  constructor(){
    super();
    this.state = {
        showRegisterBruise : false,
        showBruiseDatingResults : false,
    };
  }

  handleLoginSubmit(event){
    this.setState({showRegisterBruise: true});
  }

  handleRegisterBruiseSubmit(event){
    this.setState({showBruiseDatingResults: true});
  }

  render() {
    const RegisterStyle = this.state.showRegisterBruise ? {display:'inline'} : {};
    const ResultsStyle = this.state.showBruiseDatingResults ? {display:'inline'} : {};

    return (
      <div>
        <div>
        <h1>Sistema de Datación de Equimosis</h1>
        <h2>Universidad Nacional Mayor de San Marcos</h2>
        </div>
        <div>
          <LoginForm/>
        </div>
        <div style={RegisterStyle}>
          <RegisterBruiseForm></RegisterBruiseForm>
        </div>
        <div style={ResultsStyle}>
          <BruiseDatingResult/>
        </div>
      </div>
    );
  }
}

export default App;