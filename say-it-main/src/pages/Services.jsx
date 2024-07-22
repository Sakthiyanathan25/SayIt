import { FaLaptopCode } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";
import { SiHiveBlockchain } from "react-icons/si";
import { BiSolidMobile } from "react-icons/bi";
import { FaArtstation } from "react-icons/fa";
import { FaCloud } from "react-icons/fa";
import { HiChartBar } from "react-icons/hi";
import { TbSettingsAutomation } from "react-icons/tb";

const Services = () => {
  const serves = [
    {
      id: 1,
      name: "Application Development",
      icon: <FaLaptopCode />,
      desc: "Build web, mobile apps (iOS/Android) for smooth user experience. ",
    },
    {
      id: 2,
      name: "AI and Machine Learning",
      icon: <GiArtificialIntelligence />,
      desc: "AI builds smart systems that learn & decide like humans.",
    },
    {
      id: 3,
      name: "Blockchain and Decentralized Technologies",
      icon: <SiHiveBlockchain />,
      desc: "Blockchain secures transactions & data transparently.",
    },
    {
      id: 4,
      name: "UI/UX Design",
      icon: <BiSolidMobile />,
      desc: "User-friendly interactions for products.",
    },
    {
      id: 5,
      name: "Cloud Services",
      icon: <FaCloud />,
      desc: "Online access to computing resources (storage, power, software).",
    },
    {
      id: 6,
      name: "Graphic Design",
      icon: <FaArtstation />,
      desc: "Create visual messages with art & technology.",
    },
    {
      id: 7,
      name: "Digital Marketing and Branding",
      icon: <HiChartBar />,
      desc: "Online promotion of products & services (SEO, social media, etc.)",
    },
    {
      id: 8,
      name: "Automation of Things",
      icon: <TbSettingsAutomation />,
      desc: "Automate processes for efficiency (industries, homes, IoT).",
    },
  ];
  return (
    <main
      className="h-fit bg-[#f5f5f5] flex flex-col items-center gap-5 w-full lg:p-20 py-44  px-10 "
      id="services"
    >
      {" "}
      <h1 className="text-6xl font-bold text-blue-500 lg:text-left text-center">Our Services</h1>
      <section className="flex lg:flex-row flex-col flex-wrap gap-4 items-center justify-center  ">
        {serves.map(({ id, name, icon, desc }) => (
          <div
            key={id}
            className="bg-gradient-to-r from-blue-500 to-purple-700 text-white gap-4 flex items-center px-5 py-4 lg:w-1/4 w-full h-[120px] border-[2px] rounded-tr-[30px] rounded-bl-[30px] hover:scale-105 transition-all duration-700 cursor-pointer"
          >
            <span className="text-5xl">{icon}</span>
            <div className="flex text-base flex-col">
              <h2> {name}</h2>
              <span className="text-xs">{desc}</span>
            </div>
          </div>
        ))}
      </section>
      
    </main>
  );
};

export default Services;
