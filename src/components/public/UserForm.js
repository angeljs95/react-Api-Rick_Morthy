import React, { useState , useEffect} from 'react'
import { Link } from 'react-router-dom';
import { useUserForm } from '../../hooks/Custom.hooks';

export const UserForm = () => {

  const {form , setForm, handleChange } = useUserForm();

  const [areEquals, setAreEquals]=  useState(true);

  const [passwordConfirmation, setPasswordConfirmation]=  useState();

  const [pass, setPass] = useState(true)


  const validPass = () => { //comprueba que la password no este indefinida
    const { password } = form;  
    if (password !== undefined) {
    setPass(false)
  } 
  return pass
  }


  const handlePasswordConfirmation= (e) =>{
setPasswordConfirmation(e.target.value);

  }

useEffect (() => {
    
   const { password } = form ;
    setAreEquals(password === passwordConfirmation);
    validPass();
     }, [passwordConfirmation, pass] );

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form);


  }

  return (
    <div className='w-25 mx-auto mt-5'>
      <h4 className=" mb-3 "> Registro de nuevos usuarios </h4>

      <form className="needs-validation" noValidate>
<div className='row g-3'>

  <div class="mb-3">
    <label htmlFor="correo" class="form-label" >Email address</label>
    <input type="email" class="form-control"  
    placeholder='example@example.com ' name="email" onChange={handleChange} />
</div>
<div className="invalid-feedback">
              Please enter a valid email address for shipping updates.
            </div>

<div class="mb-3">
    <label htmlFor="address" class="form-label" >Password</label>
    <input type="text" class="form-control"
    placeholder= " 1234566" name="password" onChange={handleChange} />
</div>

<div className="invalid-feedback">
              Please enter your shipping address.
            </div>

<div class="mb-3">
    <label htmlFor="password2" class="form-label" >Repetir password </label>
    <input type="text" class="form-control"
     placeholder= " 1234566" onChange={handlePasswordConfirmation}/>
</div>

          { !areEquals && (
              <div className="form-text list-group-item-danger" >
               Los passwords no coinciden
            </div> 
         ) }       
    </div>

    <hr className='my-4'/>

<button 
disabled={!areEquals|| pass}
type='submit' className="btn btn-primary" onClick={handleSubmit}>
            <Link className=' nav-link' >
            Registrarse
            </Link>

            </button>
     
     
          
      </form>
      
      
      
      
      
    </div>
  )
}
