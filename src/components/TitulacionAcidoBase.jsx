import "../assets/styles/Titulacion.css";
import { Beaker, Bureta, SampleOne } from "./Icons";
import { useState } from "react";
import { ProgressBar } from "./ToolsAndAccessories";
import NavBar from "./NavBar";
import DataHandler from "./DataHandler";

function TitulacionAcidoBase() {
	const [titulacion, setTitulacion] = useState(<SampleOne />);
	const [progress, setProgress] = useState(0);
	const [result, setResult] = useState("result-hidden");
	const [volTitrant, setVolTitrant] = useState("");
	const [conTitrant, setConTitrant] = useState("");
	const [volSample, setVolSample] = useState("");
	const [conSample, setConSample] = useState("");
	const [onEquivalentPoint, setonEquivalentPoint] = useState(0);
	const [showCompoundsSection, setShowCompoundsSection] = useState(false);
	const [units, setUnits] = useState("");
	const [typeOfValue, setTypeOfValue] = useState("");

	const handleTitulacion = () => {
		setTitulacion(<Beaker className="beaker" />);
	};

	const startLoading = () => {
		setProgress(0);

		const interval = setInterval(() => {
			setProgress((prevProgress) => {
				if (prevProgress < 100) {
					return prevProgress + 10;
				}
				clearInterval(interval);
				return 100;
			});
		}, 200);
	};

	const showResult = () => {
		setTimeout(() => {
			setResult("result-container");
		}, 2000);
	};

	const handleButtonClick = () => {
		setTimeout(() => {
			handleTitulacion();
		}, 2000);

		startLoading();
		showResult();
		equivalentPointResult();
	};

	//volume on equivalent point

	const volume1 = parseFloat(volTitrant);
	const volume2 = parseFloat(volSample);
	const concentration1 = parseFloat(conTitrant);
	const concentration2 = parseFloat(conSample);

	const results = {
		volume1: (concentration2 * volume2) / concentration1,
		volume2: (concentration1 * volume1) / concentration2,
		concentration1: (concentration2 * volume2) / volume1,
		concentration2: (concentration1 * volume1) / volume2,
	};

	const equivalentPointResult = () => {
		if (volTitrant.length === 0) {
			setonEquivalentPoint(results.volume1);
			setTypeOfValue("Volumen titulante");
			setUnits("ml");
		} else if (volSample.length === 0) {
			setonEquivalentPoint(results.volume2);
			setTypeOfValue("Volumen muestra");
			setUnits("ml");
		} else if (conTitrant.length === 0) {
			setonEquivalentPoint(results.concentration1);
			setTypeOfValue("Concentración titulante");
			setUnits("M");
		} else if (conSample.length === 0) {
			setonEquivalentPoint(results.concentration2);
			setTypeOfValue("Concentración muestra");
			setUnits("M");
		}
	};

	const handleShowCompounds = () => {
		setShowCompoundsSection(!showCompoundsSection);
	};

	return (
		<>
			<NavBar />
			<div className="titration-container">
				<div className="titration-section-container">
					<h2>Titulación Ácido Base</h2>
					<form className="data-for-test">
						<div className="data-titration">
							<h3>Titulante</h3>
							<label>
								<input
									type="text"
									name="name"
									placeholder="Vol. Titulante"
									value={volTitrant}
									onChange={(e) => setVolTitrant(e.target.value)}
								/>
							</label>

							<label>
								<input
									type="text"
									name="name"
									placeholder="Concentración titulante"
									value={conTitrant}
									onChange={(e) => setConTitrant(e.target.value)}
								/>
							</label>
						</div>
						<div className="data-sample">
							<h3>Muestra</h3>
							<label>
								<input
									type="text"
									name="name"
									placeholder="Vol. Muestra"
									value={volSample}
									onChange={(e) => setVolSample(e.target.value)}
								/>
							</label>
							<label>
								<input
									type="text"
									name="name"
									placeholder="Concentración muestra"
									value={conSample}
									onChange={(e) => setConSample(e.target.value)}
								/>
							</label>
						</div>
					</form>
					<button
						type="button"
						onClick={handleButtonClick}
						className="titration-button"
					>
						Titular
					</button>
					<ProgressBar progress={progress} />

					<div>
						<button
							onClick={handleShowCompounds}
							type="button"
							className="toggle-show-compounds"
						>
							{!showCompoundsSection ? "Agregar compuestos" : "Cerrar"}
						</button>
						{showCompoundsSection && <DataHandler />}
					</div>
					<div className="lab-tools">
						<Bureta className="bureta" />
						{titulacion}
					</div>

					<div className={result}>
						<h3>Resultados</h3>
						{Number.isNaN(onEquivalentPoint) ? (
							<p>Por favor ingrese los datos</p>
						) : (
							<p>
								{`${typeOfValue}: `}
								<b>{`${onEquivalentPoint.toFixed(2)} ${units}`}</b>
							</p>
						)}
					</div>
				</div>
			</div>
		</>
	);
}

export default TitulacionAcidoBase;
