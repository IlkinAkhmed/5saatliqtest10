import axios from "axios";
import  { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { BasketContext } from "../../context/basket";
import { WishlistContext } from "../../context/wishlist";
import "./index.scss";

function Products() {
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const { wishlist, addToWish } = useContext(WishlistContext);
  const { addToCart } = useContext(BasketContext);

  const navigate = useNavigate();

  async function fetchData() {
    const res = await axios.get("http://localhost:4200/products/");
    setProducts(res.data);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <section className="products">
      <div className="prod-head">
        <h1>Popular Items</h1>
        <p>
          Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
          gravida.
        </p>
      </div>
      <div className="prod-wrapper">
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          products &&
          products.map((item) => (
            <div className="card" key={item._id}>
              <div className="img">
                <img src={item.image} alt="" />
                <div onClick={() => addToCart(item)} className="add">
                  Add to Cart
                </div>
                <i
                  onClick={() => addToWish(item)}
                  className={`${
                    wishlist.find((x) => x._id === item._id)
                      ? "fa-solid"
                      : "fa-regular"
                  } fa-heart`}
                ></i>
              </div>
              <div className="texts">
                <h2 onClick={() => navigate(`/details/${item._id}`)}>
                  {item.title}
                </h2>
                <p>Price: ${item.price}.00</p>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default Products;
