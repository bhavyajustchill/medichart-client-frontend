import React, { useState } from "react";
import "./Loader.css"; // Import the CSS file

function HealthID() {
  const [inputValue, setInputValue] = useState("");
  const [tags, setTags] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [documentDate, setDocumentDate] = useState("");
  const [typeOfRecord, setTypeOfRecord] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputKeyPress = (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addTag();
    }
  };

  const addTag = () => {
    const trimmedValue = inputValue.trim();
    if (trimmedValue !== "" && !tags.includes(trimmedValue)) {
      setTags([...tags, trimmedValue]);
      setInputValue("");
    }
  };

  const removeTag = (tag) => {
    setTags(tags.filter((t) => t !== tag));
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!selectedFile) {
      alert("Please select a file");
      return;
    }

    const userid = JSON.parse(localStorage.getItem("userData"))._id;

    // Construct FormData object
    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("userId", userid);
    formData.append("documentDate", documentDate); // Assuming you have 'documentDate' state
    formData.append("typeOfRecord", typeOfRecord); // Assuming you have 'typeOfRecord' state
    tags.forEach((tag) => formData.append("tags[]", tag)); // Append each tag as an array element

    try {
      setLoading(true); // Set loading to true when data is being sent
      const response = await fetch(
        "https://medichart-backend.vercel.app/health-records",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Failed to upload file");
      }

      // File uploaded successfully
      alert("File uploaded successfully");
    } catch (error) {
      console.error("Error uploading file:", error.message);
    } finally {
      setLoading(false); // Set loading to false after request is complete
    }
  };

  return (
    <>
      <div className="text-sm breadcrumbs bg-[#F1F1FF] flex">
        <ul className="md:ms-12 ms-5 md:text-sm text-xs">
          <li>
            <a href="/" className="text-[#7265E3]">
              Home
            </a>
          </li>
          <li>
            <a href="/" className="text-[#7265E3]">
              MCHA
            </a>
          </li>
          <li>Create Medi-Chart Health ID</li>
        </ul>
        <ul className="flex-1 justify-end text-[#AFB1C9] md:text-sm text-xs">
          Last Updated ON:{" "}
          <span className="text-[#4C5980] font-bold">26 FEB, 2024</span>
        </ul>
      </div>

      <div className="flex md:flex-row flex-col mb-4 p-16">
        <div className="md:w-1/2 ">
          <p className="md:text-4xl text-2xl font-medium text-primary">
            Medi-Chart Health Account or Health ID Card Approved by NDHM.GOV.IN
          </p>

          <p className="mt-5 md:text-xl text-sm">
            Medi-Chart or Health ID is an initiative of the Indian government
            under the Medi-Chart Digital Mission (MCDM) for Indian citizens to
            establish a centralised database of all their health-related data.
          </p>

          <p className="mt-5 font-medium md:text-2xl text-xl">
            It is crucial to remember that
          </p>

          <p className="mt-5 md:text-xl text-sm">
            The health records associated with Health IDs or MCDM numbers can
            only be accessed with the informed consent of the individual.
          </p>

          <p className="mt-5 md:text-xl text-smxl">
            People have the option to create an alias, referred to as an "MCDM
            address" (similar to the email ID xyz@ndhm with a password).
          </p>

          <p className="mt-5 md:text-xl text-smxl">
            Highly secure & private, data sharing happens only with the user’s
            consent
          </p>
        </div>
        <div className="md:w-1/2 md:mt-0 mt-5">
          <div className=" w-full bg-base-100 rounded-xl shadow-xl h-full">
            <div className="card-body">
              <div className="prose prose-base">
                <h2 className="text-center text-primary">
                  Create Medical Record
                </h2>

                <select
                  className="select select-bordered w-full"
                  onChange={(e) => setTypeOfRecord(e.target.value)}
                >
                  <option disabled selected>
                    Type of Record
                  </option>
                  <option>Lab Report</option>
                  <option>Prescription</option>
                  <option>Scan</option>
                  <option>Discharge Summary</option>
                  <option>Vaccine Certificate</option>
                  <option>Insurance</option>
                  <option>Invoice</option>
                  <option>Other</option>
                </select>
              </div>

              <input
                type="date"
                placeholder="Type here"
                className="input w-full border border-gray-300"
                onChange={(e) => setDocumentDate(e.target.value)}
              />

              <div className="flex flex-wrap gap-2 ">
                {tags.map((tag, index) => (
                  <div
                    key={index}
                    className="bg-gray-200 rounded-full px-3 py-1 flex items-center"
                  >
                    <span className="text-gray-800 mr-1">{tag}</span>
                    <button onClick={() => removeTag(tag)}>&times;</button>
                  </div>
                ))}
                <input
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  onKeyPress={handleInputKeyPress}
                  className="border border-gray-300 input rounded w-full "
                  placeholder="Enter tags"
                />
              </div>

              <input type="file" onChange={handleFileChange} />
              <div className="pt-8">
                <button
                  type="submit"
                  className="text-white hover:bg-blue-400 bg-blue-400 w-full h-10git  rounded-xl relative"
                  disabled={loading} // Disable button when loading
                >
                  {loading && (
                    <div className="loader-container">
                      <div className="loader"></div>
                    </div>
                  )}
                  {!loading && "Login"}
                </button>
                <p className="text-xs mt-2 text-blue-400">
                  <a href="/auth/register">Create Account</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HealthID;
