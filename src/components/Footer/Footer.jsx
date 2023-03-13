import "./Footer.scss";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { ImInstagram } from "react-icons/im";
const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <span className="logosblack">Confy</span>
      </div>
      <div>
        <ul>
          <li>CONFY MEN</li>
          <li>CONFY WOMEN</li>
          <li>CONFY WINTER</li>
          <li>CONFY SPORT</li>
        </ul>
      </div>

      <div>
        <ul>
          <li>CONTACT US</li>
          <li>HELP</li>
          <li>HOW TO BUY</li>
          <li>TERMS AND CONDITIONS</li>
        </ul>
      </div>
      <div className="social Media">
        <span>Follow us through</span>
        <ul>
          <li>
            <BsFacebook />
          </li>
          <li>
            <BsTwitter />
          </li>
          <li>
            <ImInstagram />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
