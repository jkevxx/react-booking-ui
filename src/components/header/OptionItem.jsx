// import React from "react";

const OptionItem = ({
  propertyName,
  typeElement,
  objOptions,
  funHandleOption,
}) => {
  return (
    <div className="optionItem">
      <span className="optionText">{propertyName}</span>
      <div className="optionCounter">
        {typeElement === "children" ? (
          <button
            disabled={objOptions[typeElement] <= 0}
            className="optionCounterButton"
            onClick={() => funHandleOption(typeElement, "decrease")}
          >
            -
          </button>
        ) : (
          <button
            disabled={objOptions[typeElement] <= 1}
            className="optionCounterButton"
            onClick={() => funHandleOption(typeElement, "decrease")}
          >
            -
          </button>
        )}
        <span className="optionCounterNumber">{objOptions[typeElement]}</span>
        <button
          className="optionCounterButton"
          onClick={() => funHandleOption(typeElement, "increment")}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default OptionItem;
