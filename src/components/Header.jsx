import { NavLink } from "react-router-dom";
import logo from "../assets/logo1.png";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import "../i18n";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import amerika from "../assets/amerika.png";
const Header = () => {
  let { t, i18n } = useTranslation();
  const [lang, setLang] = useState(localStorage.getItem("i18nextLng") || "en");
  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);
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
                {t("navbar.About Me")}
              </h3>
            </NavLink>
            <NavLink to="/project">
              <h3 className="font-sans text-gray-500 transition-[0.4s] hover:text-black hover:font-medium ">
                {t("navbar.Project")}
              </h3>
            </NavLink>
            <NavLink to="/contact">
              <h3 className="font-sans text-gray-500 transition-[0.4s] hover:text-black hover:font-medium ">
                {t("navbar.Contact")}
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
            <select
              className="outline-none w-[100px] p-3 rounded-md  shadow-lg"
              value={lang}
              onChange={(e) => setLang(e.target.value)}
              name=""
              id=""
            >
              <option value="en">
                Eng <img src={amerika} alt="" />
              </option>
              <option value="ru">
                Рус{" "}
                <img
                  src="https://kartinki.pics/uploads/posts/2021-07/1626770159_13-kartinkin-com-p-flag-rossii-na-zadnii-fon-krasivo-14.jpg"
                  alt=""
                  className="w-[10px] h-[10px]"
                />
              </option>
              <option value="uz">
                Uz{" "}
                <img
                  src="https://pic.rutubelist.ru/video/1d/60/1d60761882e675a2cae9aa83df181115.jpg"
                  alt=""
                />
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
