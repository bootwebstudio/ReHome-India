import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

// Images
import NotFound from "../../assets/NotFound.png";

// Components
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Message from "../../components/Message";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);

  // Load & update cart when localStorage changes
  useEffect(() => {
    const loadCart = () => {
      const stored = JSON.parse(localStorage.getItem("cart") || "[]");
      setCart(stored);
    };

    loadCart();

    window.addEventListener("storage", loadCart);
    window.addEventListener("cartUpdated", loadCart);

    return () => {
      window.removeEventListener("storage", loadCart);
      window.removeEventListener("cartUpdated", loadCart);
    };
  }, []);

  const removeItem = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    window.dispatchEvent(new Event("storage"));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const appliedCoupon = () => {
    const validCoupons = {
      REHOME10: 10,
      REHOME15: 15,
      FIRSTBUY20: 20,
    };

    if (validCoupons[coupon.toUpperCase()]) {
      setDiscount(validCoupons[coupon.toUpperCase()]);
      alert(`✅ ${validCoupons[coupon.toUpperCase()]}% discount applied!`);
    } else {
      alert("❌ Invalid coupon code");
      setDiscount(0);
    }
  };

  const clearCart = () => {
    setCart([]);
    localStorage.setItem("cart", "[]");
    window.dispatchEvent(new Event("storage"));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  // Price Calculations
  const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
  const discountAmount = (subtotal * discount) / 100;
  const shipping = subtotal > 20000 ? 0 : 499;
  const total = subtotal - discountAmount + shipping;

  return (
    <div className="w-full h-full px-4 xl:px-16 text-dark bg-neutral/85 font-[Modernist]">
      <Navbar />

      <div className="w-full p-8 px-0 flex flex-col gap-8">
        {cart.length === 0 ? (
          <div className="w-full h-full p-8 px-0 flex flex-col items-center gap-8">
            <img src={NotFound} alt="" className="h-60 lg:h-80" />
            <p className="text-xl text-center">
              You have not added something in cart
              <br />
              <Link to="/purchase" className="underline text-brand">
                Continue Shopping
              </Link>
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 border-b border-dark/25 pb-4"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 md:w-40 h-20 md:h-40 object-cover rounded-md"
                  />
                  <div className="w-full flex flex-col gap-0 lg:gap-4">
                    <div>
                      <p className="text-sm leading-none text-dark/85">
                        {item.condition}
                      </p>
                      <h4 className="h-full pt-1.5 text-lg font-bold leading-none line-clamp-1">
                        {item.name}
                      </h4>
                    </div>

                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-xl font-semibold">
                        ₹{item.price.toLocaleString()}
                      </span>
                      <span className="text-sm line-through text-dark/60">
                        ₹{item.originalPrice.toLocaleString()}
                      </span>
                    </div>

                    {/* Remove item */}
                    <button
                      onClick={() => removeItem(item.id)}
                      className="w-full text-sm text-end text-red-500 underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Price Details */}
            <div className="p-6 flex flex-col gap-2 rounded-md border border-dark/25 sticky top-8">
              <h2 className="text-xl font-bold mb-2">Price Details</h2>

              <div className="flex justify-between">
                <span>Subtotal ({cart.length} items)</span>
                <span>₹{subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Discount ({discount}%)</span>
                <span className="text-brand">
                  -₹{discountAmount.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Shipping Charges</span>
                <span>{shipping === 0 ? "Free" : `₹${shipping}`}</span>
              </div>

              <hr className="m-4 mx-0 border-dark/25" />

              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>₹{total.toLocaleString()}</span>
              </div>

              <Link
                to="/checkout"
                className="w-full mt-4 p-2.5 text-lg text-center rounded-md text-neutral bg-brand"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
