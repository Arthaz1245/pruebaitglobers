import { GiShoppingCart } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./NavBar.scss";
const Navbar = () => {
  const { cartTotalQuantity } = useSelector((state) => state.cart);
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
            <span>{cartTotalQuantity}</span>
          </div>
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
