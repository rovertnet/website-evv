import { Routes, Route } from "react-router-dom";
import Footer from "./component/footer/Footer";
import NavBar from "./component/header/NavBar"
import Home from "./pages/Home";
import EventsSection from "./pages/Evenement";
import Contact from "./pages/Contact";
import Ebook from "./pages/Ebook";

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/evenement" element={<EventsSection />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ebook" element={<Ebook />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App
