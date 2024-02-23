import NavBar from "./NavBar";
import "../assets/styles/Calc.css";
import { useState } from "react";
import DataHandler from "./DataHandler";

function Calc() {
	const [phCalcVisible, setPhCalcVisible] = useState(false);
	const [moleCalcVisible, setMoleCalcVisible] = useState(false);
	const [molarityCalcVisible, setMolarityCalcVisible] = useState(false);
	const [normalityCalcVisible, setNormalityCalcVisible] = useState(false);
	const [solutionCalcVisible, setSolutionCalcVisible] = useState(false);

	const toggleHpCalc = () => {
		setPhCalcVisible(!phCalcVisible);
	};

	const handleMoleCalc = () => {
		setMoleCalcVisible(!moleCalcVisible);
	};

	const handleMolarityCalc = () => {
		setMolarityCalcVisible(!molarityCalcVisible);
	};

	const handleNormalityCalc = () => {
		setNormalityCalcVisible(!normalityCalcVisible);
	};

	const handleSolutionCalc = () => {
		setSolutionCalcVisible(!solutionCalcVisible);
	};

	return (
		<>
			<NavBar />

			<h1>Calculadoras</h1>
			<div className="big-calc-container">
				<div className="container-of-calcs">
					<div className="calc">
						<h3>Calculadora de pH</h3>
						<p>Calcula el pH de una solución ácida o básica.</p>
						<button type="button" onClick={toggleHpCalc}>
							Ir a calcular
						</button>
						{phCalcVisible && <PHCalculator onClose={toggleHpCalc} />}
					</div>
					<div className="calc">
						<h3>Calculadora de molaridad</h3>
						<p>Calcula la molaridad de una solución.</p>
						<button type="button" onClick={handleMolarityCalc}>
							Ir a calcular
						</button>
						{molarityCalcVisible && (
							<MolarityCalc onClose={handleMolarityCalc} />
						)}
					</div>
					<div className="calc">
						<h3>Calculadora de normalidad</h3>
						<p>Calcula la normalidad de una solución.</p>
						<button type="button" onClick={handleNormalityCalc}>
							Ir a calcular
						</button>
						{normalityCalcVisible && (
							<NormalityCalc onClose={handleNormalityCalc} />
						)}
					</div>
					<div className="calc">
						<h3>Otras concentraciones</h3>
						<p>Calcula la cantidad de soluto necesaria...</p>
						<button type="button" onClick={handleSolutionCalc}>
							Ir a calcular
						</button>
						{solutionCalcVisible && (
							<SolutionCalc onClose={handleSolutionCalc} />
						)}
					</div>
					<div className="calc">
						<h3>Calculadora de peso molecular</h3>
						<p>Calcula el peso molecular de una sustancia...</p>
						<button type="button" onClick={handleMoleCalc}>
							Ir a calcular
						</button>
						{moleCalcVisible && (
							<MolecularWeightCalc onClose={handleMoleCalc} />
						)}
					</div>
				</div>
			</div>
		</>
	);
}

export default Calc;

function PHCalculator(props) {
	const [acidity, setAcidity] = useState("ácido");
	const [concentration, setConcentration] = useState("");
	const [result, setResult] = useState("");
	const [showPhMessage, setShowPhMessage] = useState(false);

	const handleAcidityChange = (event) => {
		setAcidity(event.target.value);
	};

	const handleConcentrationChange = (event) => {
		setConcentration(event.target.value);
	};

	const calcPH = () => {
		if (!concentration || Number.isNaN(concentration)) {
			setResult("Por favor, introduce una concentración válida.");
			return;
		}

		const concFloat = parseFloat(concentration);

		if (acidity === "ácido") {
			setResult((-Math.log10(concFloat)).toFixed(4));
		} else if (acidity === "base") {
			setResult((14 + Math.log10(concFloat)).toFixed(4));
		} else {
			setResult("Tipo de solución no válido");
		}
	};

	const handlePhMessage = () => {
		setShowPhMessage(!showPhMessage);
	};

	return (
		<div className="calc-container">
			<div className="calculator-container">
				<div className="ph-calculator-title">
					<h2>Calculadora de pH</h2>
					<span>
						<p onMouseEnter={handlePhMessage} onMouseLeave={handlePhMessage}>
							?
						</p>
					</span>
					{showPhMessage && (
						<p className="ph-message">
							Solo para soluciones acuosas o diluidas
						</p>
					)}
				</div>
				<div>
					<label>
						Tipo de solución:{" "}
						<select value={acidity} onChange={handleAcidityChange}>
							<option value="ácido">Ácido</option>
							<option value="base">Base</option>
						</select>
					</label>
				</div>
				<div>
					<label>
						Concentración (M):
						<input
							type="text"
							value={concentration}
							onChange={handleConcentrationChange}
						/>
					</label>
				</div>
				<button type="button" onClick={calcPH}>
					Calcular pH
				</button>
				<div>
					<p>
						Resultado: <b>{result === "" ? "Introduce los datos" : result}</b>
					</p>
				</div>
				<button type="button" onClick={props.onClose}>
					Cerrar{" "}
				</button>
			</div>
		</div>
	);
}

function MolarityCalc(props) {
	const [volume, setVolume] = useState("");
	const [mol, setMol] = useState("");
	const [result, setResult] = useState("");

	const handleVolumeChange = (event) => {
		setVolume(event.target.value);
	};

	const handleMolChange = (event) => {
		setMol(event.target.value);
	};

	const calcMolarity = () => {
		if (!volume || !mol || Number.isNaN(volume) || Number.isNaN(mol)) {
			return;
		}

		const volFloat = parseFloat(volume);
		const molFloat = parseFloat(mol);

		setResult((molFloat / volFloat).toFixed(4));
	};

	return (
		<div className="calc-container">
			<div className="calculator-container">
				<h2>Molaridad</h2>
				<p>Calcula la molaridad de una solución</p>
				<label>
					Moles de soluto:
					<input onChange={handleMolChange} value={mol} type="text" />
				</label>
				<label>
					Volumen de la solución (L):
					<input onChange={handleVolumeChange} value={volume} type="text" />
				</label>
				<button type="button" onClick={calcMolarity}>
					Calcular
				</button>
				<p>
					Resultado: <b>{result}</b> mol/L{" "}
				</p>
				<button type="button" onClick={props.onClose}>
					Cerrar
				</button>
			</div>
		</div>
	);
}

function NormalityCalc(props) {
	const [eqWeight, setEqWeight] = useState("");
	const [volume, setVolume] = useState("");
	const [result, setResult] = useState("");

	const handleEqWeightChange = (event) => {
		setEqWeight(event.target.value);
	};

	const handleVolumeChange = (event) => {
		setVolume(event.target.value);
	};

	const calcNormality = () => {
		if (
			!eqWeight ||
			!volume ||
			Number.isNaN(eqWeight) ||
			Number.isNaN(volume)
		) {
			return;
		}

		const eqWeightFloat = parseFloat(eqWeight);
		const volumeFloat = parseFloat(volume);

		setResult((eqWeightFloat / volumeFloat).toFixed(4));
	};

	return (
		<div className="calc-container">
			<div className="calculator-container">
				<h2>Normalidad</h2>
				<p>Calcula la normalidad de una solución</p>
				<label>
					Peso equivalente:
					<input onChange={handleEqWeightChange} value={eqWeight} type="text" />
				</label>
				<label>
					Volumen de la solución (L):
					<input onChange={handleVolumeChange} value={volume} type="text" />
				</label>
				<button type="button" onClick={calcNormality}>
					Calcular
				</button>
				<p>
					Resultado: <b>{result}</b> eq/L{" "}
				</p>
				<button type="button" onClick={props.onClose}>
					Cerrar
				</button>
			</div>
		</div>
	);
}

function SolutionCalc(props) {
	const [concentration, setConcentration] = useState("");

	return (
		<div className="calc-container">
			<div className="calculator-container">
				<h2>Otras concentraciones</h2>
				<label>
					Concentración:{" "}
					<select value={concentration}>
						<option value="mass-mass">Masa / Masa</option>
						<option value="mass-volume">Masa / Volumen</option>
						<option value="volume-volume">volumen / volumen</option>
						<option value="ppm">Partes por millón</option>
						<option value="mole-fraction">Fracción molar</option>
						<option value="mass-fraction">Fracción en masa</option>
					</select>
				</label>
				<p>En construcción...</p>
				<button type="button" onClick={props.onClose}>
					Cerrar
				</button>
			</div>
		</div>
	);
}

function MolecularWeightCalc(props) {
	return (
		<div className="calc-container">
			<div className="calculator-container">
				<h2>Peso molecular</h2>
				<p>Escribe la formula molecular del compuesto</p>
				<DataHandler />
				<button type="button" onClick={props.onClose}>
					Cerrar
				</button>
			</div>
		</div>
	);
}
