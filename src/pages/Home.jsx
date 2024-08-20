import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import me from "../assets/me.jpg";
import AboutSkills from "./AboutSkills";
import AboutMe from "./AboutMe";
const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="Home ">
      <div className="container mx-auto">
        <div className="home mt-[300px] flex items-center justify-between flex-wrap">
          <div
            className="home-one flex flex-col gap-1 text-blue-950  font-sans font-extrabold "
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <h2 className=" text-3xl ">Hello!</h2>
            <h2 className="text-3xl">
              My name is <br /> <span className="text-sky-500">Mirmansur</span>
            </h2>
            <h2 className="text-3xl">I'm Frond Developer</h2>
          </div>
          <div
            className="home-two"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <img
              src={me}
              alt=""
              className=" rounded-[50%] w-[430px] h-[430px] "
            />
          </div>
        </div>
        <AboutSkills />
        <AboutMe />
      </div>
    </div>
  );
};

export default Home;
