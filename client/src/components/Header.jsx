import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className='bg-slate-200'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
          <h1 className='font-bold text-4xl text-slate-700'>DOSTi</h1>
        </Link>
        <ul className='flex gap-4'>
          <Link to='/'>
            <li>Home</li>
          </Link>
          <Link to='/about'>
            <li>About</li>
          </Link>
            {currentUser ? ( <img src={currentUser.profilePicture} alt='profile' className='h-7 w-7 rounded-full object-cover cursor-pointer' onClick={toggleDropdown}/>
            ) : (
              <Link to='/sign-in'><li>Sign In</li></Link>
            )}
          {isDropdownOpen && (
        <div
          onClick={() => setDropdownOpen(false)}
          className="fixed inset-0 h-full w-full z-10"
        ></div>
      )}

      {isDropdownOpen && (
        <div className="absolute mt-8 w-48 bg-white rounded-md shadow-lg z-20">
          {/* Dropdown content goes here */}
          <Link to='/profile' className="block px-4 py-2 text-gray-800 hover:bg-gray-200" >Update Profile</Link>
          <Link to='/my-posts' className="block px-4 py-2 text-gray-800 hover:bg-gray-200" >My Posts</Link>
          <Link to='/' className="block px-4 py-2 text-gray-800 hover:bg-gray-200" >Settings</Link>
        </div>
      )}
        </ul>
      </div>
    </div>
  );
}
