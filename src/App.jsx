import "./App.css";
import ContactUs from "./components/ContactUs/ContactUs";
import Hero from "./components/Hero/Hero";
import NavbarMenu from "./components/Navbar/NavbarMenu";
import OurServices from "./components/OurServices/OurServices";
import Plans from "./components/Plans/Plans";
import Footer from "./components/Footer/Footer";
import Portfolio from "./components/Portfolio/Portfolio";
function App() {
  return (
    <>
      <NavbarMenu />
      <Hero />
      <OurServices />
      <Portfolio />
      <Plans />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
