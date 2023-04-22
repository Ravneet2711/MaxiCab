import React, { useContext } from "react";
import LocationForm from "./LocationForm";
import PassengerInfo from "./PassengerInfo";
import PersonalInfo from "./PersonalInfo";
import "../StyleSheets/form.css";
import { Stepper, StepLabel, Step } from "@mui/material";
import MultiStepContext from "../../StepContext";

const UserForm = () => {
  const { currentStep } = useContext(MultiStepContext);
  function showStep(step) {
    switch (step) {
      case 1:
        return <LocationForm />;
      case 2:
        return <PassengerInfo />;
      case 3:
        return <PersonalInfo />;
      default:
        return <LocationForm />;
    }
  }
  return (
    <div className="form-user">
      <div className="center-stepper">
        <Stepper
          activeStep={currentStep - 1}
          orientation="horizontal"
          alternativeLabel
        >
          <Step className="step">
            <StepLabel></StepLabel>
          </Step>
          <Step className="step">
            <StepLabel></StepLabel>
          </Step>
          <Step className="step">
            <StepLabel></StepLabel>
          </Step>
        </Stepper>
      </div>
      {showStep(currentStep)}
    </div>
  );
};

export default UserForm;
