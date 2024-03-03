import React, { useState } from "react";
import Checkbox from "../components/Checkbox ";
import { useNavigate } from "react-router-dom";

export default function MedicalHistory() {
  const CheckBoxData = [
    {
      label: "Diabetes",
      OnChange: "Diabetes",
    },
    {
      label: "Thyroid related health problems",
      OnChange: "Thyroid",
    },
    {
      label: "Breathing or Respiratory",
      OnChange: "Breathing",
    },
    {
      label: "Epilepsy/Fits",
      OnChange: "Epilepsy",
    },
    {
      label: "Mental health issues",
      OnChange: "Mental",
    },
    {
      label: "Migraine",
      OnChange: "Migraine",
    },
    {
      label: "Skin problems",
      OnChange: "Skin",
    },
    {
      label: "Sinusitis",
      OnChange: "Sinusitis",
    },
    {
      label: "None",
      isChecked: "checkboxes.None",
      OnChange: "None",
    },
  ];

  const CheckBoxDataUser = [
    {
      label: "Allergy",
      OnChange: "Allergy",
    },
    {
      label: "High Cholesterol",
      OnChange: "Cholesterol",
    },
    {
      label: "Joint Pain/Arthritis",
      OnChange: "Arthritis",
    },
    {
      label: "Digestive Problems",
      OnChange: "Digestive",
    },
    {
      label: "High Blood Pressure",
      OnChange: "BloodPressure",
    },
    {
      label: "Kidney Disease",
      OnChange: "Kidney",
    },
    {
      label: "Liver Disease",
      OnChange: "Liver",
    },
    {
      label: "Vision Problems",
      OnChange: "Vision",
    },
    {
      label: "Other",
      isChecked: "checkboxes.Other",
      OnChange: "Other",
    },
  ];

  const [checkboxes, setCheckboxes] = useState({
    Diabetes: false,
    Thyroid: false,
  });

  const [checkboxesUser, setCheckboxesUser] = useState({
    Allergy: false,
    Cholesterol: false,
    Arthritis: false,
    Digestive: false,
    BloodPressure: false,
    Kidney: false,
    Liver: false,
    Vision: false,
    Other: false,
  });

  const [isContinueEnabled, setIsContinueEnabled] = useState(false);

  const handleCheckboxChange = (option) => {
    setCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [option]: !prevCheckboxes[option],
    }));

    setIsContinueEnabled(
      Object.values({ ...checkboxes, [option]: !checkboxes[option] }).includes(
        true
      ) && Object.values(checkboxesUser).includes(true)
    );
  };

  const handleCheckboxChangeUser = (option) => {
    setCheckboxesUser((prevCheckboxes) => ({
      ...prevCheckboxes,
      [option]: !prevCheckboxes[option],
    }));

    setIsContinueEnabled(
      Object.values({
        ...checkboxesUser,
        [option]: !checkboxesUser[option],
      }).includes(true) && Object.values(checkboxes).includes(true)
    );
  };

  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/MediCard");
  };

  return (
    <>
      <div className="flex justify-center items-center md:p-0 p-12">
        <div className="mt-5 rounded-lg md:w-1/2 bg-base-100 shadow-2xl">
          <div className="card-body">
            <p className="text-center text-secondary">
              Your Medi card is almost ready{" "}
            </p>
            <p className="text-center font-bold text-xl text-primary">
              Add your medical history{" "}
            </p>

            <p className="font-bold">
              Do you have any of the following medical conditions?{" "}
            </p>

            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {CheckBoxData.map((items, index) => (
                <div
                  key={index}
                  className="md:w-1/3 w-full p-1 pt-3 py-1 text-xs"
                  style={{ height: "75px" }}
                >
                  <div className="bg-white rounded-lg shadow p-4 h-full">
                    <Checkbox
                      label={items.label}
                      isChecked={checkboxes[items.OnChange]}
                      onChange={() => handleCheckboxChange(items.OnChange)}
                    />
                  </div>
                </div>
              ))}
            </div>

            <p className="font-bold mt-3">
              Additional medical conditions you have:{" "}
            </p>

            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {CheckBoxDataUser.map((items, index) => (
                <div
                  key={index}
                  className="md:w-1/3 w-full p-1 pt-3 py-1 text-xs"
                  style={{ height: "75px" }}
                >
                  <div className="bg-white rounded-lg shadow p-4 h-full">
                    <Checkbox
                      label={items.label}
                      isChecked={checkboxesUser[items.OnChange]}
                      onChange={() => handleCheckboxChangeUser(items.OnChange)}
                    />
                  </div>
                </div>
              ))}
            </div>

            <hr className="mt-5" />

            <button
              className="btn bg-primary text-white rounded-2xl mt-3 hover:text-black"
              disabled={!isContinueEnabled}
              onClick={handleContinue}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
