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
            <div className="flex">
              <input type="text" placeholder=" First Name" className="input w-full border border-blue-400 h-8 mt-5" />
              <input type="text" placeholder=" Last Name" className="input ms-3 w-full border border-blue-400 h-8 mt-5" />
            </div>
            <div className="flex">
              <input type="text" placeholder=" UserName" className="input w-full border border-blue-400 h-8 " />
              <input type="text" placeholder=" Mobile No." className="input  ms-3 w-full border border-blue-400 h-8 " />
            </div>

            <div className="flex">
              <input type="text" placeholder=" Email" className="input  w-full border border-blue-400 h-8" />
              <input type="text" placeholder=" Adharcard No." className="ms-3 input  w-full border border-blue-400 h-8" />
            </div>
            <div className="flex">
              <input type="password" placeholder=" Password" className="input  w-full border border-blue-400 h-8" />
              <input type="password" placeholder="Confirm Password" className="ms-3 input  w-full border border-blue-400 h-8" />
            </div>

            <div className="flex">
              <input type="date" placeholder=" Select Date" className="input  w-72 border border-blue-400 h-8" />
              <div className="flex ms-5 mt-2">
                <input type="radio" name="radio-1" className="radio h-5 w-5" checked />
                <lable className="ms-1">Male</lable>
                <input type="radio" name="radio-1" className="radio h-5 w-5 ms-5" />
                <lable className="ms-1">Female</lable>
              </div>
            </div>
            <textarea type="text" placeholder=" Address" rows={3} className="input mt-2 w-full border border-blue-400 h-fit" />
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
