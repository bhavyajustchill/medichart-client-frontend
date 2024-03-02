import "./Footer.css";

import { ReactComponent as Twitter } from "./assets/twitter.svg";
import { ReactComponent as Facebook } from "./assets/facebook.svg";
import { ReactComponent as Linkedin } from "./assets/linkedin.svg";
import { ReactComponent as Instagram } from "./assets/instagram.svg";
import FooterCard from "./FooterCard";

const footerCardData = [
  {
    title: "About",
    list: [
      { label: "Home" },
      { label: "Terms and Conditions", link: "#" },
      { label: "Privacy Policy", link: "#" },
      { label: "Google Api Disclosure", link: "#" },
      { label: "Security", link: "#" },
    ],
  },
  {
    title: "Products",
    list: [
      { label: "For Doctors", link: "#" },
      { label: "Eka EMR", link: "#" },
      { label: "GMB For Doctors", link: "#" },
      { label: "EMR for Neurologists", link: "#" },
    ],
  },
  {
    title: "Cowin",
    list: [
      { label: "Book Vaccination Slot", link: "#" },
      { label: "Download Vaccination Certificate", link: "#" },
      { label: "Change Mobile Number", link: "#" },
      { label: "Add Passport Details", link: "#" },
    ],
  },
  {
    title: "ABDM",
    list: [{ label: "Create ABHA", link: "#" }],
  },
  {
    title: "About Us",
    list: [
      { label: "Team", link: "#" },
      { label: "Eka Stories", link: "#" },
    ],
  },
];

const svgAttributes = {
  fill: "white",
  height: 23,
  width: 23,
};

const Footer = () => {
  return (
    <>
    
      <div className="h-auto" style={{ background: "#232477" }}>
        <div className="footer-container-main h-full w-full text-white flex flex-col md:pt-12">
          <div className="footer-container h-full container mx-auto sm:px-4 flex flex-col">
            <div className="w-full md:hidden flex justify-center items-center">
              <img

                src="./logo/l2.png"
                alt="medichart"
                className="w-64"
              />
            </div>
            <div className="container max-w-full mx-auto sm:px-4 w-full overflow-hidden p-0 text-center flex-grow-1 flex justify-center items-center">
              <div className="flex flex-wrap  h-full w-full">
                <div className="w-full xl:w-3/5 pr-4 pl-4 p-0 flex gap-3">
                  <div className="footer-card-container px-2 pt-4">
                    <div className="flex flex-wrap  row-cols-3 w-full m-0">
                      {footerCardData?.map((item, index) => {
                        return (
                          <FooterCard
                            key={index}
                            data={{ ...item, key: index }}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="w-full xl:w-2/5 pr-4 pl-4 p-0">
                  <div className="text-start   h-full w-full m-0 flex-shrink-0 flex justify-center items-center">
                    <div className="footer-form-card h-full w-full flex-shrink-0">
                      <h5 className="">Contact us</h5>
                      <div className=" mt-3" style={{ fontSize: "14px" }}>
                        Integrated with NDHM and CoWin portals
                      </div>
                      <div className="mt-5">
                        <div className="flex flex-wrap  row-cols-2">
                          <div className="w-full sm:w-1/2 pr-4 pl-4 mt-3">
                            <div className="">
                              <label htmlFor="iam" className="form-label">
                                I am a
                              </label>
                              <input
                                type="text"
                                className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                                id="iam"
                              />
                            </div>
                          </div>
                          <div className="w-full sm:w-1/2 pr-4 pl-4 mt-3">
                            <div className="">
                              <label htmlFor="email" className="form-label">
                                Name
                              </label>
                              <input
                                type="email"
                                className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                                id="email"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-wrap  row-cols-2">
                          <div className="w-full sm:w-1/2 pr-4 pl-4 mt-3">
                            <div className="">
                              <label htmlFor="phone" className="form-label">
                                Phone No
                              </label>
                              <input
                                type="number"
                                className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                                id="phone"
                              />
                            </div>
                          </div>
                          <div className="w-full sm:w-1/2 pr-4 pl-4 mt-3">
                            <div className="">
                              <label
                                htmlFor="specialization"
                                className="form-label"
                              >
                                Specialization
                              </label>
                              <input
                                type="text"
                                className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                                id="specialization"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <button
                        className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-blue-600 text-white hover:bg-blue-600  w-full mt-5 fs-6 "
                        style={{
                          height: "3em",
                          background: "#5253CF",
                          border: "none",
                        }}
                        disabled
                      >
                        Contact to medichart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-line hidden lg:block "></div>
            <div className="footer-navigation flex flex-col md:flex-row">

              <div className="order-2 md:order-1 h-full flex justify-center items-center footer-navigation-copyright w-full flex justify-center text-center">
                Copyright © 2023 medichart.com
              </div>
              <div className="order-1 md:order-2 h-full flex justify-center items-center flex justify-content-rig md:me-4">
                <div className="flex">
                  <a
                    className="mx-2 footer-link"
                    href="http://"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter {...svgAttributes} />
                  </a>
                  <a
                    className="mx-2 footer-link"
                    href="http://"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook {...svgAttributes} />
                  </a>
                  <a
                    className="mx-2 footer-link"
                    href="http://"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin {...svgAttributes} />
                  </a>
                  <a
                    className="mx-2 footer-link"
                    href="http://"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram {...svgAttributes} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
