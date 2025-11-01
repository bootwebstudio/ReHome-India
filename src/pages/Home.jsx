import { useMemo } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import "swiper/css";

// Data
import mainData from "../mainData";
import reviewsData from "../reviewsData";
import categoriesData from "../categoriesData";

// Icons
import { RiAddLargeLine } from "react-icons/ri";

// Images
import Sell from "../assets/Sell.png";
import Purchase from "../assets/Purchase.png";
import NotFound from "../assets/NotFound.png";

// Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FurnitureCard from "../components/FurnitureCard";

const Home = () => {
  const [sortOption, setSortOption] = useState("");
  const [showFilter, setShowFilter] = useState(false);

  const categories = [
    "All Furniture",
    "Seating",
    "Tables",
    "Beds",
    "Storage",
    "Home Decor",
  ];

  const [activeCat, setActiveCat] = useState("All Furniture");

  // Filtering + Sorting
  const filteredData = useMemo(() => {
    let data =
      activeCat === "All Furniture"
        ? mainData
        : mainData.filter((item) => item.parentCat === activeCat);

    // Sorting logic
    if (sortOption === "lowToHigh") {
      data = [...data].sort((a, b) => a.price - b.price);
    } else if (sortOption === "highToLow") {
      data = [...data].sort((a, b) => b.price - a.price);
    } else if (sortOption === "discount") {
      data = [...data].sort((a, b) => {
        const discA = ((a.originalPrice - a.price) / a.originalPrice) * 100;
        const discB = ((b.originalPrice - b.price) / b.originalPrice) * 100;
        return discB - discA;
      });
    }

    return data;
  }, [activeCat, sortOption]);

  const [activeIndex, setActiveIndex] = useState(0);

  const features = [
    {
      title: "Expert-Certified Furniture",
      description:
        "All furniture listed is inspected and certified for premium condition before it appears on our platform.",
    },
    {
      title: "24-Hour Returns",
      description:
        "We offer a 24-hour hassle-free return window to ensure you shop with complete confidence.",
    },
    {
      title: "Installment Plans (Financing Options)",
      description:
        "Flexible installment plans let you furnish your space now and spread the cost over time.",
    },
    {
      title: "Direct Pickup & Shipment at Door-step",
      description:
        "We handle logistics from seller's home to your door, ensuring seamless pickup and delivery.",
    },
  ];

  // Handle clicking on a feature
  const handleToggle = (index) => {
    // If user clicks the already-active one, do nothing
    if (activeIndex === index) return;
    // Otherwise switch to the clicked index
    setActiveIndex(index);
  };

  return (
    <div className="w-full h-full px-4 xl:px-16 text-dark bg-neutral/85 font-[Modernist]">
      <Navbar />

      {/* Promotional Banners */}
      <div className="w-full h-full pt-8">
        <div className="w-full h-[20vh] xl:h-[50vh] rounded-md bg-dark/15"></div>
      </div>

      {/* Featured Furnitures */}
      <div className="w-full h-full pt-8 flex flex-col gap-8">
        {/* Categories + Filter */}
        <div className="w-full flex items-center justify-between gap-4">
          {/* Categories (scrollable) */}
          <div className="w-full flex items-center gap-4 overflow-x-auto">
            {categories.map((cat) => (
              <h4
                key={cat}
                onClick={() => setActiveCat(cat)}
                className={`w-full p-2 px-4 text-base lg:text-lg text-center capitalize whitespace-nowrap rounded-md border cursor-pointer transition duration-200 ${
                  activeCat === cat
                    ? "border-brand text-neutral bg-brand"
                    : "border-dark text-dark hover:bg-brand hover:text-neutral hover:border-brand"
                }`}
              >
                {cat}
              </h4>
            ))}
          </div>

          {/* Filter Icon (not scrollable) */}
          <div className="relative flex-shrink-0">
            <button
              onClick={() => setShowFilter(!showFilter)}
              className="p-1.5 px-4 text-lg rounded-md border border-dark"
            >
              <i className="ri-equalizer-2-line"></i>
            </button>

            {/* Filter Options */}
            {showFilter && (
              <div className="mt-2 p-2 absolute top-full right-0 rounded-md flex flex-col border border-brand bg-neutral z-50 shadow-lg">
                <button
                  onClick={() => {
                    setSortOption("lowToHigh");
                    setShowFilter(false);
                  }}
                  className="p-2 px-4 rounded-md whitespace-nowrap"
                >
                  Price: Low to High
                </button>
                <button
                  onClick={() => {
                    setSortOption("highToLow");
                    setShowFilter(false);
                  }}
                  className="p-2 px-4 rounded-md whitespace-nowrap"
                >
                  Price: High to Low
                </button>
                <button
                  onClick={() => {
                    setSortOption("discount");
                    setShowFilter(false);
                  }}
                  className="p-2 px-4 rounded-md whitespace-nowrap"
                >
                  Highest Discount
                </button>
                <button
                  onClick={() => {
                    setSortOption("");
                    setShowFilter(false);
                  }}
                  className="p-2 px-4 rounded-md whitespace-nowrap text-brand"
                >
                  Reset Filter
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Furnitures Carousel */}
        {filteredData.length > 0 ? (
          <Swiper
            spaceBetween={16}
            slidesPerView={1.5}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="w-full"
          >
            {filteredData.map((item) => (
              <SwiperSlide key={item.id}>
                <FurnitureCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="w-full h-full text-lg flex flex-col items-center gap-8">
            <img src={NotFound} alt="" className="h-60 lg:h-80" />
            <p className="text-xl">
              🚫 No products found in <b>{activeCat}</b>
            </p>
          </div>
        )}
      </div>

      {/* Qualities */}
      <div className="w-full h-full p-12 px-0 lg:p-20 lg:px-0 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <div className="w-full h-full flex flex-col items-center gap-2 lg:gap-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-center">850+</h2>
          <p className="w-[80%] text-lg lg:text-xl text-center leading-tight">
            Customers have trusted us for pre-owned funiture
          </p>
        </div>
        <div className="w-full h-full flex flex-col items-center gap-2 lg:gap-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-center">225+</h2>
          <p className="w-[80%] text-lg lg:text-xl text-center leading-tight">
            Pre-owned furnitures have been sold with ease
          </p>
        </div>
        <div className="w-full h-full flex flex-col items-center gap-2 lg:gap-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-center">
            98<span className="font-serif">%</span>
          </h2>
          <p className="w-[80%] text-lg lg:text-xl text-center leading-tight">
            Customers are satisfied from the purchased furniture
          </p>
        </div>
      </div>

      {/* Latest Collection */}
      <div className="w-full h-full flex flex-col gap-8">
        <h2 className="text-4xl lg:text-5xl font-bold">
          Our Latest Collections
        </h2>

        <Swiper
          spaceBetween={32}
          slidesPerView={1.5}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="w-full"
        >
          {mainData
            .slice(-10) // number of products
            .reverse()
            .map((item) => (
              <SwiperSlide key={item.id}>
                <FurnitureCard item={item} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>

      {/* Special Features */}
      <div className="w-full h-full p-12 px-0 lg:p-20 lg:px-0 flex flex-col xl:flex-row flex-shrink gap-6 lg:gap-12">
        {/* Left side image or placeholder */}
        <div className="w-full h-[25vh] xl:h-auto rounded-md overflow-hidden bg-dark/15"></div>

        {/* Right side text & accordion */}
        <div className="w-full h-full flex flex-col gap-4">
          {/* Section Heading */}
          <h2 className="text-4xl font-bold leading-none">
            WHY TO CHOOSE <span className="underline">REHOME INDIA</span>?
          </h2>
          <p className="text-lg lg:text-xl leading-tight text-zinc-600">
            ReHome India is the best pre-owned furniture marketplace in India
            offering the best condition furniture at an affordable price.
          </p>

          {/* Accordion container */}
          <div className="pt-4 flex flex-col gap-2">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col">
                {/* Feature header row */}
                <button
                  className="p-4 px-0 border-t border-zinc-600 flex items-center justify-between gap-6"
                  onClick={() => handleToggle(index)}
                >
                  <h4 className="text-xl lg:text-2xl text-left leading-tight">
                    {feature.title}
                  </h4>
                  {/* Change icon */}

                  <RiAddLargeLine
                    className={`text-lg lg:text-xl transition-all duration-200 ${
                      activeIndex === index ? "rotate-[135deg]" : "rotate-0"
                    }`}
                  />
                </button>

                {/* Feature description */}
                {activeIndex === index && (
                  <p className="pb-4 text-lg leading-tight text-zinc-600">
                    {feature.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="w-full h-full flex flex-col gap-8">
        <h2 className="text-4xl lg:text-5xl font-bold">Curated Categories</h2>

        <Swiper
          spaceBetween={32}
          slidesPerView={1.5}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="w-full"
        >
          {categoriesData.map((cat, index) => (
            <SwiperSlide>
              <div
                key={index}
                className="w-full h-full overflow-hidden rounded-md flex flex-col items-center gap-2"
              >
                <Link to={cat.route}>
                  <img
                    src={cat.image}
                    alt="Storage Collection"
                    className="w-full h-full rounded-md object-cover"
                  />
                </Link>
                <h4 className="text-xl lg:text-2xl font-bold text-center">
                  {cat.title}
                </h4>
                <p className="text-base lg:text-lg text-center leading-tight text-zinc-600">
                  {cat.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Services */}
      <div className="w-full h-full p-12 px-0 lg:p-20 lg:px-0 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <div className="w-full h-full p-8 rounded-md flex flex-col items-center gap-4 bg-white">
          <img src={Sell} alt="" className="w-1/2" />
          <h2 className="text-2xl lg:text-4xl font-bold leading-none">
            Sell Furnitures
          </h2>
          <p className="text-base lg:text-xl leading-tight text-center">
            Your old furniture needs a new home. ReHome India connects sellers
            with local clients, enabling smooth, quick deals that put cash in
            hand.
          </p>
          <Link
            to="/sell"
            className="p-4 px-8 text-base lg:text-xl leading-none rounded-md text-white bg-brand"
          >
            Become a seller
          </Link>
        </div>
        <div className="w-full h-full p-8 rounded-md flex flex-col items-center gap-4 bg-white">
          <img src={Purchase} alt="" className="w-1/2" />
          <h2 className="text-2xl lg:text-4xl font-bold leading-none">
            Purchase Furnitures
          </h2>
          <p className="text-base lg:text-xl leading-tight text-center">
            ReHome India offers pre-loved furniture. Get trusted items,
            excellent deals, eco benefits, and premium looks for homes with
            instant comfort.
          </p>
          <Link
            to="/purchase"
            className="p-4 px-8 text-base lg:text-xl leading-none rounded-md text-white bg-brand"
          >
            Explore all furniture
          </Link>
        </div>
      </div>

      {/* Reviews */}
      <div className="w-full h-full flex flex-col gap-8">
        <h2 className="text-4xl lg:text-5xl font-bold">Customer Reviews</h2>

        <Swiper
          spaceBetween={32}
          slidesPerView={1.5}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="w-full"
        >
          {reviewsData.map((review, index) => (
            <SwiperSlide>
              <div key={index} className="w-full h-full flex flex-col gap-2">
                <div className="flex gap-2">
                  <div className="p-0.5 px-2 text-sm lg:text-base rounded-full flex items-center gap-1.5 text-white bg-brand">
                    <span>5</span>
                    <i className="ri-star-fill text-sm"></i>
                  </div>
                  <h4 className="text-base lg:text-lg font-bold">Excellent</h4>
                </div>
                <p className="text-base lg:text-lg leading-tight text-zinc-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  quaerat debitis enim blanditiis ab qui?
                </p>
                <img
                  src="https://i.pinimg.com/736x/04/ef/ea/04efea99efd38cb854b3985ff2282eba.jpg"
                  alt=""
                  className="mt-2 rounded-md overflow-hidden"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Newsletter */}
      <div className="w-full h-full p-20 px-0 flex flex-col items-center">
        <div className="w-full lg:w-[80%] h-full p-8 rounded-md flex flex-col gap-4 items-center bg-white">
          <h2 className="text-2xl lg:text-4xl font-bold leading-none">
            Get upto 25<span className="font-[Italiana]">%</span> discount
          </h2>
          <p className="w-full lg:w-[80%] text-lg lg:text-xl leading-tight text-center">
            Join ReHome India newsletter for deals, fresh arrivals, and smart
            furniture solutions direct in chats.
          </p>
          <div className="w-full lg:w-fit mt-2 flex flex-col lg:flex-row gap-4 lg:gap-2">
            <input
              type="tel"
              name="Whatsapp"
              id="Whatsapp"
              placeholder="WhatsApp No. (+91 98765 43210)"
              className="w-full lg:w-[36ch] p-4 text-base lg:text-lg rounded-md focus:outline-none placeholder:text-dark/50 text-dark bg-neutral"
            />
            <button className="text-lg p-4 px-8 leading-none rounded-md text-neutral bg-brand">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
