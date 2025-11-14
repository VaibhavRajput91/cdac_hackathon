import React from 'react'
import { toast } from 'react-toastify'
import { login } from '../../services/users';
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';


function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate()

  const onLogin = () => {
    if(email.length == 0){
      toast.warning("Please enter email")
    }
    else if(password.length == 0){
      toast.warning("Please enter the password")
    }
    else {
      const response = login(email, password)
      if(response.status == "success"){
        toast.success("Login successful")
        navigate('/home/properties')
      }
      else{
        toast.error(response["error"])
      }
      

    }
  }

  return (
    <div className='container'>
      <div className="page-header">Login</div>
      
      <div className="login-container">
        <div className='mb-3'>
          <label htmlFor="email">Email</label>
          <input onChange={(e) => {
            setEmail(e.target.value)
            console.log(email)
          }} type="email" />
        </div>

        <div className='mb-3'>
          <label htmlFor="password">Password</label>
          <input onChange={(e) => {
            setPassword(e.target.value)
            console.log(password)
          }} type="password" />
        </div>

        <div>New here? <Link to='/register'>Register</Link> </div>

        <div>
          <button onClick={onLogin}>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Login
