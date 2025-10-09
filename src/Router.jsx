import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Sell from "./pages/Sell";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Purchase from "./pages/Purchase";
import Contact from "./pages/Contact";

import Wishlist from "./pages/user/Wishlist";
import Cart from "./pages/user/Cart";
import Account from "./pages/user/Account";
import Checkout from "./pages/user/Checkout";

import Seating from "./pages/purchase/Seating";
import Tables from "./pages/purchase/Tables";
import Beds from "./pages/purchase/Beds";
import Storage from "./pages/purchase/Storage";
import HomeDecor from "./pages/purchase/HomeDecor";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sell" element={<Sell />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/purchase" element={<Purchase />} />
      <Route path="/contact" element={<Contact />} />

      {/* Account Routes */}
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/account" element={<Account />} />
      <Route path="/checkout" element={<Checkout />} />

      {/* Purchase Routes */}
      <Route path="/purchase/seating" element={<Seating />} />
      <Route path="/purchase/tables" element={<Tables />} />
      <Route path="/purchase/beds" element={<Beds />} />
      <Route path="/purchase/storage" element={<Storage />} />
      <Route path="/purchase/home-decor" element={<HomeDecor />} />
    </Routes>
  );
};

export default AppRouter;
