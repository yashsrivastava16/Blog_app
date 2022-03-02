import Post from './post/Post';
import './postgrid.css';

const PostGrid = () => {
  return (
    <div className='postgrid'>
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  )
}

export default PostGrid