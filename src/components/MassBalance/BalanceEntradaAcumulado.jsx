import { useState } from 'react';

function BalanceEntradaAcumulado() {
	const [inputFlows, setInputFlows] = useState([
		{ id: 1, value: '', fractions: [{ name: 'Componente', value: '' }] },
	]);
	const [accumulated, setAccumulated] = useState('');
	const [result, setResult] = useState(null);

	const handleInputChange = (id, event, isFraction, fractionIndex) => {
		const newFlows = [...inputFlows];
		const index = newFlows.findIndex((flow) => flow.id === id);
		if (isFraction) {
			newFlows[index].fractions[fractionIndex].value = event.target.value;
		} else {
			newFlows[index].value = event.target.value;
		}
		setInputFlows(newFlows);
	};

	const handleFractionChange = (id, event, fractionIndex) => {
		const newFlows = [...inputFlows];
		const index = newFlows.findIndex((flow) => flow.id === id);
		newFlows[index].fractions[fractionIndex].name = event.target.value;
		setInputFlows(newFlows);
	};

	const addInputFlow = () => {
		const newFlow = {
			id: Date.now(),
			value: '',
			fractions: [{ name: 'Componente', value: '' }],
		};
		setInputFlows([...inputFlows, newFlow]);
	};

	const removeInputFlow = (id) => {
		const newFlows = inputFlows.filter((flow) => flow.id !== id);
		setInputFlows(newFlows);
	};

	const addFraction = (id) => {
		const newFlows = [...inputFlows];
		const index = newFlows.findIndex((flow) => flow.id === id);
		newFlows[index].fractions.push({ name: 'Componente', value: '' });
		setInputFlows(newFlows);
	};

	const removeFraction = (id, fractionIndex) => {
		const newFlows = [...inputFlows];
		const index = newFlows.findIndex((flow) => flow.id === id);
		newFlows[index].fractions.splice(fractionIndex, 1);
		setInputFlows(newFlows);
	};

	const calculate = () => {
		const totalInput = inputFlows.reduce(
			(sum, flow) => sum + parseFloat(flow.value || 0),
			0
		);
		setResult(totalInput + parseFloat(accumulated || 0));
	};

	return (
		<div>
			<h2>Entrada + Acumulado = Entrada</h2>
			<div className='flows'>
				{inputFlows.map((flow) => (
					<div
						key={flow.id}
						className='flow'
					>
						<input
							type='number'
							value={flow.value}
							onChange={(e) => handleInputChange(flow.id, e, false)}
							placeholder='Valor de entrada'
						/>
						<button onClick={() => removeInputFlow(flow.id)}>Eliminar</button>
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
									onChange={(e) => handleInputChange(flow.id, e, true, index)}
									placeholder='Valor de fracción'
								/>
								<button onClick={() => removeFraction(flow.id, index)}>
									Eliminar Fracción
								</button>
							</div>
						))}
					</div>
				))}
				<button onClick={addInputFlow}>Agregar Flujo de Entrada</button>
			</div>
			<div>
				<input
					type='number'
					value={accumulated}
					onChange={(e) => setAccumulated(e.target.value)}
					placeholder='Acumulado'
				/>
			</div>
			<button onClick={calculate}>Calcular</button>
			{result !== null && <h3>Resultado: {result}</h3>}
		</div>
	);
}

export default BalanceEntradaAcumulado;
