import React from 'react'
import {useNavigate, Link} from 'react-router-dom'




function Page404() {
    let navigate = useNavigate()
  return (
    <div>la pagina no existe, volver aca = <Link to='/'>volver</Link></div>
  )
}

export default Page404