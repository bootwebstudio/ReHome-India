import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full h-full mb-8 rounded-md text-neutral bg-dark">
      <div className="w-full p-8 flex flex-col lg:flex-row gap-12 lg:gap-20">
        {/* Logo / Brand */}
        <div className="flex-1 flex flex-col items-center lg:items-start gap-4">
          <div className="w-fit flex flex-col items-center lg:items-start">
            <h2 className="text-4xl font-bold leading-none">YeLo</h2>
            <span className="text-xs font-bold leading-none uppercase">
              Furnitures
            </span>
          </div>
          <p className="w-full text-base lg:text-lg leading-tight text-center lg:text-left">
            ReHome India is the best pre-owned furniture marketplace in India
            offering the best condition furniture at an affordable price.
          </p>
        </div>

        {/* Links + Newsletter */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:flex lg:justify-between gap-12">
          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-12 lg:gap-20">
            {/* Quick Links */}
            <div className="flex flex-col gap-2 lg:gap-4 items-center sm:items-start">
              <h4 className="text-xl font-bold">Quick Links</h4>
              <div className="text-base lg:text-lg flex flex-col gap-2 text-center sm:text-left">
                <Link to="/">Home</Link>
                <Link to="/about-us">About us</Link>
                <Link to="/purchase">Shop</Link>
                <Link to="/sell">Sell Furniture</Link>
                <Link to="/contact">Contact Us</Link>
              </div>
            </div>

            {/* Collection */}
            <div className="flex flex-col gap-2 lg:gap-4 items-center sm:items-start">
              <h4 className="text-xl font-bold">Collections</h4>
              <div className="text-base lg:text-lg flex flex-col gap-2 text-center sm:text-left">
                <Link to="/">Seating</Link>
                <Link to="/">Tables</Link>
                <Link to="/">Beds</Link>
                <Link to="/">Storage</Link>
                <Link to="/">Home Decor</Link>
              </div>
            </div>
          </div>

          {/* Newsletter / Social */}
          <div className="flex flex-col gap-4 items-center sm:items-start">
            <h4 className="text-xl font-bold">Newsletter</h4>
            <p className="text-base lg:text-lg leading-none text-center sm:text-left">
              Subscribe for new deals and offers.
            </p>
            <div className="w-full flex flex-col gap-2">
              <input
                type="tel"
                placeholder="Enter WhatsApp Number"
                className="flex-1 p-2.5 px-4 rounded-md focus:outline-none placeholder:text-dark/50 text-dark bg-neutral"
              />
              <button className="p-2.5 px-4 rounded-md text-neutral bg-brand">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mx-8 border-t border-neutral">
        <div className="w-full p-4 px-0 text-sm lg:text-base flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p>© {new Date().getFullYear()} ReHome India. All rights reserved.</p>
          {/* Policies */}
          <div className="flex flex-col lg:flex-row gap-4 md:gap-8">
            <Link to="/">FAQs</Link>
            <Link to="/">Return Policies</Link>
            <Link to="/">Shipping Policies</Link>
            <Link to="/">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
