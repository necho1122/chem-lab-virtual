import NavBar  from "./NavBar";
import TitulacionAcidoBase from './TitulacionAcidoBase';
import '../assets/styles/Home.css'

function Home () {
  return (
    <div>
        <NavBar />
      <h1>ChemLab Virtual</h1>
      <p className="slogan">Tu Portal web de Experimentación Química en Línea</p>
    </div>
  )
}

export default Home;