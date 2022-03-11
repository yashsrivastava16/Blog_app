import { useEffect, useState } from 'react';
import Header from '../../components/header/Header'
import PostGrid from '../../components/postgrid/PostGrid';
import Sidebar from '../../components/sidebar/Sidebar';
import './home.css';
import axios from "axios";
import { useLocation } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import More from '../../components/moreinfo/More';
const Home = () => {
  let moreInfo = false;
  var [posts,setPost] = useState([]);
  const { search } = useLocation();
  useEffect(()=>{
    const fetchPost = async () =>{
      const res = await axios.get("/posts" + search);
      console.log(res);
      setPost(res.data)
    }
    fetchPost()
  },[search])
  return (
    <>
      <Header />
      <div className='home'>
        <PostGrid post={posts} />
      </div>      
      {moreInfo ? <More/> : <Footer/>}
        
    </>
  )
}

export default Home