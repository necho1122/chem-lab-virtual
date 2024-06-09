/* eslint-disable react/prop-types */
function TitrationForm({ volTitrant, setVolTitrant, conTitrant, setConTitrant, volSample, setVolSample, conSample, setConSample }) {
  return (
    <form className="data-for-test">
      <div className="data-titration">
        <h3>Titulante</h3>
        <label>
          <input
            type="text"
            placeholder="Vol. Titulante"
            value={volTitrant}
            onChange={(e) => setVolTitrant(e.target.value)}
          />
        </label>
        <label>
          <input
            type="text"
            placeholder="Concentración titulante"
            value={conTitrant}
            onChange={(e) => setConTitrant(e.target.value)}
          />
        </label>
      </div>
      <div className="data-sample">
        <h3>Muestra</h3>
        <label>
          <input
            type="text"
            placeholder="Vol. Muestra"
            value={volSample}
            onChange={(e) => setVolSample(e.target.value)}
          />
        </label>
        <label>
          <input
            type="text"
            placeholder="Concentración muestra"
            value={conSample}
            onChange={(e) => setConSample(e.target.value)}
          />
        </label>
      </div>
    </form>
  );
}

export default TitrationForm;

