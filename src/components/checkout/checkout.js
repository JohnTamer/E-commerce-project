import Subtotal from "../subtotal/subtotal";
import "./checkout.css";
import { useStateValue } from "./../../services/stateProvider";
import CheckoutProduct from "./../checkoutProduct/checkoutProduct";
const Checkout = () => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://wp.disruptiveadvertising.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-29-at-11.50.03-AM-450x96.png"
          alt=""
        />
        <div>
          <h2 className="checkout__title">Your Chopping Basket</h2>
          <h2>
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                price={item.price}
                img={item.img}
                rating={item.rating}
              />
            ))}
          </h2>
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};
export default Checkout;
