import { Link } from "react-router-dom";

// Icons
import { RiArrowDownSLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="w-full h-full p-4 px-0 border-b border-dark flex items-center justify-between">
      {/* Brand Logo */}
      <div className="flex flex-col items-center">
        <img src="/Logo.png" alt="" className="w-36 lg:w-48" />
      </div>

      {/* Navigation Menu */}
      <div className="flex items-center gap-4 xl:hidden">
        <div className="text-xl leading-none flex gap-4">
          <i class="ri-search-line"></i>
          <i class="ri-poker-hearts-line"></i>
          <i class="ri-shopping-bag-line"></i>
          <i class="ri-user-line"></i>
        </div>
        <div className="p-1.5 px-2.5 text-xl rounded-full text-neutral bg-brand">
          <i class="ri-menu-3-line"></i>
        </div>
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
          <RiArrowDownSLine />
        </div>
        <Link to="/blogs" className="text-lg leading-none">
          Blogs
        </Link>
        <Link to="/contact" className="text-lg leading-none">
          Contact
        </Link>

        <div className="text-lg leading-none flex gap-4">
          <i class="ri-search-line"></i>
          <i class="ri-poker-hearts-line"></i>
          <i class="ri-shopping-bag-line"></i>
          <i class="ri-user-line"></i>
        </div>

        <button className="p-4 px-4 text-lg leading-none rounded-md text-neutral bg-brand">
          Become a seller
        </button>
      </div>
    </div>
  );
};

export default Navbar;
