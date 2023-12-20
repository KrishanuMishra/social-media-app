import { useSelector } from 'react-redux/es/hooks/useSelector'

const MyPosts = () => {

  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);


  return (
    <div className={`${isDarkTheme ? 'bg-black || text-white' : 'bg-white || text-black' } h-screen`}>
    <div className='px-4 py-12 max-w-2xl mx-auto'>
      <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>Add Post</button>
      <input type="text"/>
      <input type="image"/>
    </div>
    </div>
  )
}

export default MyPosts