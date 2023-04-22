import React, { useContext } from "react";
import "./StyleSheets/home.css";
import UserForm from "./Form/UserForm";
import DataSubmitted from "./Form/DataSubmitted";
import MultiStepContext from "../StepContext";

const Home = () => {
  const { userData } = useContext(MultiStepContext);
  return (
    <div className="home">
      <div className="user-form">
        {userData ? <UserForm /> : <DataSubmitted />}
      </div>
    </div>
  );
};

export default Home;
