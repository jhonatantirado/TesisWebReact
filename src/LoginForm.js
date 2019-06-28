import React, { Component } from 'react'

export default class LoginForm extends Component{
  render(){
    return (
      <div>
      <h2>Iniciar sesión</h2>
      <form onSubmit={this.handleLoginSubmit}>
          <div><input type="text" placeholder="Usuario" name="username" required/></div>
          <div><input type="password" placeholder="Contraseña" name="password" required/></div>
          <div><input type="submit" value="Ingresar"  /></div>
      </form>
      </div>
    );
  }
}