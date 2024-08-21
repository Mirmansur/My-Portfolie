import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import icon1 from "../assets/html.svg";
import icon2 from "../assets/css.svg";
import icon3 from "../assets/js.svg";
import icon4 from "../assets/react.svg";
import icon5 from "../assets/redux.svg";
import icon6 from "../assets/bootsrap.svg";
import icon7 from "../assets/tailwind.svg";
import icon8 from "../assets/sass.svg";
import icon9 from "../assets/git.svg";
import icon10 from "../assets/visuval.svg";
import icon11 from "../assets/github.svg";
import { useTranslation } from "react-i18next";

const AboutSkills = () => {
  let { t } = useTranslation();

  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="About">
      <div className="container">
        <div className="about">
          <div className="about-one flex  flex-col  items-center p-40">
            <h1
              className="font-sans  font-extrabold text-2xl text-blue-950"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              {t("skills.My Tech Stack")}
            </h1>
            <p
              className="text-blue-950 font-normal text-xl font-sans"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              {" "}
              {t("skills.Technologies I’ve been working with recently")}
            </p>
          </div>
          <div className="about-two flex flex-col gap-4">
            <div className="two-one flex  items-center  justify-around flex-wrap">
              <img src={icon1} alt="" data-aos="flip-left" />
              <img src={icon2} alt="" data-aos="flip-left" />
              <img src={icon3} alt="" data-aos="flip-left" />
              <img src={icon4} alt="" data-aos="flip-left" />
              <img src={icon5} alt="" data-aos="flip-left" />
              <img src={icon6} alt="" data-aos="flip-left" />
            </div>
            <div className="two-two flex items-center  justify-around flex-wrap">
              <img src={icon7} alt="" data-aos="flip-left" />
              <img src={icon8} alt="" data-aos="flip-left" />
              <img src={icon9} alt="" data-aos="flip-left" />
              <img src={icon10} alt="" data-aos="flip-left" />
              <img src={icon11} alt="" data-aos="flip-left" />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ1jI02_8_A3vLLU1kiRyky-o6ukBUTWGyTg&s"
                alt=""
                className="w-[100px] h-[100px]"
                data-aos="flip-left"
              />
            </div>
            <div className="two-two flex items-center  justify-around flex-wrap">
              <img
                src="https://www.svgrepo.com/show/353401/ant-design.svg"
                alt=""
                className="w-[100px] h-[100px]"
                data-aos="flip-left"
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFxn-0Kp4Qgppjz51V6gjqMpW0OeBP3mmfwA&s"
                alt=""
                className="w-[100px] h-[100px]"
                data-aos="flip-left"
              />
              <img
                src="https://www.svgrepo.com/show/374144/typescript.svg"
                alt=""
                className="w-[120px] h-[120px]"
                data-aos="flip-left"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Canva_icon_2021.svg/2048px-Canva_icon_2021.svg.png"
                alt=""
                className="w-[100px] h-[100px]"
                data-aos="flip-left"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1667px-Figma-logo.svg.png"
                alt=""
                className="w-[100px] h-[120px]"
                data-aos="flip-left"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutSkills;
