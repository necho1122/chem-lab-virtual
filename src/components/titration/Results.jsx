/* eslint-disable react/prop-types */

function Results({ result, onEquivalentPoint, typeOfValue, units }) {
  return (
    <div className={result}>
      <h3>Resultados</h3>
      {Number.isNaN(onEquivalentPoint) ? (
        <p>Por favor ingrese los datos</p>
      ) : (
        <p>
          {`${typeOfValue}: `}
          <b>{`${onEquivalentPoint.toFixed(2)} ${units}`}</b>
        </p>
      )}
    </div>
  );
}

export default Results;
