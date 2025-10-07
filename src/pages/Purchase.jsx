import { Link } from "react-router-dom";

// Data
import categoriesData from "../categoriesData";

// Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Purchase = () => {
  return (
    <div className="w-full h-full px-4 xl:px-16 text-dark bg-neutral/85 font-[Modernist]">
      <Navbar />

      <div className="w-full h-full p-8 px-0 flex flex-col items-center gap-12">
        <h2 className="text-4xl font-bold leading-none underline">
          Curated Categories
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8">
          {categoriesData.map((cat, index) => (
            <Link
              key={index}
              to={cat.route}
              className="w-full h-full overflow-hidden rounded-md flex flex-col items-center gap-2"
            >
              <img
                src={cat.image}
                alt="Storage Collection"
                className="w-full h-full rounded-md object-cover"
              />
              <h4 className="text-xl lg:text-2xl font-bold text-center">
                {cat.title}
              </h4>
              <p className="text-sm lg:text-lg text-center leading-tight text-zinc-600">
                {cat.description}
              </p>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Purchase;
