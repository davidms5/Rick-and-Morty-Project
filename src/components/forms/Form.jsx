import React, {useState}from 'react';

const Form = () =>{

  const [userData, setUserData] = useState({
    email:"",
    password:"",
  })

  const handleChange = (e) => {
    e.preventDefault();
    const {name, value} = e.target;
    setUserData({...userData, [name]: value})
  }
  return (
    <>
    <div style={{backgroundColor:"gray"}}>
        <div style={{display:"flex", flexDirection:"column"}}>

        <img src="" alt="" />

        <form>

        <label htmlFor="email">email</label>

        <input type="email" name="email" value={userData.email} onChange={handleChange}/>

        <br />

        <label htmlFor="password"> password</label>

        <input type="password" name='password' value={userData.password} onChange={handleChange}/>

        <br />

        <button type='submit'>submit</button>

        </form>
        </div>
    </div>
    </>
  )
}

export default Form;
