import "../../assets/styles/Titration.css";
import { Beaker, Bureta, SampleOne } from "../Icons";
import { useState } from "react";
import { ProgressBar, PreviousNotes } from "../ToolsAndAccessories";
import NavBar from "../NavBar";
import DataHandler from "../DataHandler";
import TitrationForm from "./TitrationForm";
import Results from "./Results";
import ActionButtons from "./ActionButtons";

function AcidBaseTitration() {
  const [titulacion, setTitulacion] = useState(<SampleOne />);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState("result-hidden");
  const [volTitrant, setVolTitrant] = useState("");
  const [conTitrant, setConTitrant] = useState("");
  const [volSample, setVolSample] = useState("");
  const [conSample, setConSample] = useState("");
  const [onEquivalentPoint, setonEquivalentPoint] = useState(0);
  const [showCompoundsSection, setShowCompoundsSection] = useState(false);
  const [units, setUnits] = useState("");
  const [typeOfValue, setTypeOfValue] = useState("");
  const [showPreviousNotes, setShowPreviousNotes] = useState(false);

  const handleTitulacion = () => {
    setTitulacion(<Beaker className="beaker" />);
  };

  const startLoading = () => {
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < 100) {
          return prevProgress + 10;
        }
        clearInterval(interval);
        return 100;
      });
    }, 200);
  };

  const showResult = () => {
    setTimeout(() => {
      setResult("result-container");
    }, 2000);
  };

  const handleButtonClick = () => {
    setTimeout(() => {
      handleTitulacion();
    }, 2000);

    startLoading();
    showResult();
    equivalentPointResult();
  };

  //volume on equivalent point
  const volume1 = parseFloat(volTitrant);
  const volume2 = parseFloat(volSample);
  const concentration1 = parseFloat(conTitrant);
  const concentration2 = parseFloat(conSample);

  const results = {
    volume1: (concentration2 * volume2) / concentration1,
    volume2: (concentration1 * volume1) / concentration2,
    concentration1: (concentration2 * volume2) / volume1,
    concentration2: (concentration1 * volume1) / volume2,
  };

  const equivalentPointResult = () => {
    if (volTitrant.length === 0) {
      setonEquivalentPoint(results.volume1);
      setTypeOfValue("Volumen titulante");
      setUnits("ml");
    } else if (volSample.length === 0) {
      setonEquivalentPoint(results.volume2);
      setTypeOfValue("Volumen muestra");
      setUnits("ml");
    } else if (conTitrant.length === 0) {
      setonEquivalentPoint(results.concentration1);
      setTypeOfValue("Concentración titulante");
      setUnits("M");
    } else if (conSample.length === 0) {
      setonEquivalentPoint(results.concentration2);
      setTypeOfValue("Concentración muestra");
      setUnits("M");
    }
  };

  const handleShowCompounds = () => {
    setShowCompoundsSection(!showCompoundsSection);
  };

  const handlePreviousNotes = () => {
    setShowPreviousNotes(!showPreviousNotes);
  };

  return (
    <>
      <NavBar />
      <div className="titration-container">
        <div className="titration-section-container">
          <h2>Titulación Ácido Base</h2>
          <TitrationForm
            volTitrant={volTitrant}
            setVolTitrant={setVolTitrant}
            conTitrant={conTitrant}
            setConTitrant={setConTitrant}
            volSample={volSample}
            setVolSample={setVolSample}
            conSample={conSample}
            setConSample={setConSample}
          />
          <ActionButtons
            handleButtonClick={handleButtonClick}
            handlePreviousNotes={handlePreviousNotes}
            showPreviousNotes={showPreviousNotes}
            handleShowCompounds={handleShowCompounds}
            showCompoundsSection={showCompoundsSection}
          />
          <ProgressBar progress={progress} />
          {showPreviousNotes && (
            <div className="previous-notes-modal">
              <button type="button" onClick={handlePreviousNotes} className="previous-notes-modal-close">
                X
              </button>
              <PreviousNotes />
            </div>
          )}
          <div className="lab-tools">
            <Bureta className="bureta" />
            {titulacion}
          </div>
          <Results
            result={result}
            onEquivalentPoint={onEquivalentPoint}
            typeOfValue={typeOfValue}
            units={units}
          />
          {showCompoundsSection && <DataHandler />}
        </div>
      </div>
    </>
  );
}

export default AcidBaseTitration;
