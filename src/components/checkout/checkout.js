import "./checkout.css";
const Checkout = () => {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://wp.disruptiveadvertising.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-29-at-11.50.03-AM-450x96.png"
          alt=""
        />
        <div>
          <h2 className="checkout__title">Your Chopping Cart</h2>
        </div>
      </div>
      <div className="checkout__right">
        <h2>the total goes here</h2>
      </div>
    </div>
  );
};
export default Checkout;
