import { GiShoppingCart } from "react-icons/gi";
import { Link } from "react-router-dom";

import "./NavBar.scss";
const Navbar = () => {
  return (
    <nav className="nav-bar">
      <Link to="/">
        <h1 style={{ textDecoration: "none" }}>Confy</h1>
      </Link>
      <div className="link-store">
        <Link to="/shop">
          <h1>Shop</h1>
        </Link>
      </div>
      <Link to="/cart">
        <div className="nav-cart">
          <GiShoppingCart />
          <div className="cart-quantity">
            <span>0</span>
          </div>
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
