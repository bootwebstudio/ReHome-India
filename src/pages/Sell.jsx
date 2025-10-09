import { Link } from "react-router-dom";

// Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Sell = () => {
  return (
    <div className="w-full h-full px-4 xl:px-16 text-dark bg-neutral/85 font-[Modernist]">
      <Navbar />

      <div className="w-full h-full p-8 px-0 flex flex-col items-center gap-8">
        <h2 className="lg:w-[60%] text-4xl font-bold text-center leading-none underline">
          Turn Your Old Furniture Into Instant Value
        </h2>
        <p className="lg:w-[60%] text-lg text-center leading-tight">
          ReHome India helps you sell your pre-loved furniture easily. List it
          once, connect with buyers, and make space for something new.
        </p>

        {/* Benefits */}
        <div className="w-full lg:w-[60%] h-full flex flex-col items-center gap-8">
          <h2 className="text-4xl font-bold leading-none underline">
            Benefits of Selling on ReHome India
          </h2>
          <ul className="flex flex-col gap-4 text-lg leading-tight">
            <li>
              <b>Hassle-Free Selling:</b> Fill a form, upload product images and
              got listed.
            </li>
            <li>
              <b>Verified Buyers:</b> Connect with real buyers who value good
              furniture.
            </li>
            <li>
              <b>Smart Pricing:</b> Get insights on market rates so you never
              underprice your items.
            </li>
            <li>
              <b>Sustainable Choice:</b> Give furniture a second life and reduce
              waste.
            </li>
          </ul>
        </div>

        {/* How It Works */}
        <div className="w-full lg:w-[60%] h-full flex flex-col items-center gap-8">
          <h2 className="text-4xl font-bold leading-none underline">
            How It Works?
          </h2>
          <ul className="flex flex-col gap-4 text-lg leading-tight">
            <li>
              <b>1. List Your Item:</b> Upload clear photos, add details, and
              set expected price.
            </li>
            <li>
              <b>2. Get Verified:</b> We verify listings to keep the platform
              genuine.
            </li>
            <li>
              <b>3. Get Order:</b> Once a buyer purchases, we arrange for a safe
              pickup immediately.
            </li>
            <li>
              <b>4. We Ship & You Earn:</b> ReHome handles delivery to the
              buyer, and you receive payment securely once the sale is complete.
            </li>
          </ul>
        </div>

        {/* CTA Section */}
        <div className="w-full h-full flex flex-col items-center gap-8">
          <h2 className="text-4xl font-bold leading-none underline">
            Start Selling Your Furniture
          </h2>
          <p className="text-lg leading-tight">
            Join thousands of happy sellers who made space, money, and impact
            with ReHome India.
          </p>
          <Link
            to="/sell/form"
            className="w-full lg:w-fit p-4 px-16 text-xl text-center leading-none rounded-md text-neutral bg-brand"
          >
            Start Selling
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Sell;
