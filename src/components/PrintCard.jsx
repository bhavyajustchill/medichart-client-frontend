

import React, { useState } from 'react';
import ReactToPrint from 'react-to-print';
import QrCodeGenerator from './QRCode ';


export default function PrintCard() {
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

    return (
        <>
            <ReactToPrint
                trigger={() => <button>Generate PDF</button>}
                content={() => document.getElementById('divToPrint')}
            />
            <div id="divToPrint" className='flex flex-col justify-center mt-12 p-12' style={{ fontFamily: 'Fredoka One' }}>
               
                    <div className='shadow-xl rounded-xl w-full' style={{ height: '450px' }} >
                        <div className='w-full' >
                            <div className='text-white  rounded-t-xl' style={{ backgroundColor: 'rgb(185 182 221)' }}>
                                <div className="flex mb-4">
                                    <div className="w-1/4 ">
                                        <img src='./assets/nationalLogo-removebg-preview.png' className='h-24 pt-6 ms-4 ' />
                                    </div>
                                    <div className="w-1/2 ">
                                        <div className='p-5 text-black'>
                                            <p className=' text-xl text-center'>Medi Card Health Account (MCHA)</p>
                                            <p className='mt-2 text-sm text-center'>મેડી કાર્ડ હેલ્થ એકાઉન્ટ (MCHA)</p>
                                        </div>
                                    </div>
                                    <div className="w-1/4 ">
                                        <img src='./assets/L1.png' className='h-20 pt-6 ' />
                                    </div>
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
                    <div className='mt-5 shadow-xl rounded-xl w-full' style={{ height: '450px' }}>
                        <div className='text-white  rounded-t-xl' style={{ backgroundColor: 'rgb(185 182 221)' }}>
                            <div className="flex mb-4">
                                <div className="w-1/4 ">
                                    <img src='./assets/nationalLogo-removebg-preview.png' className='h-24 pt-6 ms-4 ' />
                                </div>
                                <div className="w-1/2 ">
                                    <div className='p-5 text-black'>
                                        <p className=' text-xl text-center'>Medi Card Health Account (MCHA)</p>
                                        <p className='mt-2 text-sm text-center'>મેડી કાર્ડ હેલ્થ એકાઉન્ટ (MCHA)</p>
                                    </div>
                                </div>
                                <div className="w-1/4 ">
                                    <img src='./assets/L1.png' className='h-20 pt-6 ' />
                                </div>
                            </div>
                        </div>
                        <div className='text-black' style={{ fontFamily: 'Fredoka One' }}>
                            <div className="flex  p-4 ">
                                <div className="w-1/2">
                                    <p className='text-xl font-bold'>Instructions</p>
                                </div>
                                <div className="w-1/2 flex justify-end">
                                    <p className='text-xl font-bold'>Toll-Free Number : 1800 114 477</p>
                                </div>
                            </div>

                            <div className='ms-5'>
                                <div>
                                    <p className='text-md'>With this MEDI you have become a part of india`s digital health ecosystem</p>
                                    <p className='text-xs'>આ MEDI વડે તમે ભારતના ડિજિટલ હેલ્થ ઇકોસિસ્ટમનો એક ભાગ બની ગયા છો</p>
                                </div>

                                <div className='mt-3'>
                                    <p className='text-md'>MEDI provides you a unique indentification and helps in storing - safekeeping all your digital health records at one place </p>
                                    <p className='text-xs'>MEDI તમને એક અનોખી ઓળખ પ્રદાન કરે છે અને તમારા તમામ ડિજિટલ હેલ્થ રેકોર્ડને એક જ જગ્યાએ સંગ્રહિત કરવામાં મદદ કરે છે.</p>
                                </div>

                                <div className='mt-3'>
                                    <p className='text-md'>You Can download the MEDI mobile app, Aarogya Setu or Other MCHA enabled app to view and share digital health records with MCHA registered healthcare service providers</p>
                                    <p className='text-xs'>તમે MCHA રજિસ્ટર્ડ હેલ્થકેર સર્વિસ પ્રોવાઇડર્સ સાથે ડિજિટલ હેલ્થ રેકોર્ડ જોવા અને શેર કરવા માટે MEDI મોબાઇલ એપ્લિકેશન, આરોગ્ય સેતુ અથવા અન્ય MCHA સક્ષમ એપ્લિકેશન ડાઉનલોડ કરી શકો છો.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                
            </div>

        </>
    );
}

