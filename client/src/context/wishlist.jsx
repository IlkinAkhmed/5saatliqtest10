import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export const WishlistContext = createContext();

export default function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState(
    localStorage.getItem("5saatliqtest10wish")
      ? JSON.parse(localStorage.getItem("5saatliqtest10wish"))
      : []
  );
  useEffect(() => {
    localStorage.setItem("5saatliqtest10wish", JSON.stringify(wishlist));
  }, [wishlist]);

  const addToWish = (item) => {
    const foundData = wishlist.find((x) => x._id === item._id);
    if (foundData) {
      setWishlist(wishlist.filter((x) => x._id !== item._id));
      toast.success("Removed From Wishlist");
      return;
    }
    setWishlist([...wishlist, item]);
    toast.success("Added To Wishlist");
  };
  const data = {
    wishlist,
    setWishlist,
    addToWish,
  };
  return (
    <WishlistContext.Provider value={data}>{children}</WishlistContext.Provider>
  );
}
