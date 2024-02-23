import NavBar from "./NavBar";
import "../assets/styles/Home.css";
import chemImage from "../assets/images/chemistry-lab-icon.webp";

function Home() {
	return (
		<div>
			<NavBar />
			<h1>ChemLab Virtual</h1>
			<p className="slogan">
				Tu Portal web de Experimentación Química en Línea
			</p>
			<div className="home-chemical-img"><img src={chemImage} alt="chemical logo" />
		</div>
    </div> 
	);
}

export default Home;
