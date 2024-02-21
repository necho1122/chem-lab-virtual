import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AcidBaseTitration from "./components/AcidBaseTitration";
import DataHandler from "./components/DataHandler";
import Calc from "./components/Calc";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/titration" element={<AcidBaseTitration />} />
				<Route path="/data" element={<DataHandler />} />
				<Route path="/calc" element={<Calc />} />
			</Routes>
		</Router>
	);
}

export default App;
