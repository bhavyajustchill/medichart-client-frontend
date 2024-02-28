import React from "react";

export default function Login() {
  return (
    <>
      <div className="flex items-center justify-center " style={{
        backgroundImage: "url('/assets/login-background.jpg')", backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%', height: '100dvh',
      }}>

        {/* <div className="card lg:card-side bg-base-100 shadow-2xl md:w-1/2 md:h-80  " >
          <figure className="md:w-1/2"><img src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album" /></figure>
          <div className="card-body ">
            <p className="text-center font-bold text-3xl text-blue-400">Health card</p>
            <input type="text" placeholder="Enter Mobile No." className="input w-full border border-blue-400" />
            <div className="p-8">
              <button className=" text-white  hover:bg-blue-400 bg-blue-400 w-full h-8 rounded-xl">Get OTP</button>
              <p className="text-xs mt-2 text-blue-400"><a href="/auth/register" >Create Account</a></p>
            </div>
           
          </div>
        </div> */}
        <div className="card lg:card-side bg-base-100 shadow-2xl w-1/2 md:h-80  " >
          <figure className="md:w-1/2">
            <div className="w-full carousel rounded-box">
              <div className="carousel-item w-full">
                <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" className="w-full" alt="Tailwind CSS Carousel component" />
              </div>
              <div className="carousel-item w-full">
                <img src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" className="w-full" alt="Tailwind CSS Carousel component" />
              </div>
              <div className="carousel-item w-full">
                <img src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" className="w-full" alt="Tailwind CSS Carousel component" />
              </div>
              <div className="carousel-item w-full">
                <img src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" className="w-full" alt="Tailwind CSS Carousel component" />
              </div>
              <div className="carousel-item w-full">
                <img src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" className="w-full" alt="Tailwind CSS Carousel component" />
              </div>
              <div className="carousel-item w-full">
                <img src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" className="w-full" alt="Tailwind CSS Carousel component" />
              </div>
              <div className="carousel-item w-full">
                <img src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" className="w-full" alt="Tailwind CSS Carousel component" />
              </div>
            </div>
          </figure>
          <div className="card-body ">
            <p className="text-center font-bold text-3xl text-blue-400">Health card</p>
            <input type="email" placeholder="Enter Email ID." className="input w-full border border-blue-400 h-10" />
            <input type="password" placeholder="Enter Password" className="input w-full border mt-1 h-10 border-blue-400" />
            <div className="pt-8">
              <button className=" text-white  hover:bg-blue-400 bg-blue-400 w-full h-8 rounded-xl">Login</button>
              <p className="text-xs mt-2 text-blue-400"><a href="/auth/register" >Create Account</a></p>
            </div>

          </div>
        </div>
      </div>

    </>
  );
}