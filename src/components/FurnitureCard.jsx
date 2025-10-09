import { useState } from "react";
import { useEffect } from "react";

const FurnitureCard = ({ item }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Check wishlist status on load
  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setIsWishlisted(wishlist.includes(item.id));
  }, [item.id]);

  // Toggle wishlist
  const handleWishlistToggle = () => {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    if (wishlist.includes(item.id)) {
      wishlist = wishlist.filter((id) => id !== item.id);
      setIsWishlisted(false);
    } else {
      wishlist.push(item.id);
      setIsWishlisted(true);
    }

    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  };

  const discount = Math.round(
    ((item.originalPrice - item.price) / item.originalPrice) * 100
  );

  return (
    <div className="w-full h-full">
      <div className="relative">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="w-full h-full rounded-md object-cover"
        />

        {/* Wishlist Button */}
        <button
          onClick={handleWishlistToggle}
          className={`w-fit h-fit p-2 lg:p-2.5 px-3.5 lg:px-4 text-base lg:text-xl rounded-md absolute top-2 right-2 transition duration-200 ${
            isWishlisted ? "text-neutral bg-brand" : "text-brand bg-neutral"
          }`}
        >
          <i
            className={
              isWishlisted ? "ri-heart-3-fill text-neutral" : "ri-heart-3-line"
            }
          ></i>
        </button>
      </div>

      <div className="w-full p-2 px-0 flex flex-col">
        <span className="text-xs lg:text-sm text-dark/85">
          {item.condition}
        </span>
        <h4
          className="text-base md:text-lg lg:text-xl font-medium line-clamp-1"
          title={item.name}
        >
          {item.name}
        </h4>

        <div className="flex items-center gap-1.5">
          <h4 className="text-sm md:text-base lg:text-lg leading-none">
            ₹{item.price.toLocaleString()}
          </h4>
          <h6 className="text-xs lg:text-sm line-through text-dark/85">
            ₹{item.originalPrice.toLocaleString()}
          </h6>
          <h6 className="text-xs md:text-sm lg:text-base font-bold text-brand">
            ({discount}% off)
          </h6>
        </div>
      </div>
    </div>
  );
};

export default FurnitureCard;
