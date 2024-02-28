// import React, { useState, useEffect } from 'react';
// import './SliderCard.css'

// const SliderCard = () => {
//     const sliderdata = [
//         {
//             "img": "./assets/cl5gun2uz00090sh9fvcn1ex1.png",
//             "step": "01",
//             "title": "Create/Link Your ABHA",
//             "description": "  to get Started with your Health Account",
//             "btnName": " Create ABHA "
//         }
//     ]
//     return (

//         <>
//             {
//                 sliderdata.map((item,index) => {
//                     <>
//                         <div key={index} className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">

//                             <div className="carousel-item">
//                                 <div
//                                     className="card mainCard"
//                                 >
//                                     <img
//                                         src={item.img}
//                                         className="card-img-top imgBG"
//                                     />
//                                     <h4
//                                         style={{
//                                             textAlign: "topright",
//                                             position: "absolute",
//                                             top: "40px",
//                                             right: "16px",
//                                             color: "#64e3fb",
//                                         }}
//                                     >
//                                         Step<div style={{ textalign: "center", fontSize: "46px" }}>{item.step}</div>
//                                     </h4>
//                                     <div
//                                         className="card-body"
//                                         style={{
//                                             color: "white",
//                                             fontFamily: "DM Sans, sans-serif",
//                                             lineHeight: "24px",
//                                         }}
//                                     >
//                                         <h2>{sliderdata.title}</h2>
//                                         <p className="card-text" style={{ fontSize: "17px" }}>
//                                             {item.description}
//                                         </p>
//                                         <button
//                                             type="button"
//                                             className="btn"
//                                             style={{
//                                                 backgroundColor: "#0b3c43",
//                                                 color: "white",
//                                                 height: "20%",
//                                             }}
//                                         >
//                                             {item.btnName} &#8594;
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                         {/* 
//                 <div className="carousel-item">
//                     <div
//                         className="card mainCard"
//                     >
//                         <img
//                             src="https://www.eka.care/_next/image?url=https%3A%2F%2Fcdn.eka.care%2Fvagus%2Fcl5guuf6h000b0sh95v9z4yza.png&w=1920&q=75"
//                             className="card-img-top imgBG"
//                             alt="sym"
//                         />
//                         <h4
//                             style={{
//                                 textAlign: "topright",
//                                 position: "absolute",
//                                 top: "40px",
//                                 right: "16px",
//                                 color: "#64e3fb",
//                             }}
//                         >
//                             Step<div style={{ textalign: "center", fontSize: "46px" }}>03</div>
//                         </h4>
//                         <div
//                             className="card-body"
//                             style={{
//                                 color: "white",
//                                 fontFamily: "DM Sans, sans-serif",
//                                 lineHeight: "24px",
//                             }}
//                         >
//                             <h2>Build Your Health Profile</h2>
//                             <p className="card-text" style={{ fontSize: "17px" }}>
//                                 By Updatating Health Vitals Regularly
//                             </p>
//                             <button
//                                 type="button"
//                                 className="btn"
//                                 style={{
//                                     backgroundColor: "#0b3c43",
//                                     color: "white",
//                                     height: "20%",
//                                 }}
//                             >
//                                 CREATE NOW &#8594;
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="carousel-item">
//                     <div
//                         className="card mainCard"
//                     >
//                         <img
//                             src="https://www.eka.care/_next/image?url=https%3A%2F%2Fcdn.eka.care%2Fvagus%2Fcl5guuf6h000b0sh95v9z4yza.png&w=1920&q=75"
//                             className="card-img-top imgBG"
//                             alt="sym"
//                         />
//                         <h4
//                             style={{
//                                 textAlign: "topright",
//                                 position: "absolute",
//                                 top: "40px",
//                                 right: "16px",
//                                 color: "#64e3fb",
//                             }}
//                         >
//                             Step<div style={{ textalign: "center", fontSize: "46px" }}>04</div>
//                         </h4>
//                         <div
//                             className="card-body"
//                             style={{
//                                 color: "white",
//                                 fontFamily: "DM Sans, sans-serif",
//                                 lineHeight: "24px",
//                             }}
//                         >
//                             <h2>Store your medical records</h2>
//                             <p className="card-text" style={{ fontSize: "17px" }}>
//                                 Started by downloading your covid certificate
//                             </p>
//                             <button
//                                 type="button"
//                                 className="btn"
//                                 style={{
//                                     backgroundColor: "#0b3c43",
//                                     color: "white",
//                                     height: "20%",
//                                 }}
//                             >
//                                 Create Now &#8594;
//                             </button>
//                         </div>
//                     </div>
//                 </div> */}

//                     </div >
//                     </>
//                     })
//                 }
//         </>
//     )
// }

// export default SliderCard



import React, { useState, useEffect } from 'react';
import './SliderCard.css';

const SliderCard = () => {
    const sliderdata = [
        {
            "img": "./assets/cl5gun2uz00090sh9fvcn1ex1.png",
            "step": "01",
            "title": "Create/Link Your ABHA",
            "description": "  to get Started with your Health Account",
            "btnName": " Create ABHA "
        },
        {
            "img": "./assets/cl5gun2uz00090sh9fvcn1ex1.png",
            "step": "02",
            "title": "Store your medical records",
            "description": " Started by downloading your covid certificate",
            "btnName": "DOWNLOAD APP    "
        },
        {
            "img": "./assets/cl5gun2uz00090sh9fvcn1ex1.png",
            "step": "03",
            "title": "Build Your Health Profile",
            "description": "By Updatating Health Vitals Regularly",
            "btnName": "   CREATE NOW"
        }
    ];

    return (
        <>

            <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
                {sliderdata.map((item, index) => ( // Add index parameter to map function
                    <div key={index} className="carousel-item">
                        <div className="card mainCard">
                            <img
                                src={item.img} // Use item.img instead of sliderdata.img
                                className="card-img-top imgBG"
                            />
                            <h4
                                style={{
                                    textAlign: "topright",
                                    position: "absolute",
                                    top: "40px",
                                    right: "16px",
                                    color: "#64e3fb",
                                }}
                            >
                                Step<div style={{ textAlign: "center", fontSize: "46px" }}>{item.step}</div>
                            </h4>
                            <div
                                className="card-body"
                                style={{
                                    color: "white",
                                    fontFamily: "DM Sans, sans-serif",
                                    lineHeight: "24px",
                                }}
                            >
                                <h2>{item.title}</h2>
                                <p className="card-text" style={{ fontSize: "17px" }}>
                                    {item.description}
                                </p>
                                <button
                                    type="button"
                                    className="btn"
                                    style={{
                                        backgroundColor: "#0b3c43",
                                        color: "white",
                                        height: "20%",
                                    }}
                                >
                                    {item.btnName} &#8594;
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </>
    );
};

export default SliderCard;
