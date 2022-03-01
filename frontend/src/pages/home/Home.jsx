import Header from '../../header/Header'
import PostGrid from '../../postgrid/PostGrid';
import { Sidebar } from '../../sidebar/Sidebar';
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