import { NavLink } from "react-router-dom";
import logo from "../assets/logo1.png";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="Header fixed bg-white top-0 right-0 left-0 z-10 shadow-lg ">
      <div className="container mx-auto">
        <div className="header flex  items-center  justify-between ">
          <div className="logo ">
            <img
              src={logo}
              alt=""
              className=" rounded-[50%] w-[130px] h-[130px] "
            />
          </div>
          <div className="word flex items-center gap-5 flex-wrap ">
            <NavLink to="/">
              <h3 className="font-sans text-gray-500 transition-[0.4s] hover:text-black hover:font-medium ">
                Home
              </h3>
            </NavLink>
            <NavLink to="/project">
              <h3 className="font-sans text-gray-500 transition-[0.4s] hover:text-black hover:font-medium ">
                Project
              </h3>
            </NavLink>
            <NavLink to="/contact">
              <h3 className="font-sans text-gray-500 transition-[0.4s] hover:text-black hover:font-medium ">
                Contact
              </h3>
            </NavLink>
            <a href="https://github.com/Mirmansur">
              <button className="border-none ">
                <FaGithub className="text-2xl" />
              </button>
            </a>
            <a href="https://www.linkedin.com/in/mirmansur-rakhmatov-5aa051323/">
              <button className="border-none ">
                <FaLinkedin className="text-2xl" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
