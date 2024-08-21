import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
const AboutMe = () => {
  let { t } = useTranslation();
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="AboutMe">
      <div className="container">
        <div className="aboutme">
          <div className="aboutme-one flex flex-col items-center  p-40">
            <h1
              className="text-3xl font-sans   font-extrabold text-blue-950  mb-5"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              {t("aboutMe.About Me")}
            </h1>
            <p
              className="text-2xl font-sans font-semibold text-gray-600 text-center"
              data-aos="zoom-in-down"
            >
              {t("aboutMe.Description")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
