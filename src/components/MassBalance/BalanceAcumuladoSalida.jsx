import { useState } from 'react';

function BalanceAcumuladoSalida() {
	const [accumulated, setAccumulated] = useState('');
	const [outputFlows, setOutputFlows] = useState([
		{ id: 1, value: '', fractions: [{ name: 'Componente', value: '' }] },
	]);
	const [result, setResult] = useState(null);

	const handleOutputChange = (id, event, isFraction, fractionIndex) => {
		const newFlows = [...outputFlows];
		const index = newFlows.findIndex((flow) => flow.id === id);
		if (isFraction) {
			newFlows[index].fractions[fractionIndex].value = event.target.value;
		} else {
			newFlows[index].value = event.target.value;
		}
		setOutputFlows(newFlows);
	};

	const handleFractionChange = (id, event, fractionIndex) => {
		const newFlows = [...outputFlows];
		const index = newFlows.findIndex((flow) => flow.id === id);
		newFlows[index].fractions[fractionIndex].name = event.target.value;
		setOutputFlows(newFlows);
	};

	const addOutputFlow = () => {
		const newFlow = {
			id: Date.now(),
			value: '',
			fractions: [{ name: 'Componente', value: '' }],
		};
		setOutputFlows([...outputFlows, newFlow]);
	};

	const removeOutputFlow = (id) => {
		const newFlows = outputFlows.filter((flow) => flow.id !== id);
		setOutputFlows(newFlows);
	};

	const addFraction = (id) => {
		const newFlows = [...outputFlows];
		const index = newFlows.findIndex((flow) => flow.id === id);
		newFlows[index].fractions.push({ name: 'Componente', value: '' });
		setOutputFlows(newFlows);
	};

	const removeFraction = (id, fractionIndex) => {
		const newFlows = [...outputFlows];
		const index = newFlows.findIndex((flow) => flow.id === id);
		newFlows[index].fractions.splice(fractionIndex, 1);
		setOutputFlows(newFlows);
	};

	const calculate = () => {
		const totalOutput = outputFlows.reduce(
			(sum, flow) => sum + parseFloat(flow.value || 0),
			0
		);
		setResult(parseFloat(accumulated || 0) + totalOutput);
	};

	return (
		<div>
			<h2>Acumulado + Salida = Entrada</h2>
			<input
				type='number'
				value={accumulated}
				onChange={(e) => setAccumulated(e.target.value)}
				placeholder='Acumulado'
			/>
			<div className='flows'>
				{outputFlows.map((flow) => (
					<div
						key={flow.id}
						className='flow'
					>
						<input
							type='number'
							value={flow.value}
							onChange={(e) => handleOutputChange(flow.id, e, false)}
							placeholder='Valor de salida'
						/>
						<button onClick={() => removeOutputFlow(flow.id)}>Eliminar</button>
						<button onClick={() => addFraction(flow.id)}>
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
									onChange={(e) => handleFractionChange(flow.id, e, index)}
									placeholder='Nombre del componente'
								/>
								<input
									type='number'
									value={fraction.value}
									onChange={(e) => handleOutputChange(flow.id, e, true, index)}
									placeholder='Valor de fracción'
								/>
								<button onClick={() => removeFraction(flow.id, index)}>
									Eliminar Fracción
								</button>
							</div>
						))}
					</div>
				))}
				<button onClick={addOutputFlow}>Agregar Flujo de Salida</button>
			</div>
			<button onClick={calculate}>Calcular</button>
			{result !== null && <h3>Resultado: {result}</h3>}
		</div>
	);
}

export default BalanceAcumuladoSalida;
