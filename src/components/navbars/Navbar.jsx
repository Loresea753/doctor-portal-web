import React from "react";
import { Link } from "react-router-dom";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";

const lag = [
  { code: "en", name: "English", country_code: "en" },
  { code: "th", name: "ไทย", country_code: "th" },
];

function Navbar() {
  const currentLngCode = Cookies.get("i18next") || "en";
  const currentLng = lag.find((l) => l.code === currentLngCode);
  const { t } = useTranslation();
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid ">
          <a className="navbar-brand nav-link " href="#">
            <img
              src="https://th.bing.com/th/id/R.0e13d4bbab8e6f2b2745d5637d03cbae?rik=5icHb2sKWk5%2bAw&riu=http%3a%2f%2fwww.sudkum.com%2fimages%2fpromotion%2fpromotion20131017161627.jpg&ehk=W4MaLC7ZizeCH68c4Gl%2fjRzULR7mAReQYd%2fyXNci0Gw%3d&risl=&pid=ImgRaw&r=0"
              className="img-thumbnail"
              style={{ width: "50px" }}
              alt=""
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className=" collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link ">
                  {t("navbar.DoctorUrgent")}
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/register" className="nav-link ">
                  {t("navbar.Register")}
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link to="/About_Me" className="nav-link ">
                  {t("navbar.contact")}
                </Link>
              </li> */}
            </ul>
          </div>
          <div className="btn-group">
            <button
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              role="button"
            >
              {currentLng.name}{" "}
            </button>
            <ul className="dropdown-menu dropdown-menu-end ">
              {lag.map((item) => (
                <li key={item.code}>
                  <button
                    className="dropdown-item"
                    onClick={() => {
                      i18next.changeLanguage(item.code);
                    }}
                    disabled={currentLng.code === item.code}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
