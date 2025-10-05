import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Sell from "./pages/Sell";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Purchase from "./pages/Purchase";
import Contact from "./pages/Contact";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sell" element={<Sell />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/purchase" element={<Purchase />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRouter;
