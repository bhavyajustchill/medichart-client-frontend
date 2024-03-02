import React, { useState } from 'react';
import Slider from "../components/slider/Slider";
import Capsule from "../components/Capsule/Capsule";
import Healthaccountcard from "../components/Healthaccountcard";
import Medicalrecord from './Medicalrecord';
import Useraboutus from './Useraboutus';
import News from './News';
import Mission from './Mission';


export default function Home() {
  const [imageSrc, setImageSrc] = useState('/assets/image12.jpg');
  const changeImage = (newSrc) => {
    setImageSrc(newSrc);
  };
  return (
    <>
      <div className="text-sm breadcrumbs bg-[#F1F1FF] ">
        <ul>
          <li className="ms-12"><a>Home</a></li>
        </ul>
      </div>
      <div className="container mx-auto">
        <div ><Slider /></div>
        <div><Capsule /></div>
        <div className="mt-10"><Healthaccountcard /></div>
      </div>
      <div className="bg-gray-100 mt-5">
        <div className="p-8 ">
          <div className="card lg:card-side bg-base-100 shadow-xl container mx-auto ">
            <div className="card-body">
              <div className="flex md:flex-row flex-col">
                <div className="md:w-1/2">
                  <p className="md:text-4xl text-md font-bold text-center">Participate in india's Healthcare Revolution</p>
                  <p className="md:text-lg text-xs md:mt-7 mt-5 md:text-start text-center">Create ABHA & store all your medical records with Eka care (Govt of India ABDM approved PHR app)</p>
                  <button className="btn btn-primary md:mt-7 mt-5 md:ms-0 ms-52">CREATE ABHA</button>
                  <div className="flex md:flex-row flex-col md:mt-10 mt-5">
                    <div className="md:w-1/2 flex md:ms-0 ms-48 ">
                    <svg viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6"><path d="M18.75 21.623H5.25a.75.75 0 01-.75-.75v-16.5a.75.75 0 01.75-.75h9l5.25 5.25v12a.75.75 0 01-.75.75z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14.25 3.623v5.25h5.25M9.375 15.248L12 17.873l2.625-2.625M12 11.873v6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                      <p className="md:text-md text-xs md:text-start mt-1">16 Lakh+ ABHA Created</p>
                    </div>
                    <div className="md:w-1/2 flex md:ms-0 ms-40">
                    <svg viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6"><path d="M20.25 5.123H3.75a.75.75 0 00-.75.75v13.5c0 .414.336.75.75.75h16.5a.75.75 0 00.75-.75v-13.5a.75.75 0 00-.75-.75z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5.737 13.362a.75.75 0 000 1.5v-1.5zm10.5 1.5a.75.75 0 100-1.5v1.5zm-10.5 0h10.5v-1.5h-10.5v1.5zM5.737 16.362a.75.75 0 000 1.5v-1.5zm6 1.5a.75.75 0 100-1.5v1.5zm-6 0h6v-1.5h-6v1.5z" fill="currentColor"></path><circle cx="7.133" cy="8.941" r="1.867" fill="currentColor"></circle></svg>
                      <p className="md:text-md text-xs mt-1">Official partner of Government of India</p>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <img className="h-auto md:max-w-sm md:ms-52 mt-5" src="/assets/image10.jpg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="bg-green-100 text-center container mx-auto rounded-md mt-8 w-64">
          <p className="md:text-md text-sm">YOUR SMART HEALTH LOCKER</p>
        </div>
        <p className="md:mt-6 mt-2 font-bold md:text-4xl text-2xl ms-auto text-center">Never lose a medical record again</p>
        <p className="md:mt-6 mt-2 ms-auto text-center md:text-md text-sm ">Store, search and organise all medical records as per your convenience</p>

        <div className="flex md:flex-row flex-col mb-4 mt-8 container mx-auto">
          <div className="md:w-1/2 ">
            <div className="flex mt-5" onClick={() => changeImage('/assets/cl5i49ojv000l0sh9gxwr32fp.png')}>
              <img src="/assets/cl5c2clg0001p0tchfaerew42.png" className="ms-12 md:w-14 md:h-14 h-10" alt="Store" />
              <p className="ms-4 md:text-lg text-sm font-medium">Store</p>
              <div>
                <p className="mt-8 md:text-md text-sm md:-ms-10 -ms-10">Eka’s integrated approach allows you to fetch medical records from hospitals, labs, doctors and even your email!</p>
                <button className="btn btn-outline btn-primary md:mt-8 mt-3 w-24 -ms-10">Try Now</button>
              </div>
            </div>

            <div className="flex mt-7" onClick={() => changeImage('/assets/cl5i4b39n000x0shh4cldhaqn.png')}>
              <img src="/assets/cl5c2dcnm001r0tchau7r8632.png" className="ms-12 md:w-14 md:h-14 h-10" alt="Search" />
              <p className="ms-4 md:text-lg text-sm font-medium">Search</p>
              <div>
                <p className="mt-8 md:text-md text-sm md:-ms-14 -ms-10"> Search records using vitals name, diseases & more</p>
                <button className="btn btn-outline btn-primary md:mt-8 mt-3 w-24 md:-ms-14 -ms-12">Try Now</button>
              </div>

            </div>

            <div className="flex mt-7" onClick={() => changeImage('/assets/cl5i4bgdo000n0sh9hl9365uk.png')}>
              <img src="/assets/cl5c2efv5001t0tch0sbxczup.png" className="ms-12 md:w-14 md:h-14 h-10" alt="Organise" />
              <p className="ms-4 md:text-lg text-sm font-medium">Organise</p>
              <div>
                <p className="mt-8 md:text-md text-sm md:-ms-16 -ms-14"> Search records using vitals name, diseases & more</p>
                <button className="btn btn-outline btn-primary md:mt-8 mt-3 w-24 md:-ms-20 -ms-16">Try Now</button>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 flex md:justify-end justify-center md:items-end items-center ">
            <img src={imageSrc} className="w-96" alt="Displayed" />
          </div>
        </div>
      </div>

      <div className="flex md:flex-row flex-col container mx-auto mt-14">
        <div className="md:w-1/3 flex  md:justify-start justify-center items-center">
          <div className="card w-96 bg-base-100 shadow-2xl">
            <div className="card-body">
              <img src="/assets/cl5b7jnw1000v0tch72qp8d22.png" className="h-10 w-10" />
              <p className="text-2xl mt-2 font-bold">Sync your gmail</p>
              <p className="text-sm mt-3">& auto backup all your</p>
              <p className="text-sm">medical records</p>
              <button className="btn btn-outline btn-primary mt-5">SYNC GMAIL NOW!</button>
            </div>
          </div>
        </div>
        <div className="md:w-1/3 flex md:flex-row flex-col md:justify-center justify-center items-center ">
          <div className="card w-96 bg-base-100 shadow-2xl md:mt-0 mt-8">
            <div className="card-body">
              <img src="/assets/cl5b7lgtb000z0tch8nt5d9uw.png" className="h-10 w-10" />
              <p className="text-2xl mt-2  font-bold">Upload using Whatsapp</p>
              <p className="text-sm mt-3">Send us your document on</p>
              <p className="text-sm">+91 9972088103</p>
              <button className="btn btn-outline btn-primary mt-5">SEND NOW!</button>
            </div>
          </div>
        </div>
        <div className="md:w-1/3 flex md:flex-row flex-col md:justify-end justify-center md:items-end items-center">
          <div className="card w-96 bg-base-100 shadow-2xl  md:mt-0 mt-8">
            <div className="card-body">
              <img src="/assets/cl5b7mvg3000n0sff2r2i3t9f.png" className="h-6 w-10" />
              <p className="text-2xl mt-2  font-bold">Upload a picture</p>
              <p className="text-sm mt-3">Click or upload a photo and we will scan those records</p>
              <p className="text-sm">automatically</p>
              <button className="btn btn-outline btn-primary mt-5">UPLOAD NOW!</button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex md:flex-row flex-col container mx-auto p-10">

      </div>

      <div className="bg-gray-100 mt-5">
        <div className="p-8 ">
          <div className="card lg:card-side bg-[#AAF1FF] shadow-xl container mx-auto ">
            <div className="card-body">
              <div className="flex md:flex-row flex-col">
                <div className="md:w-1/2">
                  <p className="md:text-4xl text-lg font-bold md:text-start text-center">Download CoWin Vaccine Certificate</p>
                  <p className="md:text-lg text-xs md:mt-7 mt-3 md:text-start text-center">Using only your mobile number</p>
                  <button className="bg-[#104751] rounded-lg text-white w-52 h-12 md:mt-7 mt-5  md:ms-0 ms-36">DOWNLOAD CERTIFICATE</button>
                  <div className="flex md:flex-row flex-col md:mt-10 mt-5">
                    <div className="md:w-1/2 flex md:ms-0 ms-32 ">
                    <svg viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6"><path d="M18.75 21.623H5.25a.75.75 0 01-.75-.75v-16.5a.75.75 0 01.75-.75h9l5.25 5.25v12a.75.75 0 01-.75.75z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14.25 3.623v5.25h5.25M9.375 15.248L12 17.873l2.625-2.625M12 11.873v6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                      <p className="md:text-md text-xs md:text-start mt-1">Change Mobile Number on Certificate</p>
                    </div>
                    <div className="md:w-1/2 flex md:ms-0 ms-32">
                    <svg viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6"><path d="M20.25 5.123H3.75a.75.75 0 00-.75.75v13.5c0 .414.336.75.75.75h16.5a.75.75 0 00.75-.75v-13.5a.75.75 0 00-.75-.75z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5.737 13.362a.75.75 0 000 1.5v-1.5zm10.5 1.5a.75.75 0 100-1.5v1.5zm-10.5 0h10.5v-1.5h-10.5v1.5zM5.737 16.362a.75.75 0 000 1.5v-1.5zm6 1.5a.75.75 0 100-1.5v1.5zm-6 0h6v-1.5h-6v1.5z" fill="currentColor"></path><circle cx="7.133" cy="8.941" r="1.867" fill="currentColor"></circle></svg>
                      <p className="md:text-md text-xs mt-1">Add Passport Number on Certificate</p>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <img className="h-auto md:max-w-64 md:ms-64 mt-5" src="/assets/cl5jnr1nn00110shacznxb25v.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-green-100 text-center container mx-auto rounded-md mt-8 w-64">
        <p className="md:text-md text-sm">YOUR PERSONAL HEALTH PROFILE</p>
      </div>
      <p className="md:mt-6 mt-2 font-bold md:text-4xl text-lg ms-auto text-center">An automated health profile from your medical data</p>
      <p className="md:mt-6 mt-2 ms-auto text-center md:text-md text-sm ">See longitudinal vital trends, get health insights, and stay one step ahead</p>
      <div className="flex md:flex-row flex-col mb-4 mt-5">
        <div className="md:w-1/2 md:p-24 p-10">
          <div className="flex ">
            <i className="bi bi-caret-right-fill"></i>
            <p>Get a health rating of each organ & understand risk factors</p>
          </div>
          <div className="flex mt-7">
            <i className="bi bi-caret-right-fill"></i>
            <p>All your vital information is digitised & a trend is </p>
          </div>
          <p className="ms-4">automatically created for easy understanding</p>
          <div className="flex mt-7">
            <i className="bi bi-caret-right-fill"></i>
            <p>Instant doctor connect for all your queries. Send your report to<span className="font-bold">'yourmobileno'@Medi-Chart</span></p>
          </div>
          <button className="bg-[#6567EC] rounded-md w-64 font-bold h-12 text-white mt-8 ">UPLOAD A LAB REPORT  NOW</button>
        </div>
        <div className="md:w-1/2  flex md:justify-end justify-center md:items-end items-center">
          <img src="/assets/cl5iahwbg000v0sh9dihle57k.png" />
        </div>
      </div>

      <div className="card lg:card-side bg-[#5C7AFF] shadow-xl container mx-auto ">
        <div className="card-body">
          <div className="flex md:flex-row flex-col">
            <div className="md:w-1/2 p-4">
              <p className="md:text-5xl text-xl font-bold md:text-start text-center text-white">Are you a doctor?</p>
              <p className="md:text-lg text-xs md:mt-12 mt-4 md:text-start text-center text-white">Your patient’s health profile will be automatically synced in Eka’s ABDM </p>
              <p className="md:text-lg text-xs md:text-start text-center text-white">compliant EMR</p>
              <button className="bg-[#17185A] rounded-lg text-white w-52 h-12 md:mt-9 mt-5  md:ms-0 ms-36">CONTACT US</button>
            </div>
            <div className="md:w-1/2 flex justify-end items-end">
              <img className="h-auto md:max-w-96" src="/assets/cl5i3f7rx000h0sh99fy5fs3q.png" />
            </div>
          </div>
        </div>
      </div>

<Medicalrecord />
<Useraboutus />

<News />
<Mission />
    </>
  );
}
