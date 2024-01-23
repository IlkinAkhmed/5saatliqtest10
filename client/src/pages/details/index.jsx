import { Helmet } from "react-helmet-async";
import "./index.scss";
import { useParams } from "react-router";
import axios from "axios";
import { useEffect, useState } from "react";

function Details() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  async function fetchData() {
    const res = await axios.get(`http://localhost:4200/products/${id}`);
    setData(res.data);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Helmet>
        <title>Home | Details</title>
      </Helmet>
      <div className="det">
        <div className="det-card">
          <div className="det-img">
            <img src={data.image} alt="" />
          </div>
          <div className="det-texts">
            <h1>{data.title}</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              facilis autem libero nisi excepturi recusandae laboriosam
              architecto! Minima, error voluptas.
            </p>
            <p>Price: ${data.price}.00</p>
            <div className="det-icons">
              <i className="fa-regular fa-heart"></i>
              <i className="fa-solid fa-basket-shopping"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
