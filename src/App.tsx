import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import About from "@components/About/About";
import Benefits from "@components/Benefits/Benefits";
import Contact from "@components/Contact/Contact";
import Faq from "@components/Faq/Faq";
import Footer from "@components/Footer/Footer";
import Hero from "@components/Hero/Hero";
import HowToJoin from "@components/HowToJoin/HowToJoin";
import ManagerWidget from "@components/ManagerWidget/ManagerWidget";
import Mission from "@components/Mission/Mission";
import Nav from "@components/Nav/Nav";
import Types from "@components/Types/Types";

const App = () => (
  <>
    <Nav />
    <main>
      <Hero />
      <Mission />
      <About />
      <Benefits />
      <Types />
      <HowToJoin />
      <Faq />
      <Contact />
    </main>
    <Footer />
    <ManagerWidget />
    <ToastContainer
      position="top-right"
      autoClose={5000}
      theme="dark"
      newestOnTop
      limit={3}
    />
  </>
);

export default App;
