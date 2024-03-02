
import React, { useState } from 'react';

export default function MedicalRecord() {
    const [imageSrc, setImageSrc] = useState('/assets/cl6g6pbjv001d0sgiam2199j5.png');

    const changeImage = (newSrc) => {
        setImageSrc(newSrc);
    };

    return (
        <div>
            <div className="bg-green-100 text-center container mx-auto rounded-md mt-8 w-96">
                <p className="md:text-md text-sm">TRACK YOUR VITALS & SELF ASSESSMENTS</p>
            </div>
            <p className="md:mt-6 mt-2 font-bold md:text-4xl text-2xl ms-auto text-center">Track your critical vitals & assess your symptoms</p>
            <p className="md:mt-6 mt-2 ms-auto text-center md:text-md text-lg">Your body is sending you important signals about your health. Track, understand, & get
                care for any concerns with trusted medical expertise in minutes.</p>

            <div className="flex md:flex-row flex-col container mx-auto">
                <div className="md:w-1/2 ">
                    <div className="flex mt-5" onClick={() => changeImage('./assets/cl6g6pbjv001d0sgiam2199j5.png')}>
                    <i className="bi bi-caret-right-fill"></i>
                        <p className="ms-4 md:text-lg text-sm font-medium">Heart Rate</p>
                        <div>
                            <p className="mt-8 md:text-md text-sm md:-ms-20 -ms-16">Keep track of your heart rate using Eka care heart rate monitor</p>
                            <button className="btn btn-outline btn-primary md:mt-4 mt-3 w-52 md:-ms-20 -ms-16">DOWNLOAD APP NOW</button>
                        </div>
                    </div>

                    <div className="flex mt-7" onClick={() => changeImage('./assets/cl5i5fktd000z0shh7mkq3qrd.png')}>
                    <i className="bi bi-caret-right-fill"></i>
                        <p className="ms-4 md:text-lg text-sm font-medium">Sugar</p>
                        <div>
                            <p className="mt-8 md:text-md text-sm md:-ms-12 -ms-10">Track your daily sugar levels</p>
                            <button className="btn btn-outline btn-primary md:mt-4 mt-3 w-52 md:-ms-10 -ms-9">DOWNLOAD APP NOW</button>
                        </div>
                    </div>

                    <div className="flex mt-7" onClick={() => changeImage('./assets/cl6g5n5ov001b0sgidrsmd2ig.png')}>
                    <i className="bi bi-caret-right-fill"></i>
                        <p className="ms-4 md:text-lg text-sm font-medium">Blood Pressure</p>
                        <div>
                            <p className="mt-8 md:text-md text-sm md:-ms-32 -ms-24">Track your regular Blood pressure levels</p>
                            <button className="btn btn-outline btn-primary md:mt-4 mt-3 w-52 md:-ms-28 -ms-24">DOWNLOAD APP NOW</button>
                        </div>
                    </div>

            
                    <div className="flex mt-7" onClick={() => changeImage('./assets/cl5i5hggr000t0sh987qpdis9.png')}>
                    <i className="bi bi-caret-right-fill"></i>
                        <p className="ms-4 md:text-lg text-sm font-medium">Thyroid</p>
                        <div>
                            <p className="mt-8 md:text-md text-sm md:-ms-16 -ms-14">Track your regular thyroid levels</p>
                            <button className="btn btn-outline btn-primary md:mt-4 mt-3 w-50 md:-ms-14 -ms-12">DOWNLOAD APP NOW</button>
                        </div>
                    </div>

                    <div className="flex mt-7" onClick={() => changeImage('./assets/cl6gcbyiu00100sem1k7sgdo8.png')}>
                    <i className="bi bi-caret-right-fill"></i>
                        <p className="ms-4 md:text-lg text-sm font-medium">Cholesterol & More</p>
                        <div>
                            <p className="mt-8 md:text-md text-sm md:-ms-40 -ms-32">Track your Cholesterols levels & all other health symptoms</p>
                            <button className="btn btn-outline btn-primary md:mt-4 mt-3 w-44 md:-ms-36 -ms-32">DOWNLOAD NOW</button>
                        </div>
                    </div>
                </div>

                <div className="md:w-1/2 flex  justify-center items-center ">
                    <img src={imageSrc} className="w-3/4" alt="Displayed" />
                </div>
            </div>
        </div>
    );
}

