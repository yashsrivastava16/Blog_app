import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './signup.css';

const Signup = () => {
  const [name, setName] = useState([])
  const [email, setEmail] = useState([])
  const [password, setPassword] = useState([])
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name, email, password);
    setError(false);
    try {
      const res = await axios.post("/auth/register/", {
        name,
        email,
        password
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true)
    }
  }

  return (
    <div className='signup'>
      <span className="signupTitle">Signup</span>
      <form action="" className="signupForm" onSubmit={handleSubmit}>
        <div className="signupGroup">
          <label htmlFor="name">Name</label>
          <input className='signupInput' type="type" name="name" id="name" placeholder="Enter your Name" onChange={e => setName(e.target.value)} />
        </div>
        <div className="signupGroup">
          <label htmlFor="email">E-mail</label>
          <input className='signupInput' type="email" name="email" id="email" placeholder="Enter your E-mail" onChange={e => setEmail(e.target.value)} />
        </div>
        <div className='signupPassword'>
          <label htmlFor="password">Password</label>
          <input className='signupInput' type="password" name="password" id="password" placeholder="Enter your Password..." onChange={e => setPassword(e.target.value)} />
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input className='signupInput' type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm your Password..." onChange={e => setPassword(e.target.value)} />
        </div>
        <button className='signupButton' type='submit'>Signup</button>
      </form>
      <span className='signupOr'>OR</span>
      <button className='signupLoginButton'>
        <Link className='link' to='/login'>
          Login
        </Link>
      </button>
    </div>
  )
}

export default Signup