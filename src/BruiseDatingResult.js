import React, { Component } from 'react';
import bruise from './FotoEquimosisEjemplo.png';

export default class BruiseDatingResult extends Component{
    constructor(){
        super();
        this.state = {
            skincolor : 'Trigueño oscuro',
            age : '15 a 29 años',
            sex : 'Femenino',
            laxzone : 'Sí',
            vascularity : 'Sí',
            bonetissue : 'No',
            bruiseage : '6 a 12 días',
        };
    }
  render(){
    return (
      <div>
        <div>
        <h2>Datación de equimosis</h2>
        </div>
        <div>
        <img src={bruise}/>
        </div>
        <div>
        <label>Color de piel: </label>  {this.state.skincolor}
        </div>
        <div>
        <label>Edad de la persona: </label>  {this.state.age}
        </div>
        <div>
        <label>Sexo: </label>  {this.state.sex}
        </div>
        <div>
        <label>Zona laxa: </label>  {this.state.laxzone}
        </div>
        <div>
        <label>Vascularidad: </label>  {this.state.vascularity}
        </div>
        <div>
        <label>Tejido óseo subyacente: </label>  {this.state.bonetissue}
        </div>
        <div>
        <label>Edad de la equimosis: </label>  {this.state.bruiseage}
        </div>
      </div>
    );
  }
}