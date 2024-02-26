import React from "react";

export default function Register() {
  return (
    <>
      <div className="flex items-center justify-center " style={{
        backgroundImage: "url('/assets/login-background.jpg')", backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%', height: '100dvh',
      }}>

        <div className="card lg:card-side bg-base-100 shadow-2xl w-1/2  " >
          <div className="card-body ">
            <p className="text-center font-bold text-3xl text-blue-400">Registration</p>
            <input type="text" placeholder="Enter Name" className="input w-full border border-blue-400 h-7 mt-5" />
            <input type="text" placeholder="Enter Mobile No." className="input w-full border border-blue-400 h-7 mt-2" />
            <input type="text" placeholder="Enter Email" className="input mt-2 w-full border border-blue-400 h-7" />
            <input type="text" placeholder="Enter Adharcard No." className="input mt-2 w-full border border-blue-400 h-7" />
            <textarea type="text" placeholder="Enter Address"  rows={3} className="input mt-2 w-full border border-blue-400 h-fit" />
            <div className="p-8 flex flex-col justify-center items-center">
              <button className=" text-white  hover:bg-blue-400 bg-blue-400 w-1/3 h-8 rounded-xl">Submit</button>
              <p className="text-xs mt-2 text-blue-400"><a href="/auth/login">Already Exist</a></p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
