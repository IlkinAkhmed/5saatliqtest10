import { Helmet } from "react-helmet-async";
import "./index.scss";
import Header from "../../components/header";
import Arrivals from "../../components/arrivals";
import Products from "../../components/products";
import Choice from "../../components/choice";
import MobileNav from "../../components/mobileNav";

function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <Header />
      <MobileNav/>
      <Arrivals />
      <Products />
      <Choice />
    </>
  );
}

export default Home;
