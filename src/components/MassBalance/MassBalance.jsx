import { useState } from 'react';
import BalanceEntradaAcumulado from './BalanceEntradaAcumulado';
import BalanceEntradaSalida from './BalanceEntradaSalida';
import BalanceAcumuladoSalida from './BalanceAcumuladoSalida';
import BalanceSoloEntradaSalida from './BalanceSoloEntradaSalida';
import '../../assets/styles/MassBalance.css';

function BalanceCalculator() {
	const [selectedCase, setSelectedCase] = useState('');

	const handleSelectChange = (e) => {
		setSelectedCase(e.target.value);
	};

	return (
		<div className='mass-balance-container'>
			<h1>Calculadora de Balance de Masas</h1>
			<select
				value={selectedCase}
				onChange={handleSelectChange}
				className='select'
			>
				<option value=''>Seleccione un caso</option>
				<option value='1'>Entrada + Acumulado = Salida</option>
				<option value='2'>Entrada - Salida = Acumulado</option>
				<option value='3'>Acumulado + Salida = Entrada</option>
				<option value='4'>Solo Entrada o Salida</option>
			</select>

			{selectedCase === '1' && <BalanceEntradaAcumulado />}
			{selectedCase === '2' && <BalanceEntradaSalida />}
			{selectedCase === '3' && <BalanceAcumuladoSalida />}
			{selectedCase === '4' && <BalanceSoloEntradaSalida />}
		</div>
	);
}

export default BalanceCalculator;
