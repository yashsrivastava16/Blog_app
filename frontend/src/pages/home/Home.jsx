import { useEffect, useState } from 'react';
import Header from '../../components/header/Header'
import PostGrid from '../../components/postgrid/PostGrid';
import './home.css';
import axios from "axios";
import { useLocation } from 'react-router-dom';
import More from '../../components/moreinfo/More';

const Home = () => {
  var [posts, setPost] = useState([]);
  const [showFooter, setShowFooter] = useState(false);
  const { search } = useLocation();

  const toggleFooter = () => {
    setShowFooter(true)
  }

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get("/posts" + search);
      console.log(res);
      setPost(res.data)
    }
    fetchPost()
  }, [search])

  return (
    <>
      <Header />
      <div className='home'>
        <PostGrid post={posts} />
      </div>
      {showFooter ? <More /> : (
        <div className='footer'>
          <p className='info'>This page shares  best articles to read on topics like happiness, creativity, productivity......</p>
          <button className='footerbutton' onClick={toggleFooter}>More...</button>
        </div>
      )}

    </>
  )
}

export default Home