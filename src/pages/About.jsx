import { Link } from "react-router-dom";

// Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Images
import Trusted from "../assets/Trusted.png";
import Savings from "../assets/Savings.png";
import Sustainable from "../assets/Sustainable.png";
import Collections from "../assets/Collections.png";
import Sell from "../assets/Sell.png";
import Purchase from "../assets/Purchase.png";

const About = () => {
  const aboutImages = {
    about: "https://images.unsplash.com/photo-1720247520881-672bc136da8a",
    mission:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    values:
      "https://images.unsplash.com/photo-1616627562394-36d1a85a28d0?auto=format&fit=crop&w=1200&q=80",
    how: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    join: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  };

  return (
    <div className="w-full h-full px-4 xl:px-16 text-dark bg-neutral/85 font-[Modernist]">
      <Navbar />

      {/* Hero Section */}
      <div className="w-full h-[60vh] md:h-[70vh] mt-8 rounded-md relative overflow-hidden">
        <img
          src={aboutImages.about}
          alt="About ReHome India"
          className="w-full h-full rounded-md object-cover brightness-80"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-neutral bg-dark/60">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Us</h2>
          <p className="w-full md:w-[60%] lg:w-[50%] p-4 md:px-8 lg:px-16 text-lg md:text-xl leading-tight">
            ReHome India is India's most trusted marketplace for pre-owned
            furniture and decor.
            <br />
            <br />
            All the furniture and decor listed are verified ensuring a new like
            condition furniture.
          </p>
        </div>
      </div>

      <div className="w-full p-8 px-0 flex flex-col items-center gap-8">
        {/* Our Mission */}
        <div className="w-full lg:w-[50%] lg:text-center flex flex-col lg:items-center gap-8">
          <h2 className="text-4xl font-bold text-center leading-none underline">
            Our Mission
          </h2>
          <p className="text-lg md:text-xl text-center leading-tight">
            We believe great furniture should never go to waste. Our mission is
            to
            <b> give every piece a second life</b> — helping homes across India
            look amazing without overspending.
            <br />
            <br />
            <span className="font-semibold text-dark">
              Simple. Sustainable. Smart.
            </span>
          </p>
        </div>

        {/* What You'll Get? */}
        <div className="w-full lg:text-center flex flex-col items-center gap-8">
          <h2 className="text-4xl font-bold text-center leading-none underline">
            What You'll Get?
          </h2>
          <div className="w-[85%] lg:w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 text-lg leading-tight">
            <div className="p-8 px-4 text-center flex flex-col items-center gap-4 rounded-md bg-white">
              <img src={Trusted} alt="" className="w-20 md:w-32" />
              <b className="text-xl leading-none">Trusted Marketplace</b>
              <p className="text-lg leading-tight">
                Verified sellers and safe transactions.
              </p>
            </div>
            <div className="p-8 px-4 text-center flex flex-col items-center gap-4 rounded-md bg-white">
              <img src={Savings} alt="" className="w-20 md:w-32" />
              <b className="text-xl leading-none">Smart Savings</b>
              <p className="text-lg leading-tight">
                Premium furniture at affordable prices.
              </p>
            </div>
            <div className="p-8 px-4 text-center flex flex-col items-center gap-4 rounded-md bg-white">
              <img src={Sustainable} alt="" className="w-20 md:w-32" />
              <b className="text-xl leading-none">Sustainable Choice</b>
              <p className="text-lg leading-tight">
                Good for your home, great for the planet.
              </p>
            </div>
            <div className="p-8 px-4 text-center flex flex-col items-center gap-4 rounded-md bg-white">
              <img src={Collections} alt="" className="w-20 md:w-32" />
              <b className="text-xl leading-none">Curated Collections</b>
              <p className="text-lg leading-tight">
                Sofas, beds, tables, storage, décor, and more.
              </p>
            </div>
          </div>
        </div>

        {/* How It Works? */}
        <div className="w-full lg:w-[60%] lg:text-center flex flex-col lg:items-center gap-8">
          <h2 className="text-4xl font-bold text-center leading-none underline">
            How It Works?
          </h2>
          <div className="w-full flex flex-col lg:flex-row gap-4 lg:gap-8">
            <div className="w-full h-full p-8 rounded-md flex flex-col items-center gap-4 bg-white">
              <img src={Sell} alt="" className="w-1/2" />
              <h2 className="text-2xl lg:text-4xl font-bold leading-none">
                For Sellers
              </h2>
              <ul className="w-full px-4 list-decimal text-base lg:text-xl text-start leading-tight">
                <li className="">Click photos of the product.</li>
                <li className="">List the product on our website.</li>
                <li className="">Add details and images of the product.</li>
                <li className="">
                  Our team will pick up once someone order the product.
                </li>
                <li className="">You'll get paid once order delivered.</li>
              </ul>
              <Link
                to="/sell"
                className="mt-2 p-4 px-8 text-base lg:text-xl leading-none rounded-md text-white bg-brand"
              >
                Become a seller
              </Link>
            </div>
            <div className="w-full h-full p-8 rounded-md flex flex-col items-center gap-4 bg-white">
              <img src={Purchase} alt="" className="w-1/2" />
              <h2 className="text-2xl lg:text-4xl font-bold leading-none">
                For Buyers
              </h2>
              <ul className="w-full px-4 list-decimal text-base lg:text-xl text-start leading-tight">
                <li className="">Browse products from our website.</li>
                <li className="">Select the product to purchase.</li>
                <li className="">Add shipping details and place the order.</li>
                <li className="">
                  Our team will deliver the product to door-step.
                </li>
                <li className="">
                  Give cash to the team once the order get delivered.
                </li>
              </ul>
              <Link
                to="/purchase"
                className="p-4 px-8 text-base lg:text-xl leading-none rounded-md text-white bg-brand"
              >
                Explore all furniture
              </Link>
            </div>
          </div>
        </div>

        {/* ReHome India */}
        <div className="w-full lg:w-[60%] lg:text-center flex flex-col lg:items-center gap-4">
          <h2 className="text-4xl font-bold text-center leading-none underline">
            ReHome India
          </h2>
          <p className="text-lg leading-tight">
            ReHome started with a simple thought: why should good furniture go
            to waste? We saw families struggling with high prices of new
            furniture and others throwing away pieces still in perfect
            condition.
            <br />
            <br />
            So we built ReHome India — a space where furniture finds a second
            life and homes get the beauty they deserve.
          </p>
        </div>

        {/* Join the Movement */}
        <div className="w-full lg:w-[60%] lg:text-center flex flex-col lg:items-center gap-4">
          <h2 className="text-4xl font-bold text-center leading-none underline">
            Join the Movement
          </h2>
          <p className="text-lg leading-tight">
            Whether you're moving cities, refreshing your space, or finding the
            perfect sofa for your first home — <b>ReHome is here.</b>
            <br />
            <br />
            We're more than a marketplace. We're a community that believes in
            style, savings, and sustainability.
            <br />
            <br />
            <b>Let's reimagine homes together.</b>
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
