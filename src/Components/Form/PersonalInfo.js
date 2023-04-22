import React, { useContext } from "react";
import { TextField } from "@mui/material";
import "../StyleSheets/form.css";
import MultiStepContext from "../../StepContext";

const PersonalInfo = () => {
  const { previousStep, sumbitData, userData, setUserData } =
    useContext(MultiStepContext);

  const { name, email, mob_number } = userData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <form onSubmit={sumbitData}>
      <div className="input-field">
        <TextField
          id="outlined-required"
          label="NAME"
          placeholder="Enter your name"
          type="text"
          value={name}
          name="name"
          onChange={handleChange}
        />
      </div>

      <div className="input-field">
        <TextField
          id="outlined-required"
          label="EMAIL ADDRESS"
          placeholder="Enter your email"
          type="email"
          value={email}
          name="email"
          onChange={handleChange}
        />
      </div>
      <div className="input-field">
        <TextField
          id="outlined-required"
          label="MOBILE NUMBER"
          placeholder="Enter your phone number"
          type="tel"
          value={mob_number}
          name="mob_number"
          onChange={handleChange}
        />
      </div>
      <div className="button">
        <button type="submit" onSubmit={sumbitData}>
          Submit
        </button>

        <button
          onClick={previousStep}
          style={{ marginTop: "16px", marginBottom: "16px" }}
        >
          Back
        </button>
      </div>
    </form>
  );
};

export default PersonalInfo;
