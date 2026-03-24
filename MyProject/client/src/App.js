import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";
import NavBar from "./Components/Layout/Navbar";
import Footer from "./Components/Layout/Footer";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import NosOffres from "./Pages/NosOffres";
import Realisation from "./Pages/Realisation";
import NosModeles from "./Pages/NosModeles/NosModeles";
import Contact from "./Pages/Contact";
import ScrollToTop from "./Components/Ui/ScrollToTop";
import NotFound from "./Pages/NotFound";
import CustomCursor from "./Components/Ui/CustomCursor";
import MentionsLegales from "./Pages/MentionsLegales";
import Blog from "./Pages/Blogs/Blog";
import Banners from "./Pages/NosModeles/Banners";
import BlogDetails from "./Pages/Blogs/BlogDetails";
import Login from "./Pages/auth/Login"
// import Register from "./Pages/auth/Register"


const App = () => {
  // Example implementation for isVisible and scrollToTop, adjust as needed
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  

  return (
    <>

          <ScrollToTop />
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/nosoffres" element={<NosOffres />} />
            <Route path="/realisation" element={<Realisation />} />
            <Route path="/nosModeles" element={<NosModeles />} />
            <Route path="/nosmodeles/banniere" element={<Banners />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="mentionslegales" element={<MentionsLegales />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/Blog/:id" element={<BlogDetails />} />
            {/* //login routes */}
          <Route path="/login" element={<Login />} /> 
          <Route path="/*" element={<NotFound />} />
            {/* //login routes */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
          <CustomCursor />

          {isVisible && (
            <button
              onClick={scrollToTop}
              className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-customColor1 to-customColor2 hover:opacity-90 text-white p-3 rounded-full shadow-lg animate-bounce "
            >
              <FiArrowUp className="text-xl" />
            </button>
          )}
        </>

  );
};

export default App;
