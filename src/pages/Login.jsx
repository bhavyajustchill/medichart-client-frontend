import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Loader.css"; // Import the CSS file for the loader

export default function Login() {
  const BASE_URL = "https://medichart-backend.vercel.app";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // Add loading state
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
    setLoading(true); // Set loading to true when logging in
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
      })
      .finally(() => {
        setLoading(false); // Set loading to false after login attempt
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
                  src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
                  className="w-full"
                  alt="Tailwind CSS Carousel component"
                />
              </div>
              <div className="carousel-item w-full">
                <img
                  src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
                  className="w-full"
                  alt="Tailwind CSS Carousel component"
                />
              </div>
              <div className="carousel-item w-full">
                <img
                  src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
                  className="w-full"
                  alt="Tailwind CSS Carousel component"
                />
              </div>
              <div className="carousel-item w-full">
                <img
                  src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
                  className="w-full"
                  alt="Tailwind CSS Carousel component"
                />
              </div>
              <div className="carousel-item w-full">
                <img
                  src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
                  className="w-full"
                  alt="Tailwind CSS Carousel component"
                />
              </div>
              <div className="carousel-item w-full">
                <img
                  src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
                  className="w-full"
                  alt="Tailwind CSS Carousel component"
                />
              </div>
              <div className="carousel-item w-full">
                <img
                  src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
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
                className="input w-full border mt-1 h-10 border-blue-400"
              />
              <div className="pt-8">
                <button
                  type="submit"
                  className=" text-white  hover:bg-blue-400 bg-blue-400 w-full h-8 rounded-xl"
                  disabled={loading} // Disable button when loading
                >
                  {loading ? <div className="loader"></div> : "Login"}{" "}
                  {/* Display loader when loading */}
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
