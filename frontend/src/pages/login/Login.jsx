import './login.css';

const Login = () => {
  return (
    <div className='login'>
      <span className="loginTitle">Login</span>
      <form action="" className="loginForm">
        <div className="loginGroup">
          <label htmlFor="email">E-mail</label>
          <input className='loginInput' type="email" name="email" id="email" placeholder="Enter your E-mail" />
        </div>
        <div className="loginGroup">
          <label htmlFor="password">Password</label>
          <input className='loginInput' type="password" name="password" id="password" placeholder="Enter your Password..." />
        </div>
        <button className='loginButton'>Login</button>
      </form>
      <span className='loginOr'>OR</span>
      <button className='loginSignupButton'>Signup</button>
    </div>
  )
}

export default Login