import bg from "../assets/bg.png";
import heroImg from "../assets/herobanner.svg";
import { IoIosArrowRoundForward } from "react-icons/io";
const Home = () => {
  return (
    <main id="home">
      <section
        style={{ backgroundImage: `url(${bg})` }}
        className="w-full flex lg:flex-row flex-col items-center justify-center min-h-[100vh] bg-no-repeat bg-cover px-20 pt-10"
      >
        <div className="lg:w-[50%] py-20 w-full flex flex-col items-center lg:items-start gap-3 backdrop:blur-lg lg:px-3 lg:py-2">
          <h1 className="lg:text-6xl text-4xl gap-2 flex flex-col items-center lg:items-start text-blue-500 font-bold">
            <span  className="text-center lg:text-left text-5xl">Welcome To</span>
            <span className="text-center lg:text-left leading-snug">
              Say IT Private <br /> Limited
            </span>
          </h1>
          <h3 className="lg:text-3xl text-xl font-semibold text-blue-400">
            Driving Success, One Click at a Time.
          </h3>
          <div className="my-2 ">
            <button className="px-4 py-2 bg-gradient-to-r text-center from-blue-400 flex items-center justify-center gap-2 to-blue-500 text-white rounded-full shadow-md hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-400 transition-all duration-700 w-48 h-16 text-xl">About us <span className=""><IoIosArrowRoundForward fontSize={30}/></span> </button>
          </div>
        </div>
        <div className="lg:w-[50%] w-full">
          <img src={heroImg} className="w-full" />
        </div>
      </section>
    </main>
  );
};

export default Home;
