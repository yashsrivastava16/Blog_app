import Post from './post/Post';
import './postgrid.css';

const PostGrid = ({ post }) => {
  return (
    <div className='postgrid'>
      {
        post.map((p)=>{
          return <Post postData={p}/>
        })
      }
    </div>
  )
}

export default PostGrid