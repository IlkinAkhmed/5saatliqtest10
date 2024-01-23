import { Helmet } from "react-helmet-async";
import "./index.scss";
import { BasketContext } from "../../context/basket";
import { useContext } from "react";
import { WishlistContext } from "../../context/wishlist";
import { useNavigate } from "react-router";

function Basket() {
  const { basket, setBasket, modifyCount } = useContext(BasketContext);
  const { wishlist, addToWish } = useContext(WishlistContext);
  const navigate = useNavigate();
  const subtotal = basket.reduce(
    (initial, product) => initial + parseInt(product.total),
    0
  );

  return (
    <>
      <Helmet>
        <title>Home | Basket</title>
      </Helmet>
      <div className="cart">
        <div className="cart-head">
          {basket.length !== 0 ? (
            <h1>Your Cart</h1>
          ) : (
            <h1>Your Cart Is Empty Currently</h1>
          )}
        </div>
        <div className="basket-wrapper">
          {basket &&
            basket.map((item) => (
              <div className="card" key={item._id}>
                <div className="img">
                  <img src={item.image} alt="" />
                  <div
                    onClick={() =>
                      setBasket(basket.filter((x) => x._id !== item._id))
                    }
                    className="add"
                  >
                    Remove from Cart
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
                  <div className="counter">
                    <button onClick={() => modifyCount(true, item)}>+</button>
                    <p>{item.count}</p>
                    <button onClick={() => modifyCount(false, item)}>-</button>
                  </div>
                  <p>Total Price: ${item.total}.00</p>
                </div>
              </div>
            ))}
        </div>
        <div className="total">
        {basket.length !== 0 ? (
            <h1>Cart SubTotal: ${subtotal}.00</h1>
          ) : (
            null
          )}
          
        </div>
      </div>
    </>
  );
}

export default Basket;
