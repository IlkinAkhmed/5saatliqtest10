import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/home";
import Blog from "./pages/blog";
import Contact from "./pages/contact";
import Add from "./pages/addPage";
import Basket from "./pages/basket";
import Wishlist from "./pages/wishlist";
import Details from "./pages/details";
import About from "./pages/about";
import WishlistProvider from "./context/wishlist";
import BasketProvider from "./context/basket";

function App() {
  return (
    <BasketProvider>
      <WishlistProvider>
        <Toaster position="top-left" reverseOrder={false} />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/add" element={<Add />} />
              <Route path="/cart" element={<Basket />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/details/:id" element={<Details />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </WishlistProvider>
    </BasketProvider>
  );
}

export default App;
