import React from "react";
import "./Home.css";
import pic1 from "../../../images/banner2.jpg"
//import Footer from "../../components/Footer/Footer";

const Home = () => {
return (
  <div className="home-container">
    <div className="top">
      <div className="main-title">
        Kameron
      </div>
      <div className="mid-title">
        Middle
      </div>
    </div>
    <div className="lower">
      <div className="lower-words">
        <h4>Always above standards.</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis beatae cum harum praesentium voluptas, vel doloremque nesciunt error. Quisquam numquam quia quas harum distinctio facere illo voluptatibus sint, quos expedita.</p>
      </div>
      <img className="lower-image" src={pic1} alt="space" />
    </div>
  </div>
  );
};

export default Home;
