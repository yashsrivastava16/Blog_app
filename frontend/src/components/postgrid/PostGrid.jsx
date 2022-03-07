import Post from './post/Post';
import './postgrid.css';

const PostGrid = ({ post }) => {
  return (
    <div className='postgrid'>
      {/* {
        post.map((p)=>{
          <Post postData={p}/>
        })
      } */}

      <Post postData={post}/>
    </div>
  )
}

export default PostGrid