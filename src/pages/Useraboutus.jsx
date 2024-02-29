import React from 'react'

export default function Useraboutus() {
    return (
        <>
            {/* <div className='bg-gray-100 mt-8 p-12'>
                <p className='text-4xl text-center font-bold p-8 '>What our Users said about Us</p>
                <div className="flex mb-4 justify-center ms-32">
                    <div className="w-1/3 ">
                        <div className="card w-80 bg-base-100 shadow-2xl">
                            <div className="card-body">
                                <p className='text-center'>One of the best application to have in your smart device as it keeps all your health records and also helpful to the patient as they gets treatment from best doctor's</p>

                            </div>
                        </div>
                        <div className='ms-32'>
                            <img src='./assets/cl5jnhi4j000x0shabzmlaciq.png' className='w-12 mt-3' />
                           
                        </div>
                        <div className='ms-24 mt-3'>
                            <p className='font-medium text-xl'>Parth Shah</p>
                            <p className='-ms-7'>Medical Records Vault</p>
                            </div>
                    </div>
                    <div className="w-1/3 -ms-24">
                        <div className="card w-96 bg-base-100 shadow-2xl">
                            <div className="card-body">
                                <p className='text-center'>One of the most convenient apps, I came across for doctor consultation in these tough times. I logged and showed interest for a consultation. It immediately blocked a slot for me with an excellent doctor available in next 10 mins and the entire experience is quite seamless. Thanks for helping in such times! 🙏🏻</p>
                            </div>
                        </div>
                        <div className='ms-40'>
                            <img src='./assets/cl5jnhi4j000x0shabzmlaciq.png' className='w-12 mt-3' />
                        </div>
                        <div className='ms-28 mt-3'>
                            <p className='font-medium text-xl'>Chinmay Agrawal</p>
                            <p className='ms-2'>Doctor Consultation</p>
                            </div>
                    </div>
                    <div className="w-1/3 -ms-8">
                        <div className="card w-80 bg-base-100 shadow-2xl">
                            <div className="card-body">
                                <p className='text-center'>'Best pulse rate checking app ever. It showed exactly same reading as my smart watch with just the camera 2/3 reading was exactly precise like a 3k worth watch... Loved the app and the function'</p>
                            </div>
                        </div>
                        <div className='ms-32'>
                            <img src='./assets/cl5jnhi4j000x0shabzmlaciq.png' className='w-12 mt-3' />
                        </div>
                        <div className='ms-20 mt-3 '>
                            <p className='font-medium text-xl'>Alen Chakkanat</p>
                            <p className=''>Heart Rate Monitor</p>
                            </div>
                    </div>
                </div>
            </div> */}


<div className='bg-gray-100 mt-8 p-6 sm:p-12'>
    <p className='text-4xl text-center font-bold p-4 sm:p-8'>What our Users said about Us</p>
    <div className="flex flex-wrap justify-center">
        <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="card bg-base-100 shadow-2xl p-4 sm:p-8">
                <div className="card-body">
                    <p className='text-center text-sm sm:text-base'>One of the best applications to have on your smart device as it keeps all your health records and also helpful to the patient as they get treatment from the best doctors.</p>
                </div>
            </div>
            <div className='flex justify-center mt-3'>
                <img src='./assets/cl5jnhi4j000x0shabzmlaciq.png' className='w-8 sm:w-12 mt-3' alt='User Avatar'/>
            </div>
            <div className='flex flex-col items-center mt-3'>
                <p className='font-medium text-lg'>Parth Shah</p>
                <p className='text-sm'>Medical Records Vault</p>
            </div>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="card bg-base-100 shadow-2xl p-4 sm:p-8">
                <div className="card-body">
                    <p className='text-center text-sm sm:text-base'>One of the most convenient apps I came across for doctor consultation in these tough times. I logged and showed interest for a consultation. It immediately blocked a slot for me with an excellent doctor available in the next 10 mins, and the entire experience is quite seamless. Thanks for helping in such times! 🙏🏻</p>
                </div>
            </div>
            <div className='flex justify-center mt-3'>
                <img src='./assets/cl5jnhi4j000x0shabzmlaciq.png' className='w-8 sm:w-12 mt-3' alt='User Avatar'/>
            </div>
            <div className='flex flex-col items-center mt-3'>
                <p className='font-medium text-lg'>Chinmay Agrawal</p>
                <p className='text-sm'>Doctor Consultation</p>
            </div>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="card bg-base-100 shadow-2xl p-4 sm:p-8">
                <div className="card-body">
                    <p className='text-center text-sm sm:text-base'>Best pulse rate checking app ever. It showed exactly the same reading as my smartwatch with just the camera. 2/3 reading was exactly precise like a 3k worth watch... Loved the app and the function.</p>
                </div>
            </div>
            <div className='flex justify-center mt-3'>
                <img src='./assets/cl5jnhi4j000x0shabzmlaciq.png' className='w-8 sm:w-12 mt-3' alt='User Avatar'/>
            </div>
            <div className='flex flex-col items-center mt-3'>
                <p className='font-medium text-lg'>Alen Chakkanat</p>
                <p className='text-sm'>Heart Rate Monitor</p>
            </div>
        </div>
    </div>
</div>

        </>
    )
}
