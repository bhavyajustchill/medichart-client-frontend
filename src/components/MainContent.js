import React, { useState, useRef, useEffect } from "react";
import QrCodeGenerator from "./QRCode ";
import { useReactToPrint } from "react-to-print";

const MainContent = ({ selectedItem }) => {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("userData")));
  }, []);

  const [selectedImage, setSelectedImage] = useState(null);
  const [name, setName] = useState("ABC");
  const [gender, setGender] = useState("Male");
  const [dateOfBirth, setDateOfBirth] = useState("29-09-2001");
  const [address, setAddress] = useState(
    "C/O Sakdecha hemalbhai shramdeep Triveni Nagar Main Doshi Hostipal B/H Guruprasad Chowk Rajkot"
  );
  const [district, setDistrict] = useState("Rajkot");
  const [state, setState] = useState("Gujarat");
  const [pincode, setPincode] = useState("360004");

  const jsonData = {
    name: "Miraj Sankdecha",
    age: 20,
    email: "mirajsankdecha@gmail.com",
    address: {
      street: "123 Main St",
      city: "rajkot",
      state: "Gujarat",
      zip: "360004",
    },
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setSelectedImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const [phoneNumber, setPhoneNumber] = useState("");
  const placeholderNumber = "9558362840";

  const handleEditClick = () => {
    setPhoneNumber(placeholderNumber);
  };
  return (
    <div className="p-4 w-full">
      {selectedItem === "Medi Card" && (
        <>
          <a href="/PrintCard">
            <div
              className="flex justify-center md:mt-12"
              style={{ fontFamily: "Fredoka One" }}
            >
              <div className="flip-card ">
                <div className="flip-card-inner">
                  <div className="flip-card-front ">
                    <div
                      className="text-white  rounded-t-xl"
                      style={{ backgroundColor: "rgb(185 182 221)" }}
                    >
                      <div className="flex mb-4">
                        <div className="w-1/4 ">
                          <img
                            src="./assets/nationalLogo-removebg-preview.png"
                            className="md:h-24 pt-6 md:ms-4 "
                          />
                        </div>
                        <div className="md:w-1/2 ">
                          <div className="p-5 text-black">
                            <p className=" text-xl text-center">
                              Medi Card Health Account (MCHA)
                            </p>
                            <p className="mt-2 text-sm text-center">
                              મેડી કાર્ડ હેલ્થ એકાઉન્ટ (MCHA)
                            </p>
                          </div>
                        </div>
                        <div className="md:w-1/4 ">
                          <img src="./assets/L1.png" className="h-20 pt-6 " />
                        </div>
                      </div>
                    </div>
                    <div className="flex md:mb-4 md:p-5 ">
                      <div className="md:w-1/3 md:block hidden">
                        <img
                          className="h-40 rounded-md cursor-pointer"
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0PJgf4qj3_dTBGXSzb2VTI86fRUuCQgp9DVGkZLRTHb80bGGpmMyhw60dcP0qT5Tx5AI&usqp=CAU"
                          alt="profile"
                        />
                      </div>
                      <div className="w-1/2 mt-5">
                        <div>
                          <p className="text-gray-600">Name/નામ</p>
                          <p className="text-black text-xl">{`${userData.lastName} ${userData.firstName}`}</p>
                        </div>
                        <div className="mt-6">
                          <p className="text-gray-600">
                            Medi number/ મેડી નંબર
                          </p>
                          <p className="text-black text-xl">
                            {userData.mediCardNumber}
                          </p>
                        </div>
                      </div>
                      <div className="w-1/2 flex justify-center mt-5 ">
                        <QrCodeGenerator jsonData={jsonData} />
                      </div>
                    </div>
                    <div className="flex  ms-48">
                      <div className="w-1/3 ">
                        <div className="mt-5">
                          <p className="text-gray-600">Gender/જાતિ</p>
                          <p className="text-black text-xl">Male</p>
                        </div>
                      </div>
                      <div className="w-1/2 ">
                        <div className="mt-5">
                          <p className="text-gray-600">
                            Date of birth/જન્મ તારીખ{" "}
                          </p>
                          <p className="text-black text-xl">
                            {userData.dob.toString()}
                          </p>
                        </div>
                      </div>
                      <div className="w-1/2 ">
                        <div className="mt-5">
                          <p className="text-gray-600">Mobile/મોબાઈલ</p>
                          <p className="text-black text-xl">
                            {userData.contactNumber}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flip-card-back">
                    <div
                      className="text-white  rounded-t-xl"
                      style={{ backgroundColor: "rgb(185 182 221)" }}
                    >
                      <div className="flex mb-4">
                        <div className="w-1/4 ">
                          <img
                            src="./assets/nationalLogo-removebg-preview.png"
                            className="h-24 pt-6 ms-4 "
                          />
                        </div>
                        <div className="w-1/2 ">
                          <div className="p-5 text-black">
                            <p className=" text-xl text-center">
                              Medi Card Health Account (MCHA)
                            </p>
                            <p className="mt-2 text-sm text-center">
                              મેડી કાર્ડ હેલ્થ એકાઉન્ટ (MCHA)
                            </p>
                          </div>
                        </div>
                        <div className="w-1/4 ">
                          <img src="./assets/L1.png" className="h-20 pt-6 " />
                        </div>
                      </div>
                    </div>
                    <div
                      className="text-black"
                      style={{ fontFamily: "Fredoka One" }}
                    >
                      <div className="flex  p-4 ">
                        <div className="w-1/2">
                          <p className="text-xl font-bold">Instructions</p>
                        </div>
                        <div className="w-1/2 flex justify-end">
                          <p className="text-xl font-bold">
                            Toll-Free Number : 1800 114 477
                          </p>
                        </div>
                      </div>

                      <div className="ms-5">
                        <div>
                          <p className="text-md">
                            With this MEDI you have become a part of india`s
                            digital health ecosystem
                          </p>
                          <p className="text-xs">
                            આ MEDI વડે તમે ભારતના ડિજિટલ હેલ્થ ઇકોસિસ્ટમનો એક
                            ભાગ બની ગયા છો
                          </p>
                        </div>

                        <div className="mt-3">
                          <p className="text-md">
                            MEDI provides you a unique indentification and helps
                            in storing - safekeeping all your digital health
                            records at one place{" "}
                          </p>
                          <p className="text-xs">
                            MEDI તમને એક અનોખી ઓળખ પ્રદાન કરે છે અને તમારા તમામ
                            ડિજિટલ હેલ્થ રેકોર્ડને એક જ જગ્યાએ સંગ્રહિત કરવામાં
                            મદદ કરે છે.
                          </p>
                        </div>

                        <div className="mt-3">
                          <p className="text-md">
                            You Can download the MEDI mobile app, Aarogya Setu
                            or Other MCHA enabled app to view and share digital
                            health records with MCHA registered healthcare
                            service providers
                          </p>
                          <p className="text-xs">
                            તમે MCHA રજિસ્ટર્ડ હેલ્થકેર સર્વિસ પ્રોવાઇડર્સ સાથે
                            ડિજિટલ હેલ્થ રેકોર્ડ જોવા અને શેર કરવા માટે MEDI
                            મોબાઇલ એપ્લિકેશન, આરોગ્ય સેતુ અથવા અન્ય MCHA સક્ષમ
                            એપ્લિકેશન ડાઉનલોડ કરી શકો છો.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </>
      )}
      {selectedItem === "Edit Profile" && (
        <div>
          <h3 className="font-bold text-xl">Edit Profile</h3>
          <div className="card border border-gray-200 rounded-xl mt-5  bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="flex mb-4">
                <div className="w-3/4 ">
                  <div>
                    <div className="flex mb-4">
                      <div className="w-1/4">
                        <p className="font-bold">Name</p>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div className="w-1/4">
                        <p className="font-bold">Gender</p>
                        <input
                          type="text"
                          value={gender}
                          onChange={(e) => setGender(e.target.value)}
                        />
                      </div>
                      <div className="w-1/4">
                        <p className="font-bold">Date of birth</p>
                        <input
                          type="text"
                          value={dateOfBirth}
                          onChange={(e) => setDateOfBirth(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <p className="font-bold">Address</p>
                      <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </div>
                    <div className="flex mb-4 mt-4">
                      <div className="w-1/4">
                        <p className="font-bold">District</p>
                        <input
                          type="text"
                          value={district}
                          onChange={(e) => setDistrict(e.target.value)}
                        />
                      </div>
                      <div className="w-1/4">
                        <p className="font-bold">State</p>
                        <input
                          type="text"
                          value={state}
                          onChange={(e) => setState(e.target.value)}
                        />
                      </div>
                      <div className="w-1/4">
                        <p className="font-bold">Pincode</p>
                        <input
                          type="text"
                          value={pincode}
                          onChange={(e) => setPincode(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="font-bold">
                      Mobile Number <span className="text-red-600">*</span>
                    </p>
                    <div className="flex w-2/3 mt-1">
                      <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 rounded-s-md ">
                        <p>+91</p>
                      </span>
                      <input
                        type="number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder={placeholderNumber}
                        id="website-admin"
                        className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 flex-1 text-sm border-gray-300 p-2.5"
                      />
                      <button
                        onClick={handleEditClick}
                        className="text-red-500 ms-3 text-lg flex font-bold"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-pencil mt-2"
                          viewBox="0 0 16 16"
                        >
                          <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                        </svg>
                        <span className="ms-2"> Edit</span>
                      </button>
                    </div>
                  </div>
                  <div className="mt-5">
                    <p className="font-bold">Email Address</p>
                    <div className="flex w-2/3 mt-1">
                      <input
                        type="email"
                        id="website-admin"
                        className="  rounded-lg bg-gray-50 border text-gray-900  flex-1  text-sm border-gray-300 p-2.5  "
                      />
                      <a
                        href="#"
                        className="text-red-500 ms-3 text-lg flex font-bold"
                      >
                        <span className="ms-2"> Verify</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="w-1/4">
                  <div className="border border-gray-300 shadow-xl">
                    <div className="card-body">
                      <label htmlFor="imageUpload">
                        <img
                          className="h-64 cursor-pointer"
                          src={
                            selectedImage ||
                            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQApQMBIgACEQEDEQH/xAAbAAEAAwADAQAAAAAAAAAAAAAABQYHAgMEAf/EADkQAAICAQICBwUFBwUAAAAAAAABAgMEBREGQRIhIjFRYXGBkbLB0RNCU6GxFCQyM2KD4RVDUnKC/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oADAMBAAIRAxEAPwDUgAaZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHGco1xlOySjGPW5SeyRB5nFmn47caftMiS51pJe9gTwKrDjSnpdvBtSfNWJ/ImdO1vA1GShRd0bfw5raX+QJEDuAAAAAAAAAAAAAAAAAAAADrvurxqZ3XT6FcFvKXgjsKfxvnylOvT63tFLp2eb+782BEa5rV+q3NbuGNF9irx834six6AqB9Taaa6mutPwPgAuXC3EE75Rwc6bdvdVa/veT8y0mSxbjJSi9mnunv3GmaJnPUdNqyJfzNtrP8Asu/6kV7gAAAAAAAAAAAAAAAAAA9DMtctd+sZk3+NKK9E9l+hpq7zLtVj0NUzIvlfP4mB5QAaQAAAuHAVrdWZRyjKE17d18inlt4Bj2s6flBfEZVbgAAAAAAAAAAAAAAAAAA9TPeLcZ4+t2y27NyVi/R/mjQiG4n0l6nhKVK/eaXvD+pc4+0DPQfXFxbUk011NNdafgfCoAAKF84KxvsdKlbJdd1jkvRdS+ZUNJ027VMuNFSaj32T26oRNLpqhRVCmlKNcIqMV4JEHMAAAAAAAAAAAAAAAAAAAABE6vw/h6m3bLpU5D/3YLv9VzK5kcH58JP7G2m2Pjv0X7n9S7WWQqi5WzjBLnJ7I8Nuu6XU9p5tW/hF9L9AqoR4V1RvboVL+4iQwuDbG1LNyYxjv1wpW7ftf0JuPEekN7ftkV/5l9D1UapgZD2pzKZ78uns/cEc8LCx8ChU4larguvzb8W+Z6B+gCgACAAAAAAAAAAAAAAAR2t6vTpOP05rp3S/l179/n6AejOzcbBoduXaq4ct+9+i5lS1Li3JubhgR+wh3KcknP6Igs7Nyc+93ZVnTm+5dyj5Jcjzgdl992RNzvunbJ85ybOsAuIDb0AGD24Oq5+C/wB3yZqPOD7UX7GWnSuK6MiUas+Kos5TX8D+hSQCNaTUkpJ7p9zXM+lA0DiC7TpxpyG7MR8ucPNfQvlVkLq421SU65reMk+poiuYAAAAAAAAAAAADz6hmVYGHbk3Ps1rfb/k+SM01DNt1DLnk3vtSfUl3Jckid411B3ZkcKD7FHaltzk1v8AkitAAAVKAAoAAAAABYuEtY/ZMhYN8kqLZdhv7kn8mV0dfJkqxrYIvhvUP9R0uuc3vbX2LPFtc/dsShAAAAAAAAAOF1kaap2z/hri5P0RzIviW106HlyXfKKj73sBnd9s77rLrHvOyTm/a9zgAWJQAFAAAAAAAAAAEqxYuCcp1ajbjt9m+HUv6o9a/LcvJmWhWunWMOa/FS9/V8zTfEgAAAAAAAAEJxi9tCt25zh8QAGfgAsQABQAAAAAAAAAAHfgPbPxmvxofEjVACLAAEAAAf/Z"
                          }
                          alt="profile"
                        />
                      </label>
                      <input
                        type="file"
                        id="imageUpload"
                        accept="image/*"
                        style={{ display: "none" }}
                        onChange={handleImageChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {selectedItem === "Set Password" && (
        <div>
          <h3 className="font-bold text-xl">Set Password Page</h3>
          <div
            className="card border border-gray-200 rounded-xl mt-5  bg-base-100 shadow-xl"
            style={{ height: "450px" }}
          >
            <div className="card-body">
              <div className="flex mb-4">
                <div className="w-1/2 ">
                  <p className="font-medium">
                    Set Password <span className="text-red-600">*</span>
                  </p>
                  <input
                    type="password"
                    placeholder=" Password"
                    className="input mt-3  w-full border border-gray-500 "
                  />

                  <p className="text-xs mt-1 text-gray-500">
                    Password should contain minimum eight characters, at least
                    one Uppercase letter, One lowercase letter, one number and
                    one special character
                  </p>
                </div>
                <div className="w-1/2 ms-3">
                  <p className="font-medium">
                    Confirm Password <span className="text-red-600">*</span>
                  </p>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className=" mt-3 input  w-full border border-gray-500 "
                  />
                </div>
              </div>
              <div className="mt-5">
                <p className="font-medium">Validate Using</p>
                <div className="flex ms-5 mt-5">
                  <input
                    type="radio"
                    name="radio-1"
                    className="radio h-5 w-5"
                    checked
                  />
                  <lable className="ms-1 font-medium">
                    OTP on mobile number linked with Aadhar number{" "}
                  </lable>
                  <input
                    type="radio"
                    name="radio-1"
                    className="radio h-5 w-5 ms-5"
                  />
                  <lable className="ms-1 font-medium">
                    OTP on mobile number linked with Medi number
                  </lable>
                </div>
                <div className="flex justify-end">
                  <button className="btn btn-error w-32 mt-5 text-white">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainContent;
