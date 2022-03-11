import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';

export const Sidebar = () => {
  const [cat, setCat] = useState([])
  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get('/categories')
      setCat(res.data)
    }
    getCats();
  }, [])
  console.log(cat);

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT US</span>
        <img className='sidebarImg'
          src="https://images.pexels.com/photos/10555724/pexels-photo-10555724.jpeg?auto=compress&cs=tinysrgb&dpr=2"
          alt=""
        />
      </div>
        <p>
          This page shares  best articles to read on topics like health, happiness, creativity, productivity and more. The central question that drives my work is, “How can we live better?” To answer that question, I like to write about science-based ways to solve practical problems.
        </p>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {
            cat.map((c)=> (
              <Link className='link' to={`/?cat=${c.name}`}>
                <li className="sidebarListItem">
                  {c.name}
                </li>
              </Link>
            ))
          }
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-facebook-square"></i>
          <i className="sidebarIcon fa-brands fa-instagram-square"></i>
          <i className="sidebarIcon fa-brands fa-pinterest-square"></i>
          <i className="sidebarIcon fa-brands fa-twitter-square"></i>
        </div>
      </div>
    </div>
  )
}

export default Sidebar