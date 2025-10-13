import { useMemo } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

// Data
import mainData from "../../mainData";

// Components
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FurnitureCard from "../../components/FurnitureCard";

const Search = () => {
  const [search, setSearch] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [showFilter, setShowFilter] = useState(false);

  // Filter + Sort Logic
  const filteredResults = useMemo(() => {
    let data = mainData.filter((item) =>
      [item.name, item.cat, item.parentCat]
        .join(" ")
        .toLowerCase()
        .includes(search.toLowerCase())
    );

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
  }, [search, sortOption]);

  return (
    <div className="w-full h-full px-4 xl:px-16 text-dark bg-neutral/85 font-[Modernist]">
      <Navbar />

      {/* Search Bar */}
      <div className="w-full p-6 px-0 flex flex-col gap-4 border-b border-dark">
        <h2 className="text-2xl lg:text-4xl font-bold">Search Furniture</h2>
        <div className="relative w-full max-w-2xl">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for sofas, tables, beds..."
            className="w-full p-2.5 px-4 text-lg rounded-md outline-none border border-dark/85 bg-neutral"
            autoFocus
          />
          <i className="ri-search-line absolute right-4 top-1/2 -translate-y-1/2 text-2xl text-dark/85"></i>
        </div>
      </div>

      {/* Search Results */}
      <div className="w-full mt-2 p-6 px-0">
        {search.trim() && (
          <>
            {filteredResults.length > 0 ? (
              <div className="w-full flex flex-col gap-4">
                {/* Sort Filter Button */}
                <div className="relative flex-shrink-0">
                  <button
                    onClick={() => setShowFilter(!showFilter)}
                    className="p-1.5 px-4 text-lg rounded-md border border-dark flex items-center gap-2"
                  >
                    <i className="ri-equalizer-2-line"></i>
                    <span>Sort</span>
                  </button>

                  {/* Filter Dropdown */}
                  {showFilter && (
                    <div className="mt-2 p-2 absolute top-full left-0 rounded-md flex flex-col items-center border border-brand bg-neutral z-50 shadow-lg">
                      <button
                        onClick={() => {
                          setSortOption("lowToHigh");
                          setShowFilter(false);
                        }}
                        className="p-2 px-4 rounded-md whitespace-nowrap text-left hover:bg-brand/10"
                      >
                        Price: Low to High
                      </button>
                      <button
                        onClick={() => {
                          setSortOption("highToLow");
                          setShowFilter(false);
                        }}
                        className="p-2 px-4 rounded-md whitespace-nowrap text-left hover:bg-brand/10"
                      >
                        Price: High to Low
                      </button>
                      <button
                        onClick={() => {
                          setSortOption("discount");
                          setShowFilter(false);
                        }}
                        className="p-2 px-4 rounded-md whitespace-nowrap text-left hover:bg-brand/10"
                      >
                        Highest Discount
                      </button>
                      <button
                        onClick={() => {
                          setSortOption("");
                          setShowFilter(false);
                        }}
                        className="p-2 px-4 rounded-md whitespace-nowrap text-left text-brand hover:bg-brand/10"
                      >
                        Reset Filter
                      </button>
                    </div>
                  )}
                </div>

                <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8">
                  {filteredResults.map((item) => (
                    <FurnitureCard key={item.id} item={item} />
                  ))}
                </div>
              </div>
            ) : (
              <div className="mb-2 text-lg text-center text-dark/85">
                No products found for "
                <span className="font-semibold">{search}</span>"
              </div>
            )}
          </>
        )}

        {!search.trim() && (
          <div className="mb-2 text-lg text-center text-dark/85">
            Search for something to show results
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Search;
