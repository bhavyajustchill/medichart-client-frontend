import React from 'react';

function Capsule() {
    const data = [
        {
            img: "./assets/cl5hrkuyu000j0shh6f9ed48u.png",
            title: "30 Lakh+",
            content: "Downloads",
        },
        {
            img: "./assets/cl5c2clg0001p0tchfaerew42.png",
            title: "50 Lakh+",
            content: "Vitals Stored",
        },
        {
            img: "./assets/cl5hrmybd000l0shhhk5hdvx0.png",
            title: "10 Lakh+",
            content: "Prescriptions",
        },
        {
            img: "./assets/cl5hrpdro000p0shh2j0b4q83.png",
            title: "30 Lakh+",
            content: "Assessments",
        },
        {
            img: "./assets/image4.jpg",
            title: "5000+",
            content: "Doctors",
        }
    ];

    return (
        <div className="flex md:flex-row flex-col mt-10">
            {data.map((item, index) => (
                <div key={index} className="card w-84 bg-base-100 shadow-xl mx-2">
                    <div className="card-body">    
                        <div className='flex items-center'>
                            <img src={item.img} className='h-20' alt={item.title} />
                            <div className="ms-5">
                                <p className='font-bold text-2xl'>
                                    {item.title}  <br />
                                    <span className='font-normal'>{item.content}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Capsule;
