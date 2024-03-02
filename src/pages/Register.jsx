import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const initialFormData = {
    firstName: "ABC",
    lastName: "XYZ",
    contactNumber: "9876543210",
    dob: "2001-06-08T06:28:52.000Z",
    username: "mirajsankdech",
    email: "abcxyz@gmail.com",
    password: "123456",
  };
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialFormData);
  const BASE_URL = "https://medichart-backend.vercel.app";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  console.log("Form data:", formData);
  try {
    const response = await axios.post(BASE_URL + "/auth/register", formData);
    console.log("Registration successful:", response.data);
    navigate("/auth/login");
  } catch (error) {
    console.log("Registration failed:", error);
    alert("Registration failed!");
  }
};

  return (
    <div className="flex items-center justify-center">
      <div className="card lg:card-side bg-base-100 shadow-2xl w-1/2">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <p className="text-center font-bold text-3xl text-blue-400">
              Registration
            </p>
            <div className="flex">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="input w-full border border-blue-400 h-8 mt-5"
                value={formData.firstName}
                onChange={handleChange}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="input ms-3 w-full border border-blue-400 h-8 mt-5"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="flex">
              <input
                type="text"
                name="username"
                placeholder="Username"
                className="input w-full border border-blue-400 h-8 mt-3"
                value={formData.username}
                onChange={handleChange}
              />
              <input
                type="text"
                name="contactNumber"
                placeholder="Contact Number"
                className="input ms-3 w-full border border-blue-400 h-8 mt-3"
                value={formData.contactNumber}
                onChange={handleChange}
              />
            </div>
            <div className="flex">
              <input
                type="text"
                name="email"
                placeholder="Email"
                className="input w-full border border-blue-400 h-8 mt-3"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input ms-3 w-full border border-blue-400 h-8 mt-3"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="p-8 flex flex-col justify-center items-center">
              <button
                type="submit"
                className="text-white bg-blue-400 hover:bg-blue-500 w-1/3 h-8 rounded-xl"
              >
                Submit
              </button>
              <p className="text-xs mt-2 text-blue-400">
                <a href="/auth/login">Already Exist</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
