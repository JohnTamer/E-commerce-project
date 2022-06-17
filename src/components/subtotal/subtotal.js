import "./subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../services/stateProvider";
import { getBasketTotal } from "../../services/reducer";
import { useNavigate } from "react-router-dom";
const Subtotal = () => {
  const navigate = useNavigate();
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items):
              <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              this order contain a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      ></CurrencyFormat>
      <button onClick={(e) => navigate("/payment", { replace: true })}>
        Procced To Checkout{" "}
      </button>
    </div>
  );
};
export default Subtotal;
