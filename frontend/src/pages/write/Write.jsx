import { useContext, useState } from 'react';
import axios from "axios";
import './write.css';
import { Context } from '../../context/Context';

const Write = () => {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [file, setFile] = useState(null)
  const { user } = useContext(Context)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
    }
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.photo = fileName;
      try {
        await axios.post("/upload", data);
      } catch (e) {}
    }
    try {
      const res = await axios.post("/posts", newPost);
      window.location.replace("/post/" + res.data._id)
    } catch (error) {
      
    }
  }

  return (
    <div className='write'>
      {file && (
        <img
        className="writeImg"
        src={URL.createObjectURL(file)}
        alt=""
        />
      )}
      <form action="" className='writeForm' onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="fa-solid fa-plus writeIcon"></i>
          </label>
          <input type="file" id='fileInput' hidden onChange={e=>setFile(e.target.files[0])} />
          <input type="text" className='writeInput' autoFocus={true} placeholder='Title' onChange={e=>setTitle(e.target.value)} />
        </div>
        <div className="writeFormGroup">
          <textarea name="" id="" placeholder='Write your content . . .' className='writeInput writeText' type="text" cols="30" rows="10" onChange={e=>setDesc(e.target.value)}></textarea>
        </div>
        <button className='writeSubmit' type='submit'>Publish...</button>
      </form>
    </div>
  )
}

export default Write