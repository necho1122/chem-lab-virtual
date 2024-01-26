import "../assets/styles/ToolsAndAccessories.css";

export const ProgressBar = ({ progress }) => (
	<div
		className={`progress-bar ${progress === 100 ? "progress-bar-hidden" : ""}`}
	>
		<div
			style={{ width: `${progress}%`, height: "20px", background: "#4CAF50" }}
		>
			{progress > 0 && <span>{progress}%</span>}
		</div>
	</div>
);
