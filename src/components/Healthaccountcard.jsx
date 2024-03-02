import React from 'react';

export default function Healthaccountcard() {

    const cardData = [
        {
            title: 'Access India’s digital health ecosystem',
            subtitle: 'with your ABHA address',
            btnName: 'CREATE ABHA NOW  ->',
            img: './assets/image14.jpg',
            bgColor: 'primary'
        },
        {
            title: 'A smart health locker',
            subtitle: 'to organise all your medical records',
            btnName: 'UPLOAD A RECORD  ->',
            img: './assets/cl5jne9hh000p0sha6oo62dhe.png',
            bgColor: 'accent'
        },
        {
            title: 'Automated health profile',
            subtitle: 'so you make better health decisions',
            btnName: 'DOWNLOAD THE APP  ->',
            img: './assets/cl5jnlp4g000z0shafolt6atz.png',
            bgColor: 'primary'
        },
        {
            title: 'Vital tracking',
            subtitle: 'to measure your current health trends',
            btnName: 'TRACK NOW  ->',
            img: './assets/image17.jpg',
            bgColor: 'accent'
        },
        {
            title: 'Self health assessments',
            subtitle: 'so you don’t have to Google your symptoms',
            btnName: 'ACCESS NOW  ->',
            img: './assets/image15.jpg',
            bgColor: 'primary'
        },
        
    ];

    return (
        <div className="flex md:flex-row flex-col flex-wrap justify-center">
            {cardData.map((item, index) => (
                <div key={index} className="w-full  md:w-1/3 lg:w-1/3 p-12">
                    <div className={`card bg-${item.bgColor}  h-[110%] shadow-2xl mb-4`}>
                        <div className="card-body">
                            <h2 className="card-title text-2xl font-bold">{item.title}</h2>
                            <p>{item.subtitle}</p>
                            <button className="btn btn-default hover:bg-black hover:text-white">{item.btnName}</button>
                        </div>
                        <div className='flex justify-end items-end'>
                            <img src={item.img} className='w-52 h-52' alt="Card" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
