import './App.css'
import Home from './components/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TitulacionAcidoBase from './components/TitulacionAcidoBase';
import DataHandler from './components/DataHandler';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/titration" element={<TitulacionAcidoBase />} />
          <Route path="/data" element={<DataHandler />} />
        </Routes>
    </Router>
  );
}

export default App;
