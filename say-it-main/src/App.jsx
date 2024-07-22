import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Portforlio from "./pages/Portforlio";
const App = () => {
  return (
   <>
    <Header/>
    <Home/>
    <About/>
    <Services/>
    <Portforlio/>
    <Contact/>
    <Footer/>
   </>
  );
};

export default App;
