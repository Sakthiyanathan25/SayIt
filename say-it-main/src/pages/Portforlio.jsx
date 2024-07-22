const Portforlio = () => {
  const projects = [
    { id: 1, name: "Sivam Holdings", logo: "./src/assets/Sivam.jpg", desc: "", link: "https://sivamholdings.ca/" },
    { id: 2, name: "Seabird Immigration", logo: "./src/assets/seabirdImmigration.png", desc: "", link: "https://seabirdimmigration.ca/" },
    { id: 3, name: "Seabird Travels", logo: "./src/assets/seabirdTravels.png", desc: "", link: "https://seabirdtravel.ca/" },
    { id: 4, name: "Bombay Street Tadka", logo: "./src/assets/BST.png", desc: "", link: "https://bombaystreettadka.ca/" },
    { id: 5, name: "Roh Technologies", logo: "./src/assets/rohtech.png", desc: "", link: "https://novajobs.us/" },
    { id: 6, name: "Sigaram", logo:  "./src/assets/sigaramGroup.svg", desc: "", link: "http://www.sigaram.net.in/" },
    { id: 7, name: "Rajarams", logo: "./src/assets/Rajarams.avif", desc: "", link: "https://rajarams.com/" },
    { id: 8, name: "JBL Pharmaceuticals", logo: "./src/assets/JBL.png", desc: "", link: "https://jblpharmaceuticals.com/" },
    { id: 9, name: "Raja Mobile Clinic", logo: "./src/assets/RajMobileClinic.png", desc: "", link: "https://www.rajmobileclinic.com/" },
    { id: 10, name: "MN Jewel Park", logo:  "./src/assets/MNJEWEL.png", desc: "", link: "https://www.mnjewelpark.com/" },
    {
      id: 11,
      name: "University of Timorese Catholic",
      logo:  "./src/assets/UCT.jpeg",
      desc: "",
      link: "https://uct.edventurepeople.com/",
    },
    { id: 12, name: "Ceedos", logo: "./src/assets/ceedos.png", desc: "", link: "https://ceedos.edventurepeople.com/" },
    { id: 13, name: "IFS", logo: "./src/assets/ifs.png", desc: "", link: "https://ignisfiresystems.com/" },
    { id: 14, name: "DD Global", logo: "./src/assets/DDglobal.jpg", desc: "", link: "https://www.ddglobal.in/" },
    { id: 15, name: "Raja Lakshmi Fine Arts", logo: "./src/assets/RajaLakshmiFineArts.png", desc: "", link: "https://rajalakshmionline.com/" },
    { id: 16, name: "Aiera", logo: "./src/assets/Aiera.png", desc: "", link: "http://aieraadvert.com/" },
    { id: 17, name: "Tena Health Care", logo: "./src/assets/TenaHealthCare.png", desc: "", link: "https://tenahealthcare.com/" },
    { id: 18, name: "ST Consultancy", logo: "./src/assets/STconsultants.png", desc: "", link: "https://stconsultants.in/" },
    { id: 19, name: "Job Score", logo:  "./src/assets/jobScore.png", desc: "", link: "https://jobscore.in/" },
    /*{ id: 20, name: "Victory Job Consultancy", logo: "", desc: "", link: "" },*/
    { id: 21, name: "Four Phoenix", logo: "./src/assets/FourPhoenix.png", desc: "", link: "https://www.fourphoenix.com/" },
    { id: 22, name: "Victory Job Consultancy", logo: "./src/assets/VictoryJobs.png", desc: "", link: "https://victoryjobconsultancy.com/" },
    
    { id: 23,
       name: "Alibaba Bio Tech", 
      logo: "./src/assets/AlibabaBioTech.jpeg", 
      desc: "", 
      link: "https://www.alibababiotec.com/" },
   
      { id: 24, name: "Bizlane",
       logo: "./src/assets/Bizlane.png",
       desc: "",
        link: "https://bizlane.in/" },
    {
      id: 25,
      name: "Naga Store",
      logo: "./src/assets/Naga.png",
      desc: "Naga is a no 1 fmcg brand  for which we provide exclusive offers for the Naga food product lovers",
      link: "https://nagastore.in/",
    },
    {
      id: 26,
      name: "Mannavan",
      logo:  "./src/assets/Mannavan.png",
      desc: "Mannavan milk being a leading milk and diary products manufacturer and supplier in TN border branded by our unique 360° brand reach strategies",
      link: "https://mannavan.in/",
    },
    {
      id: 27,
      name: "Rajiv Gandhi IAS Academy",
      logo: "./src/assets/RajivGandhiIAS.png",
      desc: "A reputed IAS academy in the heart of Chennai serving young aspirants with our unmatchable LMS solutions",
      link: "https://rajivgandhiiasacademy.com/",
    },
    {
      id: 28,
      name: "Shaadi Tamil",
      logo: "",
      desc: "Iconic matrimony service in the headquarters serving South Indian clients via match making portal and mobile app",
      link: "https://shaaditamil.com/",
    },
    {
      id: 29,
      name: "Rajiv Gandhi Neet Academy",
      logo: "./src/assets/Rajivgandhi.png",
      desc: "A reputed IAS academy in the heart of Chennai serving young aspirants with our unmatchable LMS solutions",
      link: "https://rajivgandhiiitacademy.com/",
    },
    {
      id: 30,
      name: "Keystone IAS Academy",
      logo: "./src/assets/KeyStoneRedAcademy.png",
      desc: "An IAS academy by Government officers brightening the students' career with our technical guidance and platform",
      link: "https://keystoneiasacademy.com/",
    },
    { id: 31, name: "Prime Organic", logo: "", desc: "", link: "" },
    {
      id: 32,
      name: "All in Media",
      logo: "./src/assets/AllINMedia.png",
      desc: "A digital marketing company for whom we support and serve as a collaboration",
      link:"https://allinmedia.in/",
    },
    {
      id: 33,
      name: "EduVantage",
      logo: "./src/assets/eduVantage.png",
      desc: "Placing US tax agents with our Ed tech solutions",
      link:"https://studyenrolledagent.com/",
    },
    {
      id: 34,
      name: "RTL Insitute of Hotel Management",
      logo: "./src/assets/RLT.jpeg",
      desc: "A hotel management college where our technical and business consultation is rendered",
      link:"https://www.rltiihm.com/",
    },
    {
      id: 35,
      name: "Concept Tree",
      logo: "./src/assets/conceptTree.jpeg",
      desc: "Lead generation strategies served best by us for the school students on behalf of this coaching academy",
      link:"https://conceptreedigital.com/",
    },
    {
      id: 36,
      name: "Communication Design Company",
      logo: "./src/assets/comudeslogo.png",
      desc: "Our service best given as a pioneer Technology partner",
      link:"https://comudes.com/",
    },
    {
      id: 37,
      name: "Indo Med",
      logo: "./src/assets/indomed.jpeg",
      desc: "Our customised web development and business development skills for a company to study abroad",
      link:"https://www.indomed.org/",
    },
  ];
  return (
    <main className=" min-h-[100vh] flex flex-col items-center gap-5 w-full px-20">
      {" "}
      <div className="border-b-[2px] border-blue-500 w-[90%]"></div>
      <h1 className="text-6xl font-bold text-blue-500 py-10 lg:text-left text-center">Our Projects</h1>
      <section className="flex flex-wrap gap-4 items-center justify-center">
        {projects.map(({ id, name, logo, desc, link }) => (
          <div
            key={id}
           
            className="bg-[#f5f5f5] w-[400px] h-[450px] p-5 rounded-md cursor-pointer hover:scale-105 transition-all duration-700"
          >
            <div className="w-full h-[50%] bg-gradient-to-r from-blue-300 to-purple-300 rounded-md">
              <a href={link} className="flex justify-center items-center m-auto h-52 w-1/2">
              <img src={logo} alt={name} className=""  />
              </a>
            </div>
            <div className="flex text-base flex-col pt-5 items-center">
              <h2 className="text-xl font-semibold pb-3"> {name}</h2>
              <span className="text-md text-center">{desc}</span>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Portforlio;
