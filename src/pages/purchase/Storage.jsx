import { useMemo } from "react";
import { useState } from "react";

// Data
import mainData from "../../mainData";

// Components
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FurnitureCard from "../../components/FurnitureCard";
import NotFound from "../../assets/NotFound.png";

const Storage = () => {
  const [sortOption, setSortOption] = useState("");
  const [showFilter, setShowFilter] = useState(false);

  const [activeCat, setActiveCat] = useState("Storage");

  const categories = [
    "Storage",
    "Wardrobes",
    "Bookshelves",
    "TV Units",
    "Drawers",
    "Shelves",
    "Shoe Racks",
    "Cabinets & Cupboards",
  ];

  // Filtering + Sorting
  const filteredData = useMemo(() => {
    let data =
      activeCat === "Storage"
        ? mainData.filter((item) => item.parentCat === "Storage")
        : mainData.filter((item) => item.cat === activeCat);

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

  return (
    <div className="w-full h-full px-4 xl:px-16 text-dark bg-neutral/85 font-[Modernist]">
      <Navbar />

      <div className="w-full h-full p-8 px-0 flex flex-col items-center gap-8">
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

        {/* Furniture Grid */}
        {filteredData.length > 0 ? (
          <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8">
            {filteredData.map((item) => (
              <FurnitureCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="w-full text-lg flex flex-col items-center gap-6 py-16">
            <img
              src={NotFound}
              alt="No Products Found"
              className="h-60 lg:h-80"
            />
            <p className="text-base md:text-lg lg:text-xl text-center">
              🚫 No products found in <b>{activeCat}</b>
            </p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Storage;
