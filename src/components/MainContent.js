import React from "react";

const MainContent = ({ selectedItem }) => {
  return (
    <div className="p-4 w-full">
      {selectedItem === "Medi Card" && (
        <div>
          <h3>MCHA Card Page</h3>
        </div>
      )}
      {selectedItem === "Edit Profile" && (
        <div>
          <h3 className="font-bold text-xl">Edit Profile</h3>
          <div className="card border border-gray-200 rounded-xl mt-5  bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="flex mb-4">
                <div className="w-3/4 ">
                  <div className="flex mb-4">
                    <div className="w-1/4">
                      <p className="font-bold">Name</p>
                      <p>Twishaaanu </p>
                    </div>
                    <div className="w-1/4">
                      <p className="font-bold">Gender</p>
                      <p>Male</p>
                    </div>
                    <div className="w-1/4">
                      <p className="font-bold">Date of birth</p>
                      <p>29-09-2001</p>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="font-bold">Address</p>
                    <p>
                      C/O Sakdecha hemalbhai shramdeep Triveni Nagar Main Doshi
                      Hostipal B/H Guruprasad Chowk Rajkot
                    </p>
                  </div>
                  <div className="flex mb-4 mt-4">
                    <div className="w-1/4">
                      <p className="font-bold">Distict</p>
                      <p>Rajko </p>
                    </div>
                    <div className="w-1/4">
                      <p className="font-bold">State</p>
                      <p>Gujarat</p>
                    </div>
                    <div className="w-1/4">
                      <p className="font-bold">Pincode</p>
                      <p>360004</p>
                    </div>
                  </div>

                  <div className="flex w-2/3">
                    <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 rounded-s-md ">
                      <p>+91</p>
                    </span>
                    <input
                      type="number"
                      id="website-admin"
                      className=" rounded-none rounded-e-lg bg-gray-50 border text-gray-900  flex-1  text-sm border-gray-300 p-1.5  "
                    />
                    <a
                      href="#"
                      className="text-red-500 ms-3 text-lg flex font-bold"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-pencil mt-2"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                      </svg>
                      <span className="ms-2"> Edit</span>
                    </a>
                  </div>
                </div>
                <div className="w-1/4 bg-gray-400 h-12"></div>
              </div>
            </div>
          </div>
        </div>
      )}
      {selectedItem === "Set Password" && (
        <div>
          <h3>Set Password Page</h3>
        </div>
      )}
    </div>
  );
};

export default MainContent;
