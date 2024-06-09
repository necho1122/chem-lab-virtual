import "../assets/styles/NavBar.css";
import { useEffect, useState, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { Bars, CloseWindows } from "./Icons";
import logo from "../assets/images/chemical-icon.svg";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownExpOpen, setIsDropdownExpOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const toggleDropdownExp = useCallback(() => {
    setIsDropdownExpOpen(prev => !prev);
  }, []);

  const handleClickOutside = useCallback(event => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownExpOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <nav className="navbar">
      <div className="responsive-navbar">
        <div className="chemical-logo">
          <a href="/">
            <img src={logo} width={40} height={40} alt="chemical logo" />
          </a>
          <h2>ChemLab</h2>
        </div>
        <div
          className={`menu-icons ${isMenuOpen ? "menu-icon-hide" : ""}`}
          onClick={toggleMenu}
          role="button"
          tabIndex={0}
        >
          <Bars />
        </div>
      </div>
      <ul className={isMenuOpen ? "menu-active menu-show" : "menu-list"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">Acerca de</Link>
        </li>
        <li className="dropdown-container">
          <button
            type="button"
            className="experiments-dropdown"
            onClick={toggleDropdownExp}
          >
            Experimentos
          </button>
          {isDropdownExpOpen && (
            <div className="dropdown" ref={dropdownRef}>
              <Link to="/titration" className="dpdw-one">Titulación</Link>
              <Link to="/balance" className="dpdw-one">Balance de masas</Link>
              <Link to="/calc" className="dpdw-one">Cálculos</Link>
            </div>
          )}
        </li>
        <li>
          <Link to="/docs">Docs</Link>
        </li>
        <li>
          <Link to="/contact">Contacto</Link>
        </li>
        <li>
          <div
            className={`menu-icons ${isMenuOpen ? "" : "close-icon"}`}
            onClick={toggleMenu}
            role="button"
            tabIndex={0}
          >
            <CloseWindows />
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
