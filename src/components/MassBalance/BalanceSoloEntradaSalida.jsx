import { useState } from 'react';

function BalanceSoloEntradaSalida() {
	const [input, setInput] = useState('');
	const [output, setOutput] = useState('');
	const [result, setResult] = useState(null);

	const calculate = () => {
		setResult(input ? parseFloat(input) : parseFloat(output));
	};

	return (
		<div>
			<h2>Solo Entrada o Salida</h2>
			<input
				type='number'
				value={input}
				onChange={(e) => setInput(e.target.value)}
				placeholder='Entrada'
			/>
			<input
				type='number'
				value={output}
				onChange={(e) => setOutput(e.target.value)}
				placeholder='Salida'
			/>
			<button onClick={calculate}>Calcular</button>
			{result !== null && <h3>Resultado: {result}</h3>}
		</div>
	);
}

export default BalanceSoloEntradaSalida;
