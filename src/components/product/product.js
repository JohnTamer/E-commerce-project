import "./product.css";
import { useStateValue } from "./../../services/stateProvider";
const Product = ({ id, title, rating, price, img }) => {
  const [{ basket }, dispatch] = useStateValue();
  console.log(basket);
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        rating: rating,
        price: price,
        img: img,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={img} alt="" />
      <button className="product__button" onClick={addToBasket}>
        Add to Basket
      </button>
    </div>
  );
};
export default Product;
