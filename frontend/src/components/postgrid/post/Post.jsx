import './post.css';

import React from 'react'
import { Link } from 'react-router-dom';

export default function Post({ postData }) {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <div className="postInfo">
        <span className="postTitle">
          <Link className='link' to={`/post/${postData._id}`}>
            {postData.title}
          </Link>
        </span>
        <hr />{console.log(postData)}
        <span className="postDate">{new Date(postData.createdAt).toDateString()}</span>
      </div>
      <p className="postDesc">
        {
          postData.desc
        }
      </p>
    </div>
  )
}
