import React from 'react'
import { useState } from 'react'
import { register } from '../../services/users';
import { Link, useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify'

function Register() {
    
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [dob, setDob] = useState('')
    const [password, setPassword] = useState('')
    const [confirm_password, setConfirmPassword] = useState('');

    const navigate = useNavigate();

    const onRegister = () =>{
        if(fname.length == 0){
            toast.warning("Please enter First name")
        }
        else if(lname.length == 0){
            toast.warning("Please enter Last name")
        }
        else if(email.length == 0){
            toast.warning("Please enter the Email")
        }
        else if(mobile.length < 10 || mobile.length > 10){
            toast.warning("Please enter correct mobile number")
        }
        else if(dob.length == 0){
            toast.warning("Please enter the Date of Birth")
        }
        else if(password.length == 0){
            toast.warning("Please enter the password")
        }
        else if(confirm_password.length == 0){
            toast.warning("Please Confirm the password")
        }
        else{
            const response = register(fname, lname, email, mobile, dob, password)
            if(response.status == "success"){
                toast.success("Registration successful");
                navigate('/');
            }
            else{
                toast.error(response["error"]);
            }
        }
    }
    
  return (
    <div className='container'>
      <div className="page-header">Register</div>
      
      <div className="login-container">
        <div className='mb-3'>
          <label htmlFor="fname">First Name</label>
          <input onChange={e => {
            setFname(e.target.value)
            console.log(fname)
          }} type="text" />
        </div>

        <div className='mb-3'>
          <label htmlFor="lname">Last Name</label>
          <input onChange={e => {
            setLname(e.target.value)
            console.log(lname)
          }} type="text" />
        </div>

        <div className='mb-3'>
          <label htmlFor="lname">Email</label>
          <input onChange={e => {
            setEmail(e.target.value)
            console.log(email)
          }} type="email" />
        </div>

        <div className='mb-3'>
          <label htmlFor="lname">Mobile</label>
          <input onChange={e => {
            setMobile(e.target.value)
            console.log(mobile)
          }} type="tel" />
        </div>

        <div className='mb-3'>
          <label htmlFor="lname">Date of Birth</label>
          <input onChange={e => {
            setDob(e.target.value)
            console.log(dob)
          }} type="date" />
        </div>

        <div className='mb-3'>
          <label htmlFor="password">Password</label>
          <input onChange={e => {
            setPassword(e.target.value)
            console.log(password)
          }} type="password" />
        </div>

        <div className='mb-3'>
          <label htmlFor="confirm-password">Confirm Password</label>
          <input onChange={e => {
            setConfirmPassword(e.target.value)
            console.log(confirm_password)
          }} type="password" />
        </div>

        <div>Already registered? <Link to='/login'>Login</Link> </div>

        <div>
          <button onClick={onRegister} className='btn btn-success'>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Register
