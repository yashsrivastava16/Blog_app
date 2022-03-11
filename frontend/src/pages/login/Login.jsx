import { Link } from 'react-router-dom';
import {useContext, useRef } from "react";
import './login.css';
import { Context } from '../../context/Context';
import axios from 'axios';

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const {dispatch,isFetching,user} = useContext(Context)

  const handleSubmit = async (e)=>{
    e.preventDefault();
    dispatch({type:"LoginStart"})
    try {
      const res = await axios.post("/auth/login",{
        email : emailRef.current.value,
        password : passwordRef.current.value,
      });
    dispatch({type:"LoginSuccess",payload:res.data})
    } catch (error) {
    dispatch({type:"LoginFaliure"})
    }
  }
  console.log(user);
  console.log(isFetching);
  return (
    <div className='login'>
      <span className="loginTitle">Login</span>
      <form action="" className="loginForm" onSubmit={handleSubmit}>
        <div className="loginGroup">
          <label htmlFor="email">E-mail</label>
          <input className='loginInput' type="email" name="email" id="email" placeholder="Enter your E-mail" ref={emailRef} />
        </div>
        <div className="loginGroup">
          <label htmlFor="password">Password</label>
          <input className='loginInput' type="password" name="password" id="password" placeholder="Enter your Password..." ref={passwordRef} />
        </div>
        <button className='loginButton' type="submit">Login</button>
      </form>
      <span className='loginOr'>OR</span>
      <button className='loginSignupButton'>
        <Link className='link' to='/signup'>
          Signup
        </Link>
      </button>
    </div>
  )
}

export default Login