import React, { Component } from 'react';
import ImageUpload from './ImageUpload';

export default class RegisterBruiseForm extends Component{
  render(){
    return (
      <div>
        <div>
        <h2>Registrar caso de equimosis</h2>
        </div>
        <div>
        Adjunte una fotografía de equimosis: 
        <ImageUpload></ImageUpload>
        </div>
        <div>
              <select name="skincolor">
                  <option value='9'>Color de piel</option>
                  <option value='1'>Blanco</option>
                  <option value='2'>Trigueño claro</option>
                  <option value='3'>Trigueño oscuro</option>
                  <option value='4'>Negro</option>
              </select>
           </div>
          <div>
          <select name="age">
                  <option value='9'>Edad de la persona</option>
                  <option value='1'>Cero años</option>
                  <option value='2'>1 a 6 años</option>
                  <option value='3'>7 a 13 años</option>
                  <option value='4'>14 a 17 años</option>
                  <option value='5'>18 a 29 años</option>
                  <option value='6'>30 a 49 años</option>
                  <option value='7'>50 años a más</option>
              </select>
         </div>
          <div>
              <select name="sex">
                  <option value='9'>Sexo</option>
                  <option value='1'>Femenino</option>
                  <option value='2'>Masculino</option>
              </select>
           </div>

           <div><input type="checkbox" name="laxzone"  /> <label htmlFor="laxzone">Zona laxa</label></div>
           <div><input type="checkbox" name="vascularity" /> <label htmlFor="vascularity">Vascularidad</label></div>
           <div><input type="checkbox" name="bonetissue" /> <label htmlFor="bonetissue">Tejido óseo subyacente</label></div>
           
          <div><input type="submit" value="Registrar" /></div>
      </div>
    );
  }
}