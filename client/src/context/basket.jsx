import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export const BasketContext = createContext();

export default function BasketProvider({ children }) {
  const [basket, setBasket] = useState(
    localStorage.getItem("5saatliqtest10basket")
      ? JSON.parse(localStorage.getItem("5saatliqtest10basket"))
      : []
  );
  useEffect(() => {
    localStorage.setItem("5saatliqtest10basket", JSON.stringify(basket));
  }, [basket]);

  const addToCart = (item) => {
    const foundData = basket.find((x) => x._id === item._id);
    if (foundData) {
      foundData.count++;
      foundData.total = foundData.count * foundData.price;
      setBasket([...basket]);
      toast.success("Count Of Product increased in basket");
      return;
    }
    const total = item.price;
    setBasket([...basket, { ...item, count: 1, total: total }]);
    toast.success("Added To basket");
  };

  const modifyCount = (isIncreament, item) => {
    const foundData = basket.find((x) => x._id === item._id);
    if (isIncreament) {
      foundData.count++;
      foundData.total = foundData.count * foundData.price;
      setBasket([...basket]);
      toast.success("Count Of Product increased in basket");
    } else if (foundData.count > 1) {
      foundData.count--;
      foundData.total = foundData.count * foundData.price;
      toast.success("Count Of Product decreased in basket");
      setBasket([...basket]);
    }
  };
  const data = {
    basket,
    setBasket,
    addToCart,
    modifyCount,
  };
  return (
    <BasketContext.Provider value={data}>{children}</BasketContext.Provider>
  );
}
