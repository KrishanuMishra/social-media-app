import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toggleTheme } from "../redux/setting/themeSlice";
import { useDispatch, useSelector } from "react-redux";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

const Settings = () => {
  const dispatch = useDispatch();
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);

  return (
    <div
      className={`bg-${isDarkTheme ? "black" : "white"} text-${
        isDarkTheme ? "white" : "black"
      } px-4 py-12 mx-auto h-screen`}
    >
      <h1 className="text-3xl font-semibold text-center my-7">
        Account settings
      </h1>
      <div className="flex justify-around">
        <p>Theme</p>
        <button onClick={() => dispatch(toggleTheme())}>
        <FontAwesomeIcon icon={faMoon} size="lg"/>
        </button>
      </div>
    </div>
  );
};

export default Settings;
