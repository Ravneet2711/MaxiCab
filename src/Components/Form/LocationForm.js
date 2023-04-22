import React, { useContext } from "react";
import { TextField } from "@mui/material";
import "../StyleSheets/form.css";
import MultiStepContext from "../../StepContext";

const LocationForm = () => {
  const [show, setShow] = React.useState(false);
  const { nextStep, userData, setUserData } = useContext(MultiStepContext);
  const { pickup_address, drop_location, date_time, return_time } = userData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  return (
    <div>
      <div className="trip-button">
        <button id="onway" className="trip-btn" onClick={() => setShow(false)}>
          Oneway
        </button>
        <button
          id="roundtrip"
          className="trip-btn"
          onClick={() => setShow(true)}
        >
          Round Trip
        </button>
      </div>
      <div className="input-field">
        <TextField
          id="outlined-required"
          label="PICKUP ADDRESS"
          type="text"
          value={pickup_address}
          name="pickup_address"
          onChange={handleChange}
        />
      </div>
      <div className="input-field">
        <TextField
          id="outlined-required"
          label="DROP LOCATION"
          type="text"
          value={drop_location}
          name="drop_location"
          onChange={handleChange}
          placeholder="Fitting wheelchair, Surfboard, bicycle etc."
        />
      </div>
      <div className="input-field">
        <TextField
          id="outlined"
          label="DATE/TIME"
          onChange={handleChange}
          name="date_time"
          value={date_time}
          type="datetime-local"
        />
      </div>

      {show && (
        <div className="input-field">
          <TextField
            id="outlined"
            label="RETURN DATE/TIME"
            onChange={handleChange}
            value={return_time}
            name="return_time"
            type="datetime-local"
          />
        </div>
      )}

      <div className="button">
        <button onClick={nextStep}>GET QUICK QUOTE</button>
      </div>
    </div>
  );
};

export default LocationForm;
