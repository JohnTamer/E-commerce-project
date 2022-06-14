import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { NavLink } from "react-router-dom";
import { useStateValue } from "./../../services/stateProvider";
const Header = () => {
  const [state, dispatch] = useStateValue();
  return (
    <div className="header">
      <NavLink to="/">
        <img
          className="header__logo"
          src={require("../../assets/images/amazon1.png")}
          alt="logo"
        />
      </NavLink>
      <div className="header__search">
        <input type="text" className="header__input" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__lineone">Hello guest</span>
          <span className="header__linetwo">Sign in</span>
        </div>
        <div className="header__option">
          <span className="header__lineone">Returns</span>
          <span className="header__linetwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__lineone">Your</span>
          <span className="header__linetwo">Prime</span>
        </div>
        <NavLink to="/checkout">
          <div className="header__basket">
            <ShoppingBasketIcon />
            <span className="header__linetwo basketCount">
              {state.basket?.length}
            </span>
          </div>
        </NavLink>
      </div>
    </div>
  );
};
export default Header;
