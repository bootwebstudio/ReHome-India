import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="w-full h-full p-4 px-0 border-b border-dark flex items-center justify-between relative">
      {/* Brand Logo */}
      <Link to="/" className="flex flex-col items-center">
        <img src="/Logo.png" alt="" className="w-36 lg:w-48" />
      </Link>

      {/* Navigation Menu */}
      <div className="flex items-center gap-4 xl:hidden">
        <div className="text-xl leading-none flex gap-4">
          <i className="ri-search-line"></i>
          <i className="ri-poker-hearts-line"></i>
          <i className="ri-shopping-bag-line"></i>
          <i className="ri-user-line"></i>
        </div>
        <div
          onClick={() => setNavOpen(!navOpen)}
          className="p-1.5 px-2.5 text-xl rounded-full text-neutral bg-brand"
        >
          <i
            className={`${navOpen ? "ri-close-large-line" : "ri-menu-5-line"}`}
          ></i>
        </div>
      </div>

      {/* Movile Links */}
      <div
        className={`w-full p-4 mt-4 rounded-md border border-dark ${
          navOpen ? "flex" : "hidden"
        } lg:hidden flex-col items-center gap-4 absolute top-full right-0 bg-neutral z-50`}
      >
        <Link to="/" className="text-xl leading-none">
          Home
        </Link>
        <Link to="/about-us" className="text-xl leading-none">
          About us
        </Link>
        <div className="flex items-end gap-[5px]">
          <Link to="/purchase" className="text-xl leading-none">
            Purchase
          </Link>
        </div>
        <Link to="/blogs" className="text-xl leading-none">
          Blogs
        </Link>
        <Link to="/contact" className="text-xl leading-none">
          Contact
        </Link>

        <Link
          to="/sell"
          className="w-full p-4 text-xl text-center leading-none rounded-md text-neutral bg-brand"
        >
          Become a seller
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="hidden xl:flex items-center gap-8">
        <Link to="/" className="text-lg leading-none">
          Home
        </Link>
        <Link to="/about-us" className="text-lg leading-none">
          About us
        </Link>
        <div className="flex items-end gap-[5px]">
          <Link to="/purchase" className="text-lg leading-none">
            Purchase
          </Link>
        </div>
        <Link to="/blogs" className="text-lg leading-none">
          Blogs
        </Link>
        <Link to="/contact" className="text-lg leading-none">
          Contact
        </Link>

        <div className="text-lg leading-none flex gap-4">
          <i className="ri-search-line"></i>
          <i className="ri-poker-hearts-line"></i>
          <i className="ri-shopping-bag-line"></i>
          <i className="ri-user-line"></i>
        </div>

        <Link
          to="/sell"
          className="p-4 px-4 text-lg text-center leading-none rounded-md text-neutral bg-brand"
        >
          Become a seller
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
