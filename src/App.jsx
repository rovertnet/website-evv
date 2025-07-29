import { Routes, Route } from "react-router-dom";
import Footer from "./component/footer/Footer";
import NavBar from "./component/header/NavBar"
import Home from "./pages/Home";
import EventsSection from "./pages/Evenement";
import Contact from "./pages/Contact";
import Ebook from "./pages/Ebook";
import BookDetail from "./component/ebook/BookDetail";
import AboutPage from "./pages/AboutPage";
import ForumPage from "./pages/forum/ForumPge";
import DiscussionChat from "./pages/forum/DiscussionChat";

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/evenement" element={<EventsSection />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ebook" element={<Ebook />} />
        <Route path="/livres/:id" element={<BookDetail />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/forum" element={<ForumPage />} />
        <Route path="/forum/creer" element={<DiscussionChat />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App
