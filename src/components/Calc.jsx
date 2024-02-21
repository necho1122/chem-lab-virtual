import NavBar from "./NavBar";
import "../assets/styles/Calc.css";
import { useState } from "react";
import DataHandler from "./DataHandler";

function Calc() {
	const [hpCalc, setHpCalc] = useState(false);
	const [moleCalc, setMoleCalc] = useState(false);

	const handleHpCalc = () => {
		setHpCalc(!hpCalc);
	};

	const handleMoleCalc = () => {
		setMoleCalc(!moleCalc);
	};

	return (
		<>
			<NavBar />

			<h1>Calculadoras</h1>
			<div className="calc-container">
				<div className="container-of-calcs">
					<div className="calc">
						<h3>Calculadora de pH</h3>
						<p>Calcula el pH de una solución ácida o básica.</p>
						<button type="button" onClick={handleHpCalc}>
							Ir a calcular
						</button>
						{hpCalc && <PHCalculator closeHPCalc={handleHpCalc} />}
					</div>
					<div className="calc">
						<h3>Calculadora de molaridad</h3>
						<p>Calcula la molaridad de una solución.</p>
						<button type="button" href="/molarity-calc">
							Ir a calcular
						</button>
					</div>
					<div className="calc">
						<h3>Calculadora de normalidad</h3>
						<p>Calcula la normalidad de una solución.</p>
						<button type="button" href="/normality-calc">
							Ir a calcular
						</button>
					</div>
					<div className="calc">
						<h3>Calculadora de soluciones</h3>
						<p>Calcula la cantidad de soluto necesaria...</p>
						<button type="button" href="/solution-calc">
							Ir a calcular
						</button>
					</div>
					<div className="calc">
						<h3>Calculadora de peso molecular</h3>
						<p>Calcula el peso molecular de una sustancia...</p>
						<button type="button" onClick={handleMoleCalc}>
							Ir a calcular
						</button>
						{moleCalc && <MolecularWeightCalc />}
					</div>
				</div>
			</div>
		</>
	);
}

export default Calc;

function PHCalculator(props) {
	const [acidez, setAcidez] = useState("acido");
	const [concentracion, setConcentracion] = useState("");
	const [resultado, setResultado] = useState("");

	const handleAcidezChange = (event) => {
		setAcidez(event.target.value);
	};

	const handleConcentracionChange = (event) => {
		setConcentracion(event.target.value);
	};

	const calcularPH = () => {
		if (!concentracion || Number.isNaN(concentracion)) {
			setResultado("Por favor, introduce una concentración válida.");
			return;
		}

		const concFloat = parseFloat(concentracion);

		if (acidez === "acido") {
			setResultado(-Math.log10(concFloat));
		} else if (acidez === "base") {
			setResultado(14 + Math.log10(concFloat));
		} else {
			setResultado("Tipo de solución no válido");
		}
	};

	return (
		<div className="calc-container">
			<div className="calculator-container">
				<h2>Calculadora de pH</h2>
				<div>
					<label>
						Tipo de solución:{" "}
						<select value={acidez} onChange={handleAcidezChange}>
							<option value="acido">Ácido</option>
							<option value="base">Base</option>
						</select>
					</label>
				</div>
				<div>
					<label>
						Concentración (M):
						<input
							type="text"
							value={concentracion}
							onChange={handleConcentracionChange}
						/>
					</label>
				</div>
				<button type="button" onClick={calcularPH}>
					Calcular pH
				</button>
				<div>
					<p>Resultado: {resultado}</p>
				</div>
				<button type="button" onClick={props.closeHPCalc}>
					Cerrar{" "}
				</button>
			</div>
		</div>
	);
}

function MolarityCalc() {
	return <div>m</div>;
}

function NormalityCalc() {
	return <div>n</div>;
}

function SolutionCalc() {
	return <div>s</div>;
}

function MolecularWeightCalc() {
	return (
		<div className="calc-container">
			<div className="calculator-container">
				<h2>Peso molecular</h2>
				<p>Escribe la formula molecular del compuesto</p>
				<DataHandler />
			</div>
		</div>
	);
}
