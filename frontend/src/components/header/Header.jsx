import './header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className="headerTitles">
        <span className='headerTitleLg'>BlogApp</span>
      </div>
      <img src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="headerImage" />
    </div>
  )
}

export default Header