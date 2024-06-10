/* eslint-disable react/prop-types */

function ActionButtons({ handleButtonClick, handlePreviousNotes, handleShowCompounds, showCompoundsSection }) {
  return (
    <div className="buttons-container">
        <div className="button-and-note">
      <button type="button" onClick={handleButtonClick} className="titration-button">
        Titular
      </button>
      <button type="button" className="circle" onClick={handlePreviousNotes}>
        &#10067;
      </button>
      
    </div>
    <button onClick={handleShowCompounds} type="button" className="toggle-show-compounds">
        {!showCompoundsSection ? "Agregar compuestos" : "Cerrar"}
      </button>
    </div>
  );
}

export default ActionButtons;
