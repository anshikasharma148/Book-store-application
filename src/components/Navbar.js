import "./NavbarStyles.css";
import { Component } from "react";
import { Link } from "react-router-dom";

import { MenuItems } from "./MenuItems";
import navlogo from "../../src/assets/logo.png";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="NavbarItems">
        <div className="logo">
          <img src={navlogo} alt="error" style={{ width: "300px" }} />
        </div>

        <div className="menu-icons" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>

        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}

          <Link to="/Login" className="Button">
            Login
          </Link>

          <Link to="/Register" className="Button">
            Register
          </Link>
        </ul>
      </nav>
    );
  }
}
export default Navbar;
