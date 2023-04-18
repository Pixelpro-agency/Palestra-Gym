import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import "./Header.css";
import { Link } from "react-scroll";
import Bars from "../../assets/bars.png";
const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <div className="header" id="header">
      <img src={Logo} alt="" className="logo" />
      {(menuOpened===false && mobile===true)? (
        <div
          style={{ backgroundColor: "var(--appColor)", padding: "0.5rem", borderRadius: "5px" }}
          onClick={() => setMenuOpened(true)}
        >
          <img
            src={Bars}
            alt="bars"
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className="header-menu">
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              activeClass="active"
              to="header"
              spy={true}
              smooth={true}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="programmi"
              spy={true}
              smooth={true}
            >
              Programmi
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="reasons"
              spy={true}
              smooth={true}
            >
              Perché noi
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="piani"
              spy={true}
              smooth={true}
            >
              Plani
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="testimonianze"
              spy={true}
              smooth={true}
            >
              Testimonianze
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
