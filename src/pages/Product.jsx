import { useState, useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";

// Data
import mainData from "../mainData";

// Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FurnitureCard from "../components/FurnitureCard";

const Product = () => {
  const { id } = useParams();
  const sliderRef = useRef(null);
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Find product + related
  useEffect(() => {
    const found = mainData.find((item) => item.id === Number(id));
    setProduct(found);

    if (found) {
      const related = mainData
        .filter(
          (item) => item.parentCat === found.parentCat && item.id !== found.id
        )
        .slice(0, 4);
      setRelatedProducts(related);
    }
    setCurrentIndex(0);
  }, [id]);

  // Auto slide logic
  useEffect(() => {
    if (!product?.images?.length) return;

    const interval = setInterval(() => {
      if (!isPaused) {
        setCurrentIndex((prev) =>
          prev === product.images.length - 1 ? 0 : prev + 1
        );
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [product, isPaused]);

  // Touch swipe logic
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let startX = 0;

    const handleTouchStart = (e) => {
      startX = e.touches[0].clientX;
      setIsPaused(true);
    };

    const handleTouchEnd = (e) => {
      const endX = e.changedTouches[0].clientX;
      const diff = startX - endX;

      if (diff > 50) {
        setCurrentIndex((prev) =>
          prev === product.images.length - 1 ? 0 : prev + 1
        );
      } else if (diff < -50) {
        setCurrentIndex((prev) =>
          prev === 0 ? product.images.length - 1 : prev - 1
        );
      }

      setTimeout(() => setIsPaused(false), 1000);
    };

    slider.addEventListener("touchstart", handleTouchStart);
    slider.addEventListener("touchend", handleTouchEnd);

    return () => {
      slider.removeEventListener("touchstart", handleTouchStart);
      slider.removeEventListener("touchend", handleTouchEnd);
    };
  }, [product]);

  if (!product)
    return (
      <div className="w-full h-screen flex justify-center items-center text-xl">
        Product not found.
      </div>
    );

  const discount = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  return (
    <div className="w-full h-full px-4 xl:px-16 text-dark bg-neutral/85 font-[Modernist]">
      <Navbar />

      <div className="w-full min-h-screen p-8 px-0 flex flex-col gap-6 lg:gap-12">
        {/* Product Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
          {/* Horizontal Slider */}
          <div className="flex flex-col lg:flex-row-reverse gap-4">
            <div
              className="relative w-full overflow-hidden rounded-lg"
              ref={sliderRef}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                }}
              >
                {product.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={product.name}
                    className="w-full flex-shrink-0 object-cover rounded-lg"
                  />
                ))}
              </div>

              {/* Dots */}
              <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
                {product.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === currentIndex ? "bg-brand" : "bg-dark/85"
                    }`}
                  ></button>
                ))}
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto">
              {product.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="preview"
                  onClick={() => setCurrentIndex(index)}
                  className={`h-20 w-20 lg:w-24 rounded-md object-cover cursor-pointer border-2 ${
                    currentIndex === index
                      ? "border-brand"
                      : "border-transparent"
                  } transition-all duration-200`}
                />
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="flex flex-col gap-2">
            <p className="text-dark/85">{product.condition}</p>

            <h2 className="text-2xl lg:text-4xl font-bold leading-none">
              {product.name}
            </h2>

            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-bold">
                ₹{product.price.toLocaleString()}
              </h2>
              <span className="line-through text-dark/85">
                ₹{product.originalPrice.toLocaleString()}
              </span>
              <span className="text-xl font-bold text-brand">
                ({discount}% off)
              </span>
            </div>

            <button className="w-fit mt-2 mx-0 p-4 px-8 text-lg text-center leading-none rounded-md text-neutral bg-brand">
              Add to Cart
            </button>

            <div className="pt-4 flex flex-col gap-4">
              {/* Hihglights */}
              <div className="flex flex-col gap-2">
                <h4 className="text-xl font-bold">Highlights</h4>
                <ul className="list-disc list-inside">
                  {product.highlights.map((highlight, index) => (
                    <li
                      key={index}
                      className="text-lg leading-tight text-dark/85"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Description */}
              <div className="flex flex-col gap-2">
                <h4 className="text-xl font-bold">Description</h4>
                <p className="text-lg leading-tight text-dark/85">
                  {product.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="flex flex-col gap-6 lg:gap-12">
            <h2 className="text-4xl font-bold leading-none underline">
              Related Products
            </h2>
            <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8">
              {relatedProducts.map((item) => (
                <Link key={item.id} to={`/product/${item.id}`}>
                  <FurnitureCard item={item} />
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Product;
