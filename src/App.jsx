import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AcidBaseTitration from './components/titration/AcidBaseTitration';
import DataHandler from './components/DataHandler';
import Calc from './components/Calc';
import Contact from './components/Contact';
import AboutUs from './components/AboutUs';
import MassBalance from './components/MassBalance/MassBalance';
import NavBar from './components/NavBar';

function App() {
	return (
		<>
			<Router>
				<NavBar />
				<Routes>
					<Route
						path='/'
						element={<Home />}
					/>
					<Route
						path='/titration'
						element={<AcidBaseTitration />}
					/>
					<Route
						path='/data'
						element={<DataHandler />}
					/>
					<Route
						path='/calc'
						element={<Calc />}
					/>
					<Route
						path='/contact'
						element={<Contact />}
					/>
					<Route
						path='/about'
						element={<AboutUs />}
					/>
					<Route
						path='/balance'
						element={<MassBalance />}
					/>
				</Routes>
			</Router>
		</>
	);
}

export default App;
