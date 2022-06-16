import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./../../services/stateProvider";
import { auth } from "../../firebase";
const Header = () => {
  const [{ basket, user }] = useStateValue();
  const handleAuth = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src={require("../../assets/images/amazon1.png")}
          alt="logo"
        />
      </Link>
      <div className="header__search">
        <input type="text" className="header__input" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div className="header__option" onClick={handleAuth}>
            <span className="header__lineone">
              Hello, {!user ? "Guest" : user.email}
            </span>
            <span className="header__linetwo">
              {user ? "Sign out" : "Sign in"}
            </span>
          </div>
        </Link>

        <div className="header__option">
          <span className="header__lineone">Returns</span>
          <span className="header__linetwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__lineone">Your</span>
          <span className="header__linetwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__basket">
            <ShoppingBasketIcon />
            <span className="header__linetwo basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default Header;
