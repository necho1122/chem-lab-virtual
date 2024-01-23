import axios from "axios";
import React, { useState } from "react";
import "../assets/styles/DataHandler.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
    }

	return (
		<>
			<div className="data-container">
				<input
					type="text"
					id="search-compound"
					placeholder="Buscar componentes"
					onChange={handledSearch}
				/>
				{errorMessage && <p className="error-message">{errorMessage}</p>}
				{data.PC_Compounds?.[0]?.props.map((item) => {
					if (item.urn.name === "Allowed") {
						return (
							<div key={item.urn.name}>
								<h4>Compuesto</h4>
								<p>{item.value.sval}</p>
							</div>
						);
					}

					if (item.urn.label === "Molecular Weight") {
						return (
							<div key={item.urn.label}>
								<h4>{item.urn.label}</h4>
								<p id="molecular-weight">{item.value.sval}</p>
							</div>
						);
					}

					if (item.urn.label === "Molecular Formula") {
						return (
							<div key={item.urn.label}>
								<h4>{item.urn.label}</h4>
								<p id="molecular-formula">{item.value.sval}</p>
							</div>
						);
					}
					return null;
				})}
				<button type="button" onClick={addToReaction}>
					Agregar
				</button>
				<button type="button" onClick={resetReaction}>Reset</button>
			</div>
			<div className="add-to-reaction">
				<div className="reactive-one">
					<p>{reactionComponents[0]?.formula}</p>
					<p>{reactionComponents[0]?.weight}</p>
				</div>
				<div className="plus-components">
					{reactionComponents[1]?.formula && <p>+</p>}
				</div>
				<div className="reactive-two">
					<p>{reactionComponents[1]?.formula}</p>
					<p>{reactionComponents[1]?.weight}</p>
				</div>
				<div className="plus-components">
					{reactionComponents[1]?.formula && <p>---{">"}</p>}
				</div>
                <div className="plus-components">
					{reactionComponents[1]?.formula && <p>Producto</p>}
				</div>
			</div>
		</>
	);
}

export default DataHandler;
