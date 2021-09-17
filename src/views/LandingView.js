import { Carousel } from "react-bootstrap";
import "../viewsstyle/LandingView.css";
import slide1 from "../images/playingdogs.jpg";
import slide2 from "../images/catsplaying.jpg";
import slide3 from "../images/bunniesplaying.jpg";
import doglogin from "../images/doglogin.png";
import catlogin from "../images/catlogin.png";
import bunnylogin from "../images/bunnylogin.png";
import turtlelogin from "../images/turtlelogin.png";
import { Link } from "react-router-dom";

// import Button from "react-bootstrap/Button";
const LandingView = () => {
  return (
    <section className="welcome">
      <div className="title">
        <h2> Welcome to Pet Helpers! </h2>
      </div>
      <Carousel id="carousel">
        <Carousel.Item>
          <img className="d-block w-100" src={slide1} alt="First slide" />
          <Carousel.Caption>
            <h3>Customer? Spoil your best friend!!</h3>
            <p>
              We just need some information about your pet and we'll serve as a
              bridge between you and the provider of the service you need 😁
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slide2} alt="Second slide" />

          <Carousel.Caption>
            <h3 style={{ color: "black" }}>
              Provider? Offer your services right here!
            </h3>
            <p style={{ color: "black" }}>
              Create a profile, enter the services you provide, and just wait
              for customers to contact you!🐾.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slide3} alt="Third slide" />

          <Carousel.Caption>
            <h3>All animals matter to us!</h3>
            <p>
              We're constantly expanding and improving so we can provide a
              better experience for both customers and providers🐱‍👤.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="lighterTile"></div>
      <div className="description">
        <h2>Join Us Today!🐞</h2>
        <p>
          Start spreading love! Whether you are a provider or a customer, help
          us make some pets really happy!!
        </p>
        <div className="descriptionImages">
          <img className="doglogin" src={doglogin} alt="" />
          <img className="doglogin" src={catlogin} alt="" />
          <img className="doglogin" src={bunnylogin} alt="" />
          <img className="doglogin" src={turtlelogin} alt="" />
        </div>
        <div className="d-grid gap-2 col-2 mx-auto mt-5">
        <Link className="btn btn-success" to="/login">
                <span className='loginbutton'>Login</span>
              </Link>
        </div>
      </div>
    </section>
  );
};

export default LandingView;
