import "./index.scss";

function Header() {
  return (
    <header>
      <div className="header-inner">
        <div className="main-texts">
          <h1>Select Your New Perfect Style</h1>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat is aute irure.
          </p>
          <button>SHOP NOW</button>
        </div>
        <div className="main-img">
          <img
            src="https://preview.colorlib.com/theme/timezone/assets/img/hero/watch.png"
            alt=""
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
