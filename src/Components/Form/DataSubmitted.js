import React, { useContext } from "react";
import MultiStepContext from "../../StepContext";

const DataSubmitted = () => {
  const { finalData } = useContext(MultiStepContext);
  console.log(finalData);
  const { name, date_time, drop_location } = finalData;
  console.log(finalData);

  function goBack() {
    window.history.back();
  }
  return (
    <div>
      <h2>
        Hello {name}, your ride is booked for {drop_location} on {date_time}
      </h2>
      <button onClick={goBack}>Back</button>
    </div>
  );
};

export default DataSubmitted;
