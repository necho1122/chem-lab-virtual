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
import Documentation from './components/docs/Documentation';
import MassBalanceDoc from './components/docs/MassBalanceDoc';

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
					<Route
						path='/docs'
						element={<Documentation />}
					>
						<Route
							path='mass-balance-docs'
							element={<MassBalanceDoc />}
						/>
					</Route>
				</Routes>
			</Router>
		</>
	);
}

export default App;
