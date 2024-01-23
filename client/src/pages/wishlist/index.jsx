import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { WishlistContext } from "../../context/wishlist";
import "./index.scss";
import { BasketContext } from "../../context/basket";
import { useNavigate } from "react-router";

function Wishlist() {
  const { wishlist, addToWish } = useContext(WishlistContext);
  const { addToCart } = useContext(BasketContext);
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>Home | Wishlist</title>
      </Helmet>
      <div className="wish">
        <div className="wish-head">
          {wishlist.length !== 0 ? (
            <h1>Your Favorites</h1>
          ) : (
            <h1>Your Favorites Cart Is Empty Currently</h1>
          )}
        </div>
        <div className="wish-wrapper">
          {wishlist &&
            wishlist.map((item) => (
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
            ))}
        </div>
      </div>
    </>
  );
}

export default Wishlist;
