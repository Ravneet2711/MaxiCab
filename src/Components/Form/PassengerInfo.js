import React, { useContext } from "react";
import { TextField } from "@mui/material";
import "../StyleSheets/form.css";
import MultiStepContext from "../../StepContext";

const PassengerInfo = () => {
  const { nextStep, previousStep, userData, setUserData } =
    useContext(MultiStepContext);
  console.log(userData);
  const { numberOfPassenger, special_requirement } = userData;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div>
      <div className="input-field">
        <TextField
          id="outlined-number"
          label="NUMBER OF PASSENGER"
          type="number"
          value={numberOfPassenger}
          name="numberOfPassenger"
          onChange={handleChange}
        />
      </div>
      <div className="input-field">
        <TextField
          id="outlined-required"
          label="SPECIAL REQUIREMENTS"
          type="text"
          name="special_requirement"
          value={special_requirement}
          onChange={handleChange}
          placeholder="Fitting wheelchair, Surfboard, bicycle etc."
        />
      </div>
      <div className="button">
        <button onClick={nextStep}>Next</button>

        <button
          onClick={previousStep}
          style={{ marginTop: "16px", marginBottom: "16px" }}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default PassengerInfo;
