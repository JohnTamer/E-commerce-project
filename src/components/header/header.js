import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
const Header = () => {
  return (
    <div className="header">
      <img
        className="header__logo"
        src={require("../../assets/images/amazon1.png")}
        alt="logo"
      />
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
        <div className="header__basket">
          <ShoppingBasketIcon />
          <span className="header__linetwo basketCount">0</span>
        </div>
      </div>
    </div>
  );
};
export default Header;
