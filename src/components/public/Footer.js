import { click } from '@testing-library/user-event/dist/click';
import React, { useState } from 'react'

const Footer = () => {

const [clicks,setClicks]=  useState(0);

const year= new Date().getFullYear();

const companyName= "El Maquinon.Inc";

const handleClick = () => {
  setClicks(clicks + 1);

}


  return (
    <div class="container">
    <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <p class="col-md-4 mb-0 text-body-secondary">&copy; { year } {companyName} Clicks= {clicks} </p>

      <span
      className='col-md-4 d-flex align-item-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark'
      onClick={ handleClick }
      >

      <img
        className='app-logo'
        height="52"
        src='perrito.jpeg'
        alt="perro-giratorio"
      />


      </span>
  
      <ul class="nav col-md-4 justify-content-end">
        <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Home</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Features</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Pricing</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Formulario</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">About</a></li>
      </ul>
    </footer>
  </div>
  )
}

export default Footer
