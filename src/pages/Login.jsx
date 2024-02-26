import React from "react";

export default function Login() {
  return (
    <>
      <div className="flex items-center justify-center " style={{
        backgroundImage: "url('/assets/login-background.jpg')", backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%', height: '100dvh', 
      }}>

        <div className="card lg:card-side bg-base-100 shadow-xl w-1/2 " >
          <figure><img src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album" /></figure>
          <div className="card-body">
            <h2 className="card-title">New album is released!</h2>
            <p>Click the button to listen on Spotiwhy app.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Listen</button>
            </div>
          </div>
        </div>
      </div>

 {/* <div className="flex items-center justify-center" style={{
        backgroundImage: "url('/assets/login-background.jpg')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        height: '100vh',
        
      }}>

        <div className="card lg:card-side bg-base-100 shadow-xl w-1/2">
          <figure><img src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album" style={{ filter: 'brightness(100%)' }} /></figure>
          <div className="card-body">
            <h2 className="card-title">New album is released!</h2>
            <p>Click the button to listen on Spotiwhy app.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Listen</button>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
