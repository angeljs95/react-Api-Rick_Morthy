import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom';
import RickAndMortyService from '../../services/RickAndMorty.service';

export const Detail = () => {
  
  
  const [mascota, setMascota]= useState({});
  const {id} = useParams();
  const {pathname}= useLocation();
  
 
  useEffect (() => {
   console.log(pathname);
    RickAndMortyService.getCharactersByID(id)
    .then((data) => setMascota(data))
    .catch((error) => console.log(error));
    }, [] )
  
  
  
  return (
    <div className="row m-3">
    <div className="col-md-12" >
<div className="card flex-md-row mb4 box-shadow h-md-250" >
  <div className= " card-body d-flex flex-column align-item-start" >
    <strong className= "d-inline-block mb-2 text-success ">
     {mascota.species}
    </strong>

      <h3 className='mb-o text-dark'> {mascota.name} </h3>
      <div className='mb-1 text-muted'>
       { new Date (mascota.created).toLocaleDateString()
       }
      </div>

      <div className='mb-1 text-muted'></div>
      <p className='card-text mb-auto'>  This is a wider card with supporting text below as a natural 
      lead-in to additional content. This content is a little bit longer.</p>
      <ul class="list-group mt-1">
  <li class="list-group-item">{mascota.status} </li>
  <li class="list-group-item">{mascota.gender} </li>
  <li class="list-group-item">A third item</li>
  <li class="list-group-item">A fourth item</li>
  <li class="list-group-item">And a fifth one</li>
</ul>

<Link to={"/"} className='mt-3 btn btn-primary btn-lg' >
  volver
</Link>
  </div>
  <img className=" h-100 d-inline-block rounded card-img-right flex-auto d-none d-md-block m-4"
    height= "auto"
    src= {mascota.image}
    alt= " " />




</div>




 </div>


      
    </div> 
  )
}

