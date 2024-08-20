import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const AboutMe = () => {
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
              About Me
            </h1>
            <p
              className="text-2xl font-sans font-semibold text-gray-600 text-center"
              data-aos="zoom-in-down"
            >
              My name is Mirmansur and I am 18 years old. I entered the field of
              programming in September 2023 and I do not regret choosing this
              field at all. In my spare time I am interested in reading and
              doing sports.I go out with people quickly.I approach my work with
              responsibility.I’m never ashamed to ask what I don’t know.I can
              adapt to any situation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
