import "./index.scss";

function Arrivals() {
  return (
    <div className="arrivals">
        <h1>New Arrivals</h1>
      <div className="arr-wrapper">
        <div className="arr-card">
          <div className="arr-img">
            <img
              src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product1.png"
              alt=""
            />
          </div>
          <div className="arr-texts">
            <h3 style={{ color: "gray" }}>Thermo Ball Etip Gloves</h3>
            <p style={{ color: "red" }}>$ 75.423</p>
          </div>
        </div>
        <div className="arr-card">
          <div className="arr-img">
            <img
              src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product2.png"
              alt=""
            />
          </div>
          <div className="arr-texts">
            <h3 style={{ color: "gray" }}>Thermo Ball Etip Gloves</h3>
            <p style={{ color: "red" }}>$ 75.423</p>
          </div>
        </div>
        <div className="arr-card">
          <div className="arr-img">
            <img
              src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product3.png"
              alt=""
            />
          </div>
          <div className="arr-texts">
            <h3 style={{ color: "gray" }}>Thermo Ball Etip Gloves</h3>
            <p style={{ color: "red" }}>$ 75.423</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Arrivals;
