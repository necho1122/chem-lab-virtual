import "../assets/styles/NavBar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Bars, CloseWindows } from "./Icons";
import logo from "../assets/images/chemical-icon.svg";

function NavBar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleClick = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<nav className="navbar">
			<div className="responsive-navbar">
				<div className="chemical-logo">
					<img src={logo} width={40} height={40} alt="chemical logo" />
					<h2>ChemLab</h2>
				</div>
				<div
					className={`menu-icons ${isMenuOpen ? "menu-icon-hide" : ""}`}
					onClick={handleClick}
					onKeyUp={handleClick}
					onKeyDown={handleClick}
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
					<a href="/services">Experimentos</a>
					<div className="dropdown">
						<Link to="/titration" className="dpdw-one">
							Titulación
						</Link>
						<Link to="/balance" className="dpdw-one">
							Balance de masas
						</Link>
						<Link to="/calc" className="dpdw-one">
							Cálculos
						</Link>
					</div>
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
						onClick={handleClick}
						onKeyUp={handleClick}
						onKeyDown={handleClick}
					>
						<CloseWindows />
					</div>
				</li>
			</ul>
		</nav>
	);
}

export default NavBar;
