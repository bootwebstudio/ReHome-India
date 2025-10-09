// Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
        {/* About Us */}
        <div className="w-full lg:w-[60%] lg:text-center flex flex-col lg:items-center gap-4">
          <h2 className="text-4xl font-bold leading-none underline">
            About Us
          </h2>
          <p className="text-lg leading-tight">
            ReHome India is India's trusted marketplace for pre-owned furniture
            and décor. We make it easy for people to sell quality furniture they
            no longer need and for others to buy beautiful pieces at honest
            prices.
            <br />
            <br />
            Every item is carefully checked, ensuring you always get furniture
            that feels fresh, stylish, and ready for a new home.
          </p>
        </div>

        {/* Our Mission */}
        <div className="w-full lg:w-[60%] lg:text-center flex flex-col lg:items-center gap-4">
          <h2 className="text-4xl font-bold leading-none underline">
            Our Mission
          </h2>
          <p className="text-lg leading-tight">
            We believe great furniture should not be wasted. Our mission is to
            give every piece a second life, while helping homes across India
            look amazing — without overspending.
            <br />
            <br />
            <b>Simple. Sustainable. Smart.</b>
          </p>
        </div>

        {/* What You'll Get? */}
        <div className="w-full lg:w-[60%] lg:text-center flex flex-col lg:items-center gap-4">
          <h2 className="text-4xl font-bold leading-none underline">
            What You'll Get?
          </h2>
          <ul className="flex flex-col gap-4 text-lg leading-tight">
            <li>
              <b>Trusted Marketplace:</b> Verified sellers and safe
              transactions.
            </li>
            <li>
              <b>Smart Savings:</b> Premium furniture at affordable prices.
            </li>
            <li>
              <b>Sustainable Choice:</b> Good for your home, great for the
              planet.
            </li>
            <li>
              <b>Curated Collections:</b> Sofas, beds, tables, storage, décor,
              and more.
            </li>
          </ul>
        </div>

        {/* How It Works? */}
        <div className="w-full lg:w-[60%] lg:text-center flex flex-col lg:items-center gap-4">
          <h2 className="text-4xl font-bold leading-none underline">
            How It Works?
          </h2>
          <ul className="flex flex-col gap-4 text-lg leading-tight">
            <li>
              <b>For Sellers:</b> List your furniture easily, connect with
              buyers, and earn with zero hassle.
            </li>
            <li>
              <b>For Buyers:</b> Browse curated collections, filter by style,
              and bring home the perfect piece.
            </li>
            <li>
              <b>For Everyone:</b> Save money, save time, save the environment.
            </li>
          </ul>
        </div>

        {/* ReHome India */}
        <div className="w-full lg:w-[60%] lg:text-center flex flex-col lg:items-center gap-4">
          <h2 className="text-4xl font-bold leading-none underline">
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
          <h2 className="text-4xl font-bold leading-none underline">
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
