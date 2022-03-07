import { useEffect, useState } from 'react';
import Header from '../../components/header/Header'
import PostGrid from '../../components/postgrid/PostGrid';
import Sidebar from '../../components/sidebar/Sidebar';
import './home.css';
import axios from "axios";
const Home = () => {
  var [posts,setPost] = useState([]);
  useEffect(()=>{
    const fetchPost = async () =>{
      const res = await axios.get("/posts");
      setPost(res.data)
    }
    fetchPost()
  },[])
  return (
    <>
      <Header />
      <div className='home'>
        <PostGrid post={posts} />
        <Sidebar />
      </div>
    </>
  )
}

export default Home