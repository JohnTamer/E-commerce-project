import "./home.css";
import Product from "../product/product";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src={require("../../assets/images/home4.jpg")}
          alt="home page"
        />

        <div className="home__row">
          <Product
            id="1"
            title="The lean startup"
            price={19.99}
            img="https://m.media-amazon.com/images/I/51aEhyjQGrL._AC_SY1000_.jpg"
            rating={5}
          />
          <Product
            id="2"
            title="Razer DeathAdder Essential Gaming Mouse: 6400 DPI Optical Sensor - 5 Programmable Buttons - Mechanical Switches - Rubber Side Grips - Classic Black"
            price={29.99}
            img="https://m.media-amazon.com/images/I/8189uwDnMkL._AC_UY327_FMwebp_QL65_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="3"
            title="Glorious Model D- (Minus) Lightweight Gaming Mouse, Matte White (GLO-MS-DM-MW)
              Glorious Model D- (Minus) Lightweight Gaming Mouse, Matte White (GLO-MS-DM-MW)"
            price={75}
            img="https://m.media-amazon.com/images/I/617I6o05aEL._AC_UY327_FMwebp_QL65_.jpg"
            rating={5}
          />
          <Product
            id="4"
            title="Logitech G502 Lightspeed Wireless Gaming Mouse with Hero 25K Sensor, PowerPlay Compatible, Tunable Weights and Lightsync RGB - Black"
            price={150}
            img="https://m.media-amazon.com/images/I/718b9wK3eaL._AC_UY327_FMwebp_QL65_.jpg"
            rating={5}
          />
          <Product
            id="5"
            title="HK GAMING GK61 Mechanical Gaming Keyboard - 61 Keys Multi Color RGB Illuminated LED Backlit Wired Programmable for PC/Mac Gamer (Gateron Optical Brown, White)"
            price={60}
            img="https://m.media-amazon.com/images/I/51wEdwyixBL._AC_UY327_FMwebp_QL65_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            title="SAMSUNG 34-Inch Odyssey G5 Ultra-Wide Gaming Monitor with 1000R Curved Screen, 165Hz, 1ms, FreeSync Premium, WQHD (LC34G55...
              SAMSUNG 34-Inch Odyssey G5 Ultra-Wide Gaming Monitor with 1000R Curved Screen, 165Hz, 1ms, FreeSync Premium, WQHD (LC34G55TWWNXZA, 2020 Model), Black"
            price={549}
            img="https://m.media-amazon.com/images/I/61XDeaOrrKL._AC_UY327_FMwebp_QL65_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
