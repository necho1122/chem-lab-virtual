import axios from "axios";
import React, { useState } from "react";
import "../assets/styles/DataHandler.css";

function DataHandler() {
	const [data, setData] = useState([]);
	const [errorMessage, setErrorMessage] = useState("");
	const [reactionComponents, setReactionComponents] = useState([]);

	const handledSearch = () => {
		const search = document.getElementById("search-compound").value;

		if (!search.trim()) {
			setData([]);
			setErrorMessage("");
			return;
		}

		axios
			.get(
				`https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/${search}/JSON`,
			)
			.then((res) => {
				if (res.data.PC_Compounds && res.data.PC_Compounds.length > 0) {
					setData(res.data);
					setErrorMessage("");
				} else {
					setData([]);
					setErrorMessage("No se encontraron coincidencias");
				}
			})
			.catch((error) => {
				console.error(error);
				setData([]);
				if (error.response?.data.Fault) {
					setErrorMessage(error.response.data.Fault.Message);
				} else if (
					error.response.data.Fault.Message ===
					"Expected a chemical structure name via URL or POST"
				) {
					setErrorMessage("");
				} else {
					setErrorMessage("Ocurrió un error en la búsqueda.");
				}
			});
	};

	const addToReaction = () => {
		setReactionComponents((prevState) => {
			const newState = [...prevState];
			newState.push({
				formula: document.getElementById("molecular-formula").textContent,
				weight: document.getElementById("molecular-weight").textContent,
			});
			return newState;
		});
		document.getElementById("search-compound").value = "";
		setData([]);
		setErrorMessage("");
		console.log(reactionComponents);
	};

	const resetReaction = () => {
		setReactionComponents([]);
	};

	return (
		<>
			<div className="data-container">
				<div className="search-bar">
					<input
						type="text"
						id="search-compound"
						placeholder="Buscar componentes"
						onChange={handledSearch}
					/>
				</div>
				<div className="search-results">
					{errorMessage && <p className="error-message">{errorMessage}</p>}
					{data.PC_Compounds?.[0]?.props.map((item) => {
						if (item.urn.name === "Allowed") {
							return (
								<div key={item.urn.name}>
									<h4>{item.value.sval}</h4>
								</div>
							);
						}

						if (item.urn.label === "Molecular Weight") {
							return (
								<div className="pm-result" key={item.urn.label}>
									<p style={{ marginRight: "10px", padding: "0" }}>PM: </p>
									<p id="molecular-weight">
										{parseFloat(item.value.sval).toFixed(2)} g/mol
									</p>
								</div>
							);
						}

						if (item.urn.label === "Molecular Formula") {
							return (
								<div className="mf-result" key={item.urn.label}>
									<p style={{ marginRight: "10px", padding: "0" }}>Formula:</p>
									<p id="molecular-formula">{item.value.sval}</p>
								</div>
							);
						}
						return null;
					})}
					{data.PC_Compounds ? (
						<div>
							<button
								type="button"
								onClick={addToReaction}
								className="add-compounds"
							>
								Agregar
							</button>
						</div>
					) : null}
				</div>
				<div className="add-to-reaction-container">
					<div className="add-to-reaction">
						<div className="reactive-one">
							<p>{reactionComponents[0]?.formula}</p>
						</div>
						<div className="plus-components">
							{reactionComponents[1]?.formula && <p>+</p>}
						</div>
						<div className="reactive-two">
							<p>{reactionComponents[1]?.formula}</p>
						</div>
						<div className="plus-components">
							{reactionComponents[1]?.formula && <p>---{">"}</p>}
						</div>
						<div className="plus-components">
							{reactionComponents[1]?.formula && <p>Producto</p>}
						</div>
					</div>
					{reactionComponents[0]?.formula && (
						<button
							type="button"
							onClick={resetReaction}
							className="reset-reaction"
						>
							Reset
						</button>
					)}
				</div>
			</div>
		</>
	);
}

export default DataHandler;
