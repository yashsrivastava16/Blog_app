import './post.css';

import React from 'react'
import { Link } from 'react-router-dom';

export default function Post({postData}){
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <div className="postInfo">
        <span className="postTitle">
          <Link className='link' to='/post/123'>
            Lorem ipsum dolor sit ame
          </Link>
        </span>
        <hr />{console.log(postData)}
        <span className="postDate">1 day ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
        atque, exercitationem quibusdam, reiciendis odio laboriosam?
      </p>
    </div>
  )
}
