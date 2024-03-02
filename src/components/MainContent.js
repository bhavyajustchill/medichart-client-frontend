

import React, { useState } from 'react';
import QrCodeGenerator from './QRCode ';

const MainContent = ({ selectedItem }) => {

  const [selectedImage, setSelectedImage] = useState(null);
  const [name, setName] = useState('ABC');
  const [gender, setGender] = useState('Male');
  const [dateOfBirth, setDateOfBirth] = useState('29-09-2001');
  const [address, setAddress] = useState('C/O Sakdecha hemalbhai shramdeep Triveni Nagar Main Doshi Hostipal B/H Guruprasad Chowk Rajkot');
  const [district, setDistrict] = useState('Rajkot');
  const [state, setState] = useState('Gujarat');
  const [pincode, setPincode] = useState('360004');

  const jsonData = {
    "name": "Shahnawaz bheda",
    "age": 22,
    "email": "shahnawazbheda@gmail.com",
    "address": {
      "street": "123 Main St",
      "city": "rajkot",
      "state": "CA",
      "zip": "12345"
    }
  };


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setSelectedImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const [phoneNumber, setPhoneNumber] = useState('');
  const placeholderNumber = '9558362840';

  const handleEditClick = () => {
    setPhoneNumber(placeholderNumber);
  };
  return (
    <div className="p-4 w-full">

      {selectedItem === 'Medi Card' && (
        <div className='flex justify-center mt-12' style={{ fontFamily: 'Fredoka One' }}>
          <div className="flip-card ">
            <div className="flip-card-inner">
              <div className="flip-card-front ">
                <div className='text-white bg-[#7c73e6] rounded-t-xl'>
                  <div className="flex mb-4">
                    <div className="w-1/4 ">
                      <img src='./assets/nationalLogo-removebg-preview.png' className='h-24 pt-6 ms-4 ' />
                    </div>
                    <div className="w-1/2 ">
                      <div className='p-5'>
                        <p className=' text-xl text-center'>Medi Card Health Account (MCHA)</p>
                        <p className='mt-2 text-sm text-center'>મેડી કાર્ડ હેલ્થ એકાઉન્ટ (MCHA)</p>
                      </div>
                    </div>
                    <div className="w-1/4 ">

                    </div>
                  </div>

                </div>
                <div className="flex mb-4 p-5 ">
                  <div className="w-1/3">
                    <img className='h-40 rounded-md cursor-pointer' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0PJgf4qj3_dTBGXSzb2VTI86fRUuCQgp9DVGkZLRTHb80bGGpmMyhw60dcP0qT5Tx5AI&usqp=CAU" alt="profile" />
                  </div>
                  <div className="w-1/2 mt-5">
                    <div>
                      <p className='text-gray-600'>Name/નામ</p>
                      <p className='text-black text-xl'>Shahnawaz Bheda IqbalBhai</p>
                    </div>
                    <div className='mt-6'>
                      <p className='text-gray-600'>Medi number/ મેડી નંબર</p>
                      <p className='text-black text-xl'>hddfh12143hsaioi</p>
                    </div>


                  </div>
                  <div className="w-1/2 flex justify-center mt-5 ">
                    <QrCodeGenerator jsonData={jsonData} />
                  </div>
                </div>
                <div className="flex  ms-48">
                  <div className="w-1/3 ">
                    <div className='mt-5'>
                      <p className='text-gray-600'>Gender/જાતિ</p>
                      <p className='text-black text-xl'>Male</p>
                    </div>
                  </div>
                  <div className="w-1/2 ">
                    <div className='mt-5'>
                      <p className='text-gray-600'>Date of birth/જન્મ તારીખ </p>
                      <p className='text-black text-xl'>hddfh12143hsaioi</p>
                    </div>
                  </div>
                  <div className="w-1/2 ">
                    <div className='mt-5'>
                      <p className='text-gray-600'>Mobile/મોબાઈલ</p>
                      <p className='text-black text-xl'>hddfh12143hsaioi</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flip-card-back ">
                <div className='text-white bg-black rounded-t-xl'>
                  <div className='text-white bg-black rounded-t-xl'>
                    <div className='p-5'>
                      <p className=' text-xl text-center'>Medi Card Health Account (MCHA)</p>
                      <p className='mt-2 text-xl text-center'>મેડી કાર્ડ હેલ્થ એકાઉન્ટ (MCHA)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {selectedItem === 'Edit Profile' && (
        <div>
          <h3 className='font-bold text-xl'>Edit Profile</h3>
          <div className="card border border-gray-200 rounded-xl mt-5  bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="flex mb-4">
                <div className="w-3/4 ">
                  <div>
                    <div className="flex mb-4">
                      <div className="w-1/4">
                        <p className='font-bold'>Name</p>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                      </div>
                      <div className="w-1/4">
                        <p className='font-bold'>Gender</p>
                        <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} />
                      </div>
                      <div className="w-1/4">
                        <p className='font-bold'>Date of birth</p>
                        <input type="text" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />
                      </div>
                    </div>
                    <div className="w-full">
                      <p className='font-bold'>Address</p>
                      <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
                    </div>
                    <div className="flex mb-4 mt-4">
                      <div className="w-1/4">
                        <p className='font-bold'>District</p>
                        <input type="text" value={district} onChange={(e) => setDistrict(e.target.value)} />
                      </div>
                      <div className="w-1/4">
                        <p className='font-bold'>State</p>
                        <input type="text" value={state} onChange={(e) => setState(e.target.value)} />
                      </div>
                      <div className="w-1/4">
                        <p className='font-bold'>Pincode</p>
                        <input type="text" value={pincode} onChange={(e) => setPincode(e.target.value)} />
                      </div>
                    </div>
                  </div>


                  <div>
                    <p className='font-bold'>Mobile Number <span className='text-red-600'>*</span></p>
                    <div className="flex w-2/3 mt-1">
                      <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 rounded-s-md ">
                        <p>+91</p>
                      </span>
                      <input type="number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder={placeholderNumber} id="website-admin" className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 flex-1 text-sm border-gray-300 p-2.5" />
                      <button onClick={handleEditClick} className='text-red-500 ms-3 text-lg flex font-bold'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil mt-2" viewBox="0 0 16 16">
                          <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                        </svg>
                        <span className='ms-2'> Edit</span>
                      </button>
                    </div>
                  </div>
                  <div className='mt-5'>
                    <p className='font-bold'>Email Address</p>
                    <div className="flex w-2/3 mt-1">
                      <input type="email" id="website-admin" className="  rounded-lg bg-gray-50 border text-gray-900  flex-1  text-sm border-gray-300 p-2.5  " />
                      <a href='#' className='text-red-500 ms-3 text-lg flex font-bold' >
                        <span className='ms-2'> Verify</span></a>
                    </div>
                  </div>
                </div>

                <div className="w-1/4">
                  <div className="border border-gray-300 shadow-xl">
                    <div className="card-body">
                      <label htmlFor="imageUpload">
                        <img className='h-64 cursor-pointer' src={selectedImage || 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQApQMBIgACEQEDEQH/xAAbAAEAAwADAQAAAAAAAAAAAAAABQYHAgMEAf/EADkQAAICAQICBwUFBwUAAAAAAAABAgMEBREGQRIhIjFRYXGBkbLB0RNCU6GxFCQyM2KD4RVDUnKC/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oADAMBAAIRAxEAPwDUgAaZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHGco1xlOySjGPW5SeyRB5nFmn47caftMiS51pJe9gTwKrDjSnpdvBtSfNWJ/ImdO1vA1GShRd0bfw5raX+QJEDuAAAAAAAAAAAAAAAAAAAADrvurxqZ3XT6FcFvKXgjsKfxvnylOvT63tFLp2eb+782BEa5rV+q3NbuGNF9irx834six6AqB9Taaa6mutPwPgAuXC3EE75Rwc6bdvdVa/veT8y0mSxbjJSi9mnunv3GmaJnPUdNqyJfzNtrP8Asu/6kV7gAAAAAAAAAAAAAAAAAA9DMtctd+sZk3+NKK9E9l+hpq7zLtVj0NUzIvlfP4mB5QAaQAAAuHAVrdWZRyjKE17d18inlt4Bj2s6flBfEZVbgAAAAAAAAAAAAAAAAAA9TPeLcZ4+t2y27NyVi/R/mjQiG4n0l6nhKVK/eaXvD+pc4+0DPQfXFxbUk011NNdafgfCoAAKF84KxvsdKlbJdd1jkvRdS+ZUNJ027VMuNFSaj32T26oRNLpqhRVCmlKNcIqMV4JEHMAAAAAAAAAAAAAAAAAAAABE6vw/h6m3bLpU5D/3YLv9VzK5kcH58JP7G2m2Pjv0X7n9S7WWQqi5WzjBLnJ7I8Nuu6XU9p5tW/hF9L9AqoR4V1RvboVL+4iQwuDbG1LNyYxjv1wpW7ftf0JuPEekN7ftkV/5l9D1UapgZD2pzKZ78uns/cEc8LCx8ChU4larguvzb8W+Z6B+gCgACAAAAAAAAAAAAAAAR2t6vTpOP05rp3S/l179/n6AejOzcbBoduXaq4ct+9+i5lS1Li3JubhgR+wh3KcknP6Igs7Nyc+93ZVnTm+5dyj5Jcjzgdl992RNzvunbJ85ybOsAuIDb0AGD24Oq5+C/wB3yZqPOD7UX7GWnSuK6MiUas+Kos5TX8D+hSQCNaTUkpJ7p9zXM+lA0DiC7TpxpyG7MR8ucPNfQvlVkLq421SU65reMk+poiuYAAAAAAAAAAAADz6hmVYGHbk3Ps1rfb/k+SM01DNt1DLnk3vtSfUl3Jckid411B3ZkcKD7FHaltzk1v8AkitAAAVKAAoAAAAABYuEtY/ZMhYN8kqLZdhv7kn8mV0dfJkqxrYIvhvUP9R0uuc3vbX2LPFtc/dsShAAAAAAAAAOF1kaap2z/hri5P0RzIviW106HlyXfKKj73sBnd9s77rLrHvOyTm/a9zgAWJQAFAAAAAAAAAAEqxYuCcp1ajbjt9m+HUv6o9a/LcvJmWhWunWMOa/FS9/V8zTfEgAAAAAAAAEJxi9tCt25zh8QAGfgAsQABQAAAAAAAAAAHfgPbPxmvxofEjVACLAAEAAAf/Z'} alt="profile" />
                      </label>
                      <input type="file" id="imageUpload" accept="image/*" style={{ display: 'none' }} onChange={handleImageChange} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {selectedItem === 'Set Password' && (
        <div>
          <h3 className='font-bold text-xl'>Set Password Page</h3>
          <div className="card border border-gray-200 rounded-xl mt-5  bg-base-100 shadow-xl" style={{ height: '450px' }}>
            <div className="card-body">
              <div className="flex mb-4">
                <div className="w-1/2 ">
                  <p className='font-medium'>Set Password <span className='text-red-600'>*</span></p>
                  <input type="password" placeholder=" Password" className="input mt-3  w-full border border-gray-500 " />

                  <p className='text-xs mt-1 text-gray-500'>Password should contain minimum eight characters, at least one Uppercase letter, One lowercase letter, one number and one special character</p>

                </div>
                <div className="w-1/2 ms-3">
                  <p className='font-medium'>Confirm Password <span className='text-red-600'>*</span></p>
                  <input type="password" placeholder="Confirm Password" className=" mt-3 input  w-full border border-gray-500 " />
                </div>

              </div>
              <div className='mt-5'>
                <p className='font-medium'>Validate Using</p>
                <div className="flex ms-5 mt-5">
                  <input type="radio" name="radio-1" className="radio h-5 w-5" checked />
                  <lable className="ms-1 font-medium">OTP on mobile number linked with Aadhar number </lable>
                  <input type="radio" name="radio-1" className="radio h-5 w-5 ms-5" />
                  <lable className="ms-1 font-medium">OTP on mobile number linked with Medi number</lable>
                </div>
                <div className='flex justify-end'>
                  <button className='btn btn-error w-32 mt-5 text-white'>Submit</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainContent;
