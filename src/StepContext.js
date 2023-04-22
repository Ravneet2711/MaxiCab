import React, { useState } from "react";

const MultiStepContext = React.createContext();
const StepContext = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState([
    {
      numberOfPassenger: "",
      special_requirement: "",
      pickup_address: "",
      drop_location: "",
      date_time: "",
      return_time: "",
      name: "",
      email: "",
      mob_number: "",
    },
  ]);
  const [finalData, setFinalData] = useState([]);
  const nextStep = (e) => {
    e.preventDefault();
    setCurrentStep(currentStep + 1);
  };

  const previousStep = (e) => {
    e.preventDefault();
    setCurrentStep(currentStep - 1);
  };

  const sumbitData = (e) => {
    e.preventDefault();
    setFinalData({ ...userData, userData });
    // setUserData(userData);
    // setUserData("");
    setCurrentStep(1);
    setUserData("");
  };

  const values = {
    nextStep,
    previousStep,
    currentStep,
    setCurrentStep,
    userData,
    setUserData,
    sumbitData,
    finalData,
    setFinalData,
  };
  return (
    <MultiStepContext.Provider value={values}>
      {children}
    </MultiStepContext.Provider>
  );
};

export { StepContext };
export default MultiStepContext;
