import { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Context } from '../../context/Context';
import './singlepost.css';
import axios from "axios";

const SinglePost = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2]
  const [post, setPost] = useState({})
  const { user } = useContext(Context)
  
  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`, {
        data: {username: user.username}
      });
      window.location.replace("/")
    } catch (error) { console.log(error); }
  }
  
  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(`/posts/${path}`);
      setPost(() => res.data)
    };
    getPost();
  }, [path])

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <h1 className="singlePostTitle">
          {post.title}
          {post.username === user?.username && (
            <div className="singlePostEdit">
              <i className="singlePostIcon fa-solid fa-edit"></i>
              <i className="singlePostIcon fa-solid fa-trash" onClick={handleDelete}></i>
            </div>
          )}
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <Link className='link' to={`/?user=${post.username}`}>
              <b className="singlePostAuthor">
                {post.username}
              </b>
            </Link>
          </span>
          <span>{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="singlePostDesc">
          {post.desc}
        </p>
      </div>
    </div>
  )
}

export default SinglePost