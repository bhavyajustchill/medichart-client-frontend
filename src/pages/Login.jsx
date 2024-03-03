import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const BASE_URL = "https://medichart-backend.vercel.app";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    redirectToMedicalHistory();
  }, []);

  const redirectToMedicalHistory = () => {
    if (
      localStorage.getItem("jwtToken") &&
      localStorage.getItem("jwtToken").length > 0
    ) {
      navigate("/MedicalHistory");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    await axios
      .post(BASE_URL + "/auth/login", { email: email, password: password })
      .then((response) => {
        // setJwtToken(response.data.data.token);
        localStorage.setItem("jwtToken", response.data.data.token);
        localStorage.setItem(
          "userData",
          JSON.stringify(response.data.data.user)
        );
        redirectToMedicalHistory();
      })
      .catch((error) => {
        console.log(error);
        alert("Invalid Credentials!");
      });
  };

  return (
    <>
      <div
        className="flex items-center justify-center "
        style={{
          backgroundImage: "url('/assets/login-background.jpg')",
          backdropFilter: "blu",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          height: "100dvh",
        }}
      >
        <div className="card lg:card-side bg-base-100 shadow-2xl md:w-1/2 md:h-80  ">
          <figure className="md:w-1/2 ">
            <div className=" carousel ">


              <div className="carousel-item w-full">
                <img
                  src="https://img.freepik.com/free-vector/tiny-cardiology-doctor-nurse-examining-heart-blood-pressure-prescribing-treatment-medical-cardiovascular-checkup-flat-vector-illustration-anatomy-hospital-heart-diseases-health-care-concept_74855-20963.jpg?t=st=1709437481~exp=1709441081~hmac=64b50fedd194899e267e62dae4c4dba600c5d22559df35f77484a7aa505cf735&w=996"
                  className="w-full"
                  alt="Tailwind CSS Carousel component"
                />
              </div>

              <div className="carousel-item w-full">
                <img
                  src="https://img.freepik.com/free-photo/athlete-running-training_342744-394.jpg?w=996&t=st=1709437409~exp=1709438009~hmac=0425970897986eef6ca4199f98fe2d843ff37dc8a1b6aca3616a12d1d14aa548"
                  className="w-full"
                  alt="Tailwind CSS Carousel component"
                />
              </div>
              <div className="carousel-item w-full">
                <img
                  src="https://img.freepik.com/free-photo/close-up-doctor-with-stethoscope_23-2149191355.jpg?w=996&t=st=1709437222~exp=1709437822~hmac=7454c72df356cf2eb201751e016e42bff44039bbc3116a14338ca6ef3c72e855 "
                  className="w-full"
                  alt="Tailwind CSS Carousel component"
                />
              </div>
            </div>
          </figure>
          <div className="card-body ">
            <p className="text-center font-bold text-3xl  text-blue-400">
              Health card
            </p>
            <form
              name="login-form"
              method="POST"
              onSubmit={(e) => handleLogin(e)}
            >
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email ID."
                className="input w-full border border-blue-400 h-10 md:mt-0 mt-5"
              />
              <input
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
                className="input w-full border mt-5 h-10 border-blue-400"
              />
              <div className="pt-8">
                <button
                  type="submit"
                  className=" text-white  hover:bg-blue-400 bg-blue-400 w-full h-8 rounded-xl"
                >
                  Login
                </button>

                <p className="text-xs mt-2 text-blue-400">
                  <a href="/auth/register">Create Account</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
