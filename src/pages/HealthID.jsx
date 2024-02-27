import React, { useState } from 'react';

export default function HealthID() {
    // const [activeSection, setActiveSection] = useState('Mobile'); 

    // const handleSectionClick = (section) => {
    //     setActiveSection(section);
    // };

    const [inputValue, setInputValue] = useState('');
    const [tags, setTags] = useState([]);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleInputKeyPress = (e) => {
        if (e.key === 'Enter' || e.key === ',') {
            e.preventDefault();
            addTag();
        }
    };

    const addTag = () => {
        const trimmedValue = inputValue.trim();
        if (trimmedValue !== '' && !tags.includes(trimmedValue)) {
            setTags([...tags, trimmedValue]);
            setInputValue('');
        }
    };

    const removeTag = (tag) => {
        setTags(tags.filter((t) => t !== tag));
    };


    return (
        <>
            <div className="text-sm breadcrumbs bg-[#F1F1FF] flex">
                <ul className="md:ms-12 ms-5 md:text-sm text-xs">
                    <li><a href='/' className='text-[#7265E3]'>Home</a></li>
                    <li><a href='/' className='text-[#7265E3]'>ABDM</a></li>
                    <li>Create Medi-Chart Health ID</li>


                </ul>
                <ul className='flex-1 justify-end text-[#AFB1C9] md:text-sm text-xs'>Last Updated ON: <span className='text-[#4C5980] font-bold'>26 FEB, 2024</span></ul>
            </div>

            <div className="flex md:flex-row flex-col mb-4 p-16">
                <div className="md:w-1/2 ">
                    <p className='text-4xl font-medium text-primary'>Medi-Chart Health Account or Health ID Card Approved by NDHM.GOV.IN</p>

                    <p className='mt-5 text-xl'>Medi-Chart or Health ID is an initiative of the Indian government under the Medi-Chart Digital Mission (MCDM) for Indian citizens to establish a centralised database of all their health-related data.</p>

                    <p className='mt-5 font-medium text-2xl'>It is crucial to remember that</p>

                    <p className='mt-5 text-xl'>
                        The health records associated with Health IDs or MCDM numbers can only be accessed with the informed consent of the individual.
                    </p>

                    <p className='mt-5 text-xl'>
                        People have the option to create an alias, referred to as an "MCDM address" (similar to the email ID xyz@ndhm with a password).
                    </p>

                    <p className='mt-5 text-xl'>
                        Highly secure & private, data sharing happens only with the user’s consent
                    </p>

                </div>
                <div className="md:w-1/2 ">
                    <div className=" w-full bg-base-100 rounded-xl shadow-xl h-full">
                        <div className='card-body'>
                            <div className='prose prose-base'>
                                <h2 className='text-center text-primary'>Create Medical Record</h2>
                               
                                <select className="select select-bordered w-full">
                                    <option disabled selected>Type of Record</option>
                                    <option>Lab Report</option>
                                    <option>Prescription</option>
                                    <option>Scan</option>
                                    <option>Discharge Summary</option>
                                    <option>Vacine Certificat</option>
                                    <option>Insurance</option>
                                    <option>Invoice</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <input type="date" placeholder="Type here" className="input w-full border border-gray-300" />

                            <div className="flex flex-wrap gap-2 ">
                                {tags.map((tag, index) => (
                                    <div key={index} className="bg-gray-200 rounded-full px-3 py-1 flex items-center">
                                        <span className="text-gray-800 mr-1">{tag}</span>
                                        <button onClick={() => removeTag(tag)}>&times;</button>
                                    </div>
                                ))}
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={handleInputChange}
                                    onKeyPress={handleInputKeyPress}
                                    className="border border-gray-300 input rounded w-full "
                                    placeholder="Enter tags"
                                />
                            </div>

                            <button className='btn btn-accent text-white rounded-2xl text-lg'>Submit</button>
                        </div>
                        {/* <div className="card-body">
                            <h2 className="card-title text-center text-4xl">Create Medi-Chart Health Account</h2>
                            <p className='text-2xl text-center font-bold text-[#E58075]'>Medi-Chart (Health ID)
                                Card</p>

                            <p className='text-md text-center '>USING</p>
                            <div className='bg-[#F0F2FF] p-3 rounded-xl flex'>
                                <div className='w-1/2'>
                                    <button
                                        className={`nav-link w-full bg-${activeSection === 'Mobile' ? 'white' : 'blue'} p-3`}
                                        onClick={() => handleSectionClick('Mobile')}
                                    >
                                        Mobile Number
                                    </button>
                                </div>
                                <div className='w-1/2'>

                                    <button
                                        className={`nav-link w-full bg-${activeSection === 'Email' ? 'white' : 'blue'} p-3`}
                                        onClick={() => handleSectionClick('Email')}

                                    >
                                        Email ID
                                    </button>

                                </div>

                            </div>

                            {activeSection === 'Mobile' && (
                                <>
                                    <input type="text" placeholder="Enter Mobile No." className="input w-full border border-blue-400  mt-2" />
                                    <div className='flex mt-2'>
                                        <input type='checkbox' />
                                        <p className='ms-5'>Send Medi-Chart Card on WhatsApp</p>
                                    </div>

                                    <div className='flex '>
                                        <input type='checkbox' />
                                        <p className='ms-5'>I Agree to give the necessary permission to Medi-Chart to set up my Medi-Chart Health Locker. <a href='' className='text-[#7265E3]'>Learn More</a></p>
                                    </div>



                                </>
                            )}

                            {activeSection === 'Email' && (
                                <>
                                    Email
                                </>
                            )}

                        </div> */}

                    </div>
                </div>

            </div>

        </>
    )
}
