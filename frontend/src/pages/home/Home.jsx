import Header from '../../components/header/Header'
import PostGrid from '../../components/postgrid/PostGrid';
import { Sidebar } from '../../components/sidebar/Sidebar';
import './home.css';

const Home = () => {
  return (
    <div>
      <Header />
      <div className='home'>
        <PostGrid />
        <Sidebar />
      </div>
    </div>
  )
}

export default Home