
import { useState } from 'react';
import {useDispatch,useSelector} from 'react-redux';

const MyPosts = () => {
  const { currentUser} = useSelector((state) => state.user);
  const [text,setText] = useState('');
  const [image,setImage] = useState([]);
  const handleSubmit = async(e)=>{
    e.preventDefault();
    try{
      const res = await fetch('/api/post', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId:currentUser._id,
          text:text,
          image:image
        }),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        return;
      }
    }catch(e){
      console.log(e);
    }
  }
  return (
    <div>
    <div className='px-4 py-12 max-w-2xl mx-auto flex flex-col gap-4'>
        <h1 className="text-3xl font-bold  mb-4 text-slate-800">Add Post</h1>
        <textarea defaultValue={text} onChange={(e)=>{setText(e.target.value);}} type="text" className="bg-slate-200 p-4 rounded-lg h-44"/>
        <button onClick={handleSubmit} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>Add Post</button>
    </div>
    </div>
  )
}

export default MyPosts