import { useState } from "react";
import { useEffect } from "react";

// Data
import mainData from "../../mainData";

// Images
import NotFound from "../../assets/NotFound.png";

// Components
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FurnitureCard from "../../components/FurnitureCard";

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const filteredProducts = mainData.filter((item) =>
      storedWishlist.includes(item.id)
    );
    setWishlistItems(filteredProducts);
  }, []);

  // ✅ When toggling wishlist on this page, auto-refresh
  useEffect(() => {
    const syncWishlist = () => {
      const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
      const filteredProducts = mainData.filter((item) =>
        storedWishlist.includes(item.id)
      );
      setWishlistItems(filteredProducts);
    };

    window.addEventListener("storage", syncWishlist);
    return () => window.removeEventListener("storage", syncWishlist);
  }, []);

  return (
    <div className="w-full h-full px-4 xl:px-16 text-dark bg-neutral/85 font-[Modernist]">
      <Navbar />

      <div className="w-full min-h-screen p-8 px-0 flex flex-col items-center gap-8">
        {wishlistItems.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8 w-full">
            {wishlistItems.map((item) => (
              <FurnitureCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="w-full h-full text-lg flex flex-col items-center gap-6 py-16">
            <img
              src={NotFound}
              alt="No Wishlist Items"
              className="h-60 lg:h-80"
            />
            <p className="text-xl text-center">
              💤 Your wishlist is empty. Start exploring and add your favorite
              furniture!
            </p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Wishlist;
