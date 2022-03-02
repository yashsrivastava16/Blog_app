import './write.css';

const Write = () => {
  return (
    <div className='write'>
      <img
        className="writeImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <form action="" className='writeForm'>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="fa-solid fa-plus writeIcon"></i>
          </label>
          <input type="file" id='fileInput' hidden />
          <input type="text" className='writeInput' autoFocus={true} placeholder='Title' />
        </div>
        <div className="writeFormGroup">
          <textarea name="" id="" placeholder='Write your content . . .' className='writeInput writeText' type="text" cols="30" rows="10"></textarea>
        </div>
        <button className='writeSubmit'>Publish...</button>
      </form>
    </div>
  )
}

export default Write