import { useState } from 'react';

function BalanceEntradaSalida() {
	const [inputFlows, setInputFlows] = useState([
		{ id: 1, value: '', fractions: [{ name: 'Componente', value: '' }] },
	]);
	const [outputFlows, setOutputFlows] = useState([
		{ id: 1, value: '', fractions: [{ name: 'Componente', value: '' }] },
	]);
	const [result, setResult] = useState(null);

	const handleFlowChange = (
		flows,
		setFlows,
		id,
		event,
		isFraction,
		fractionIndex
	) => {
		const newFlows = [...flows];
		const index = newFlows.findIndex((flow) => flow.id === id);
		if (isFraction) {
			newFlows[index].fractions[fractionIndex].value = event.target.value;
		} else {
			newFlows[index].value = event.target.value;
		}
		setFlows(newFlows);
	};

	const handleFractionChange = (flows, setFlows, id, event, fractionIndex) => {
		const newFlows = [...flows];
		const index = newFlows.findIndex((flow) => flow.id === id);
		newFlows[index].fractions[fractionIndex].name = event.target.value;
		setFlows(newFlows);
	};

	const addFlow = (flows, setFlows) => {
		const newFlow = {
			id: Date.now(),
			value: '',
			fractions: [{ name: 'Componente', value: '' }],
		};
		setFlows([...flows, newFlow]);
	};

	const removeFlow = (flows, setFlows, id) => {
		const newFlows = flows.filter((flow) => flow.id !== id);
		setFlows(newFlows);
	};

	const addFraction = (flows, setFlows, id) => {
		const newFlows = [...flows];
		const index = newFlows.findIndex((flow) => flow.id === id);
		newFlows[index].fractions.push({ name: 'Componente', value: '' });
		setFlows(newFlows);
	};

	const removeFraction = (flows, setFlows, id, fractionIndex) => {
		const newFlows = [...flows];
		const index = newFlows.findIndex((flow) => flow.id === id);
		newFlows[index].fractions.splice(fractionIndex, 1);
		setFlows(newFlows);
	};

	const calculate = () => {
		const totalInput = inputFlows.reduce(
			(sum, flow) => sum + parseFloat(flow.value || 0),
			0
		);
		const totalOutput = outputFlows.reduce(
			(sum, flow) => sum + parseFloat(flow.value || 0),
			0
		);
		setResult(totalInput - totalOutput);
	};

	return (
		<div>
			<h2>Entrada - Salida = Acumulado</h2>
			<div className='flows'>
				<div>
					<h3>Flujos de Entrada</h3>
					{inputFlows.map((flow) => (
						<div
							key={flow.id}
							className='flow'
						>
							<input
								type='number'
								value={flow.value}
								onChange={(e) =>
									handleFlowChange(inputFlows, setInputFlows, flow.id, e, false)
								}
								placeholder='Valor de entrada'
							/>
							<button
								onClick={() => removeFlow(inputFlows, setInputFlows, flow.id)}
							>
								Eliminar
							</button>
							<button
								onClick={() => addFraction(inputFlows, setInputFlows, flow.id)}
							>
								Agregar Fracción
							</button>
							{flow.fractions.map((fraction, index) => (
								<div
									key={index}
									className='fraction'
								>
									<input
										type='text'
										value={fraction.name}
										onChange={(e) =>
											handleFractionChange(
												inputFlows,
												setInputFlows,
												flow.id,
												e,
												index
											)
										}
										placeholder='Nombre del componente'
									/>
									<input
										type='number'
										value={fraction.value}
										onChange={(e) =>
											handleFlowChange(
												inputFlows,
												setInputFlows,
												flow.id,
												e,
												true,
												index
											)
										}
										placeholder='Valor de fracción'
									/>
									<button
										onClick={() =>
											removeFraction(inputFlows, setInputFlows, flow.id, index)
										}
									>
										Eliminar Fracción
									</button>
								</div>
							))}
						</div>
					))}
					<button onClick={() => addFlow(inputFlows, setInputFlows)}>
						Agregar Flujo de Entrada
					</button>
				</div>

				<div>
					<h3>Flujos de Salida</h3>
					{outputFlows.map((flow) => (
						<div
							key={flow.id}
							className='flow'
						>
							<input
								type='number'
								value={flow.value}
								onChange={(e) =>
									handleFlowChange(
										outputFlows,
										setOutputFlows,
										flow.id,
										e,
										false
									)
								}
								placeholder='Valor de salida'
							/>
							<button
								onClick={() => removeFlow(outputFlows, setOutputFlows, flow.id)}
							>
								Eliminar
							</button>
							<button
								onClick={() =>
									addFraction(outputFlows, setOutputFlows, flow.id)
								}
							>
								Agregar Fracción
							</button>
							{flow.fractions.map((fraction, index) => (
								<div
									key={index}
									className='fraction'
								>
									<input
										type='text'
										value={fraction.name}
										onChange={(e) =>
											handleFractionChange(
												outputFlows,
												setOutputFlows,
												flow.id,
												e,
												index
											)
										}
										placeholder='Nombre del componente'
									/>
									<input
										type='number'
										value={fraction.value}
										onChange={(e) =>
											handleFlowChange(
												outputFlows,
												setOutputFlows,
												flow.id,
												e,
												true,
												index
											)
										}
										placeholder='Valor de fracción'
									/>
									<button
										onClick={() =>
											removeFraction(
												outputFlows,
												setOutputFlows,
												flow.id,
												index
											)
										}
									>
										Eliminar Fracción
									</button>
								</div>
							))}
						</div>
					))}
					<button onClick={() => addFlow(outputFlows, setOutputFlows)}>
						Agregar Flujo de Salida
					</button>
				</div>
			</div>
			<button onClick={calculate}>Calcular</button>
			{result !== null && <h3>Resultado: {result}</h3>}
		</div>
	);
}

export default BalanceEntradaSalida;
