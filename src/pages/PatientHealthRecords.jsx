import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ImagePopup from "../components/ImagePopup";
import axios from "axios";
import MyMedicalRecords from "./MyMedicalRecords";

export default function PatientHealthRecords() {
  const baseApiUrl = "https://medichart-backend.vercel.app";

  const getPatientHealthRecords = async () => {
    await axios
      .get(baseApiUrl + "/health-records/user/" + userId)
      .then((response) => {
        setRecords(
          response.data.reduce((acc, record) => {
            if (!acc[record.typeOfRecord]) {
              acc[record.typeOfRecord] = [];
            }
            acc[record.typeOfRecord].push(record);
            return acc;
          }, {})
        );
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  const [records, setRecords] = useState([]);
  useEffect(() => {
    getPatientHealthRecords();
  }, []);
  const { userId } = useParams();
  return (
    <div className="flex flex-col justify-center items-center text-black">
      {Object.entries(records).map(([type, record]) => (
        <div key={type}>
          <h2 className="text-xl font-bold">{type}</h2>
          <MyMedicalRecords records={record} />
        </div>
      ))}
    </div>
  );
}
