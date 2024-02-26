import React from "react";

export default function Login() {
  return (
    <>
      <div className="flex items-center justify-center " style={{
        backgroundImage: "url('/assets/login-background.jpg')", backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%', height: '100dvh',
      }}>

        <div className="card lg:card-side bg-base-100 shadow-2xl w-1/2 h-80 " >
          <figure className="w-1/2"><img src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album" /></figure>
          <div className="card-body ">
            <p className="text-center font-bold text-3xl text-blue-400">Health card</p>
            <input type="text" placeholder="Enter Mobile No." className="input w-full border border-blue-400" />
            <div className="p-8">
              <button className="btn text-white  hover:bg-blue-400 bg-blue-400 w-full">Get OTP</button>
              <p className="text-xs mt-2 text-blue-400"><a href="/auth/register" >Create Account</a></p>
            </div>
           
          </div>
        </div>
      </div>

    </>
  );
}
