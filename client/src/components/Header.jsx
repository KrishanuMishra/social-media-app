import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function Header() {
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);

  var DropdownTheme =
    "text-black hover:bg-gray-200 hover:text-black block px-4 py-2";

  if (isDarkTheme) {
    DropdownTheme =
      "text-white hover:bg-gray-200 hover:text-black block px-4 py-2";
  }

  const { currentUser } = useSelector((state) => state.user);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  return (
    <div
      className={`${isDarkTheme ? "bg-gray-900" : "bg-slate-200"} text-${
        isDarkTheme ? "white" : "black"
      }`}
    >      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1
            className={` font-bold text-4xl text-${
              isDarkTheme ? "slate-50" : "slate-700"
            }`}
          >
            DOSTi
          </h1>
        </Link>
        <ul className="flex gap-4">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          {currentUser ? (
            <img
              src={currentUser.profilePicture}
              alt="profile"
              className="h-7 w-7 rounded-full object-cover cursor-pointer"
              onClick={toggleDropdown}
            />
          ) : (
            <Link to="/sign-in">
              <li>Sign In</li>
            </Link>
          )}
          {isDropdownOpen && (
            <div
              onClick={() => setDropdownOpen(false)}
              className="fixed inset-0 h-full w-full z-10"
            ></div>
          )}

          {isDropdownOpen && (
            <div
              className={`bg-${isDarkTheme ? "black" : "white"} 
              } absolute mt-8 w-48 rounded-md shadow-lg z-20 `}
            >
              {/* Dropdown content goes here */}
              <Link to="/profile" className={`${DropdownTheme}`}>
                Update Profile
              </Link>
              <Link to="/my-posts" className={`${DropdownTheme}`}>
                My Posts
              </Link>
              <Link to="/settings" className={`${DropdownTheme}`}>
                Settings
              </Link>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
}
