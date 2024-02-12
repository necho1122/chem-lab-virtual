import { useState, useEffect } from "react";
import '../assets/styles/ToolsAndAccessories.css';

export const ProgressBar = ({ progress }) => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		if (progress === 100) {
			setIsVisible(false);
		} else {
			setIsVisible(true);
		}
	}, [progress]);

	return (
		<div className={`${isVisible ? "progress-bar" : "progress-bar-hidden"}`}>
			{isVisible && (
				<div
					style={{
						width: `${progress}%`,
						height: "20px",
						background: "#4CAF50",
					}}
				>
					{progress > 0 && <span>{progress}%</span>}
				</div>
			)}
		</div>
	);
};

export const PreviousNotes = () => {
	return (
		<div className="previous-notes">
			<h3>Nota:</h3>
			<p>
				Dejar en blanco el valor que se desea calcular y si requiere de un
				cálculo previo, visite las otras secciones!
			</p>
		</div>
	);
};
