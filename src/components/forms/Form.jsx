import React, {useState}from 'react';
import validation from './validation';

const Form = (props) =>{

  const [userData, setUserData] = useState({
    email:"",
    password:"",
  })

  const [errors, setErrors] = useState({
    email:"",
    password:"",
  })

  const handleChange = (e) => {
    e.preventDefault();
    const {name, value} = e.target;
    setUserData({...userData, [name]: value});
    
    setErrors(
      validation({...userData, [name]: value})
    )

  }

  function handleSubmit(e){
    e.preventDefault();
    props.login(userData);
  }


  return (
    <>
    <div style={{backgroundColor:"gray"}}>
        <div style={{display:"flex", flexDirection:"column"}}>

        <img src="" alt="" />

        <form onSubmit={handleSubmit}>

        <label htmlFor="email">email</label>

        <input type="email" name="email" value={userData.email} onChange={handleChange}/>
        {errors.email ? (<p>{errors.email}</p>) : null}
        <br />

        <label htmlFor="password"> password</label>

        <input type="password" name='password' value={userData.password} onChange={handleChange}/>
        {errors.password ? (<p>{errors.password}</p>) : null}
        <br />

        <button type='submit'>login</button>

        </form>
        </div>
    </div>
    </>
  )
}

export default Form;
