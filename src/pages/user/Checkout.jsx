import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// Images
import NotFound from "../../assets/NotFound.png";

// Components
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Checkout = () => {
  const [cart, setCart] = useState([]);
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    paymentMethod: "credit-card",
  });
  const navigate = useNavigate();

  // Load cart from localStorage
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
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

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    if (
      !formData.firstName ||
      !formData.email ||
      !formData.phone ||
      !formData.address ||
      !formData.pincode
    ) {
      alert("Please fill in all required fields");
      return;
    }

    if (cart.length === 0) {
      alert("Your cart is empty");
      return;
    }

    // In a real app, you would process payment here
    alert("🎉 Order placed successfully! Thank you for your purchase.");

    // Clear cart and redirect
    localStorage.setItem("cart", "[]");
    window.dispatchEvent(new Event("storage"));
    window.dispatchEvent(new Event("cartUpdated"));

    navigate("/thanks");
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
            <img src={NotFound} className="h-60 lg:h-80" />
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
            {/* Checkout Form */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              {/* Shipping Information */}
              <div className="p-6 border border-dark/25 rounded-md">
                <h4 className="text-xl font-bold mb-4">Shipping Information</h4>

                <form
                  onSubmit={handlePlaceOrder}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full p-2.5 rounded-md outline-none border border-dark/25 bg-neutral"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full p-2.5 rounded-md outline-none border border-dark/25 bg-neutral"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full p-2.5 rounded-md outline-none border border-dark/25 bg-neutral"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full p-2.5 rounded-md outline-none border border-dark/25 bg-neutral"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-1">
                      Street Address *
                    </label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      rows="3"
                      className="w-full p-2.5 rounded-md outline-none border border-dark/25 bg-neutral resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      City *
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      className="w-full p-2.5 rounded-md outline-none border border-dark/25 bg-neutral"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      State *
                    </label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      required
                      className="w-full p-2.5 rounded-md outline-none border border-dark/25 bg-neutral"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-1">
                      Pincode *
                    </label>
                    <input
                      type="text"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleInputChange}
                      required
                      maxLength="6"
                      className="w-full p-2.5 rounded-md outline-none border border-dark/25 bg-neutral"
                    />
                  </div>
                </form>
              </div>
            </div>

            {/* Order Details */}
            <div className="flex flex-col gap-6">
              <h2 className="text-2xl lg:text-3xl font-bold">Order Details</h2>

              {/* Cart Items Preview */}
              <div className="p-6 border border-dark/25 rounded-md">
                <h4 className="text-xl font-bold mb-4">
                  Items ({cart.length})
                </h4>

                <div className="space-y-4 max-h-80 overflow-y-auto">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-2.5 pb-4 border-b border-dark/25 last:border-b-0"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-md"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm line-clamp-2">
                          {item.name}
                        </h4>
                        <p className="text-sm text-dark/60">{item.condition}</p>
                        <p className="text-sm font-semibold">
                          ₹{item.price.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
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

                {/* Coupon Code */}
                <div className="flex gap-2 mt-4">
                  <input
                    type="text"
                    placeholder="Enter coupon code"
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                    className="w-full p-2 rounded-md outline-none border border-dark bg-neutral"
                  />
                  <button
                    type="button"
                    onClick={appliedCoupon}
                    className="p-2 px-4 whitespace-nowrap rounded-md text-neutral bg-brand"
                  >
                    Use Code
                  </button>
                </div>

                <button
                  onClick={handlePlaceOrder}
                  className="w-full mt-4 p-2.5 text-lg rounded-md text-neutral bg-brand hover:bg-brand/90 transition-colors"
                >
                  Place Order
                </button>

                <Link
                  to="/cart"
                  className="w-full mt-2 p-2.5 text-lg text-center rounded-md border border-dark/25 bg-transparent hover:bg-dark/5 transition-colors"
                >
                  Back to Cart
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Checkout;
