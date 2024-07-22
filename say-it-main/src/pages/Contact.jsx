import { FaMapLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiEnvelope } from "react-icons/hi2";

const Contact = () => {
  const contactDetails = [
    { id: 1, icon: <FaMapLocationDot />, detail: "Address" },
    { id: 2, icon: <BsFillTelephoneFill />, detail: "Phone" },
    { id: 3, icon: <HiEnvelope />, detail: "Email" },
  ];
  return (
    <main className="h-fit w-full bg-[#f5f5f5] mt-10 lg:p-20 py-44  px-10 " id="contact">
      <h1 className="text-center text-5xl font-semibold text-blue-500">
        Get In Touch
      </h1>
      <section className="flex lg:flex-row flex-col lg:items-start items-center justify-between gap-5 py-10">
        <div className="lg:w-[50%] w-full">
          <ul className="">
            {contactDetails.map(({ id, icon, detail }) => (
              <li key={id} className="flex gap-2 items-center">
                <span className="text-4xl text-blue-500">{icon}</span>
                <p className="text-xl text-blue-500 ">{detail}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:w-[50%] w-full">
          <form className=" w-fit rounded-md flex flex-col items-center p-5 bg-gradient-to-l from-blue-400 to-purple-400">
            <h3 className="text-white text-center pt-5 text-xl">Let&apos;s Chat</h3>
            <h3 className="text-white text-center pb-5">Feel free to contact us</h3>
            <div className="mb-3 flex gap-3 items-center">
              <label className="text-white w-20">Name</label>
              <input type="text" className="bg-transparent border-[2px] border-white rounded-full px-4 text-white py-1 w-72 outline-none"/>
            </div>
            <div className="mb-3 flex gap-3 items-center">
              <label className="text-white w-20">Subject</label>
              <input type="text" className="bg-transparent border-[2px] border-white rounded-full px-4 text-white py-1 w-72 outline-none"/>
            </div>
            <div className="mb-3 flex gap-3">
              <label className="text-white w-20">Message</label>
              <textarea rows={5} className="bg-transparent border-[2px] border-white rounded-md px-4 text-white py-1 w-72 outline-none"/>
            </div>
            <button className="bg-white rounded-tr-0 rounded-tl-md rounded-bl-md rounded-br-md py-2 w-32 text-blue-500 hover:bg-gradient-to-r hover:text-white hover:from-blue-500 hover:to-purple-500 transition-all duration-700">Send</button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Contact;
