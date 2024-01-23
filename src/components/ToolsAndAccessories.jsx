export const ProgressBar = ({ progress }) => (
	<div>
		<div
			style={{ width: `${progress}%`, height: "20px", background: "#4CAF50" }}
		>
			{progress > 0 && <span>{progress}%</span>}
		</div>
	</div>
);
