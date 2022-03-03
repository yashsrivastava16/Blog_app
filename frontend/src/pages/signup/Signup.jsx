import './signup.css';

const Signup = () => {
  return (
    <div className='signup'>
      <span className="signupTitle">Signup</span>
      <form action="" className="signupForm">
        <div className="signupGroup">
          <label htmlFor="name">Name</label>
          <input className='signupInput' type="type" name="name" id="name" placeholder="Enter your Name" />
        </div>
        <div className="signupGroup">
          <label htmlFor="email">E-mail</label>
          <input className='signupInput' type="email" name="email" id="email" placeholder="Enter your E-mail" />
        </div>
        <div className='signupPassword'>
          <label htmlFor="password">Password</label>
          <input className='signupInput' type="password" name="password" id="password" placeholder="Enter your Password..." />
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input className='signupInput' type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm your Password..." />
        </div>
        <button className='signupButton'>Signup</button>
      </form>
      <span className='signupOr'>OR</span>
      <button className='signupLoginButton'>Login</button>
    </div>
  )
}

export default Signup