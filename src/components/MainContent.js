
import React, { useState } from 'react';

const MainContent = ({ selectedItem }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [name, setName] = useState('ABC');
  const [gender, setGender] = useState('Male');
  const [dateOfBirth, setDateOfBirth] = useState('29-09-2001');
  const [address, setAddress] = useState('C/O Sakdecha hemalbhai shramdeep Triveni Nagar Main Doshi Hostipal B/H Guruprasad Chowk Rajkot');
  const [district, setDistrict] = useState('Rajkot');
  const [state, setState] = useState('Gujarat');
  const [pincode, setPincode] = useState('360004');


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
    // Set the phone number state to the placeholder number
    setPhoneNumber(placeholderNumber);
  };
  return (
    <div className="p-4 w-full">

      {selectedItem === 'Medi Card' && (
        <div className='flex justify-center mt-12'>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <p className="heading_8264">MASTERCARD</p>
                <svg
                  className="logo"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width={36}
                  height={36}
                  viewBox="0 0 48 48"
                >
                  <path fill="#ff9800" d="M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z" />
                  <path fill="#d50000" d="M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z" />
                  <path
                    fill="#ff3d00"
                    d="M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48 C20.376,15.05,18,19.245,18,24z"
                  />
                </svg>
                <svg
                  version="1.1"
                  className="chip"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  width="30px"
                  height="30px"
                  viewBox="0 0 50 50"
                  xmlSpace="preserve"
                >
                  <image
                    id="image0"
                    width={50}
                    height={50}
                    x={0}
                    y={0}
                    href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAABGdBTUEAALGPC/xhBQAAACBjSFJN
        AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAB6VBMVEUAAACNcTiVeUKVeUOY
        fEaafEeUeUSYfEWZfEaykleyklaXe0SWekSZZjOYfEWYe0WXfUWXe0WcgEicfkiXe0SVekSXekSW
        ekKYe0a9nF67m12ZfUWUeEaXfESVekOdgEmVeUWWekSniU+VeUKVeUOrjFKYfEWliE6WeESZe0GS
        e0WYfES7ml2Xe0WXeESUeEOWfEWcf0eWfESXe0SXfEWYekSVeUKXfEWxklawkVaZfEWWekOUekOW
        ekSYfESZe0eXekWYfEWZe0WZe0eVeUSWeETAnmDCoWLJpmbxy4P1zoXwyoLIpWbjvXjivnjgu3bf
        u3beunWvkFWxkle/nmDivXiWekTnwXvkwHrCoWOuj1SXe0TEo2TDo2PlwHratnKZfEbQrWvPrWua
        fUfbt3PJp2agg0v0zYX0zYSfgkvKp2frxX7mwHrlv3rsxn/yzIPgvHfduXWXe0XuyIDzzISsjVO1
        lVm0lFitjVPzzIPqxX7duna0lVncuHTLqGjvyIHeuXXxyYGZfUayk1iyk1e2lln1zYTEomO2llrb
        tnOafkjFpGSbfkfZtXLhvHfkv3nqxH3mwXujhU3KqWizlFilh06khk2fgkqsjlPHpWXJp2erjVOh
        g0yWe0SliE+XekShhEvAn2D///+gx8TWAAAARnRSTlMACVCTtsRl7Pv7+vxkBab7pZv5+ZlL/UnU
        /f3SJCVe+Fx39naA9/75XSMh0/3SSkia+pil/KRj7Pr662JPkrbP7OLQ0JFOijI1MwAAAAFiS0dE
        orDd34wAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfnAg0IDx2lsiuJAAACLElEQVRIx2Ng
        GAXkAUYmZhZWPICFmYkRVQcbOwenmzse4MbFzc6DpIGXj8PD04sA8PbhF+CFaxEU8iWkAQT8hEVg
        OkTF/InR4eUVICYO1SIhCRMLDAoKDvFDVhUaEhwUFAjjSUlDdMiEhcOEItzdI6OiYxA6YqODIt3d
        I2DcuDBZsBY5eVTr4xMSYcyk5BRUOXkFsBZFJTQnp6alQxgZmVloUkrKYC0qqmji2WE5EEZuWB6a
        lKoKdi35YQUQRkFYPpFaCouKIYzi6EDitJSUlsGY5RWVRGjJLyxNy4ZxqtIqqvOxaVELQwZFZdkI
        JVU1RSiSalAt6rUwUBdWG1CP6pT6gNqwOrgCdQyHNYR5YQFhDXj8MiK1IAeyN6aORiyBjByVTc0F
        qBoKWpqwRCVSgilOaY2OaUPw29qjOzqLvTAchpos47u6EZyYnngUSRwpuTe6D+6qaFQdOPNLRzOM
        1dzhRZyW+CZouHk3dWLXglFcFIflQhj9YWjJGlZcaKAVSvjyPrRQ0oQVKDAQHlYFYUwIm4gqExGm
        BSkutaVQJeomwViTJqPK6OhCy2Q9sQBk8cY0DxjTJw0lAQWK6cOKfgNhpKK7ZMpUeF3jPa28BCET
        amiEqJKM+X1gxvWXpoUjVIVPnwErw71nmpgiqiQGBjNzbgs3j1nus+fMndc+Cwm0T52/oNR9lsdC
        S24ra7Tq1cbWjpXV3sHRCb1idXZ0sGdltXNxRateRwHRAACYHutzk/2I5QAAACV0RVh0ZGF0ZTpj
        cmVhdGUAMjAyMy0wMi0xM1QwODoxNToyOSswMDowMEUnN7UAAAAldEVYdGRhdGU6bW9kaWZ5ADIw
        MjMtMDItMTNUMDg6MTU6MjkrMDA6MDA0eo8JAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDIzLTAy
        LTEzVDA4OjE1OjI5KzAwOjAwY2+u1gAAAABJRU5ErkJggg=="
                  />
                </svg>
                <svg
                  version="1.1"
                  className="contactless"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  width="20px"
                  height="20px"
                  viewBox="0 0 50 50"
                  xmlSpace="preserve"
                >
                  <image
                    id="image0"
                    width={50}
                    height={50}
                    x={0}
                    y={0}
                    href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAQAAAC0NkA6AAAABGdBTUEAALGPC/xhBQAAACBjSFJN
        AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZ
        cwAACxMAAAsTAQCanBgAAAAHdElNRQfnAg0IEzgIwaKTAAADDklEQVRYw+1XS0iUURQ+f5qPyjQf
        lGRFEEFK76koKGxRbWyVVLSOgsCgwjZBJJYuKogSIoOonUK4q3U0WVBWFPZYiIE6kuArG3VGzK/F
        fPeMM/MLt99/NuHdfPd888/57jn3nvsQWWj/VcMlvMMd5KRTogqx9iCdIjUUmcGR9ImUYowyP3xN
        GQJoRLVaZ2DaZf8kyjEJALhI28ELioyiwC+Rc3QZwRYyO/DH51hQgWm6DMIh10KmD4u9O16K49it
        VoPOAmcGAWWOepXIRScAoJZ2Frro8oN+EyTT6lWkkg6msZfMSR35QTJmjU0g15tIGSJ08ZZMJkJk
        HpNZgSkyXosS13TkJpZ62mPIJvOSzC1bp8vRhhCakEk7G9/o4gmZdbpsTcKu0m63FbnBP9Qrc15z
        bkbemfgNDtEOI8NO5L5O9VYyRYgmJayZ9nPaxZrSjW4+F6Uw9yQqIiIZwhp2huQTf6OIvCZyGM6g
        DJBZbyXifJXr7FZjGXsdxADxI7HUJFB6iWvsIhFpkoiIiGTJfjJfiCuJg2ZEspq9EHGVpYgzKqwJ
        qSAOEwuJQ/pxPvE3cYltJCLdxBLiSKKIE5HxJKcTRNeadxfhDiuYw44zVs1dxKwRk/uCxIiQkxKB
        sSctRVAge9g1E15EHE6yRUaJecRxcWlukdRIbGFOSZCMWQA/iWauIP3slREHXPyliqBcrrD71Amz
        Z+rD1Mt2Yr8TZc/UR4/YtFnbijnHi3UrN9vKQ9rPaJf867ZiaqDB+czeKYmd3pNa6fuI75MiC0uX
        XSR5aEMf7s7a6r/PudVXkjFb/SsrCRfROk0Fx6+H1i9kkTGn/E1vEmt1m089fh+RKdQ5O+xNJPUi
        cUIjO0Dm7HwvErEr0YxeibL1StSh37STafE4I7zcBdRq1DiOkdmlTJVnkQTBTS7X1FYyvfO4piaI
        nKbDCDaT2anLudYXCRFsQBgAcIF2/Okwgvz5+Z4tsw118dzruvIvjhTB+HOuWy8UvovEH6beitBK
        xDyxm9MmISKCWrzB7bSlaqGlsf0FC0gMjzTg6GgAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjMtMDIt
        MTNUMDg6MTk6NTYrMDA6MDCjlq7LAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIzLTAyLTEzVDA4OjE5
        OjU2KzAwOjAw0ssWdwAAACh0RVh0ZGF0ZTp0aW1lc3RhbXAAMjAyMy0wMi0xM1QwODoxOTo1Nisw
        MDowMIXeN6gAAAAASUVORK5CYII="
                  />
                </svg>
                <p className="number">9759 2484 5269 6576</p>
                <p className="valid_thru">VALID THRU</p>
                <p className="date_8264">1 2 / 2 4</p>
                <p className="name">BRUCE WAYNE</p>
              </div>
              <div className="flip-card-back">
                <div className="strip" />
                <div className="mstrip" />
                <div className="sstrip">
                  <p className="code">***</p>
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
