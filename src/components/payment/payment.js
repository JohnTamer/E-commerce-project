import "./payment.css";
import { useStateValue } from "./../../services/stateProvider";
import CheckoutProduct from "../checkoutProduct/checkoutProduct";
const Payment = () => {
  const [{ user, basket }, dispath] = useStateValue();
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>Checkout ({basket?.length} items )</h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>React lane </p>
            <p>Los Angelos, California</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                rating={item.rating}
                price={item.price}
                img={item.img}
              />
            ))}
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>payment method</h3>
          </div>
          <div className="payment__details"></div>
        </div>
      </div>
    </div>
  );
};
export default Payment;
