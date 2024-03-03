import React from 'react'
import MyMedicalRecords from '../pages/MyMedicalRecords';

export default function HealthAnalyticsRecords() {
    const records = [
        {
            "_id": "65df017bae5ca64bae14b39a",
            "typeOfRecord": "Lab Report",
            "userId": "q3irip9bivb9e9gt8wgisb9wt0",
            "documentDate": "2024-02-28T06:28:52.000Z",
            "tags": [
                "first",
                "second"
            ],
            "fileUrl": "https://medichart.s3.ap-south-1.amazonaws.com/1709113721608-ABDM_M3.docx",
            "__v": 0
        },
        {
            "_id": "65df017bae5ca64bae14b39b",
            "typeOfRecord": "Prescription",
            "userId": "q3irip9bivb9e9gt8wgisb9wt1",
            "documentDate": "2024-02-28T06:28:52.000Z",
            "tags": [
                "third",
                "fourth"
            ],
            "fileUrl": "https://medichart.s3.ap-south-1.amazonaws.com/1709113721608-ABDM_M4.docx",
            "__v": 0
        },
        {
            "_id": "65df017bae5ca64bae14b39c",
            "typeOfRecord": "Scan",
            "userId": "q3irip9bivb9e9gt8wgisb9wt2",
            "documentDate": "2024-02-28T06:28:52.000Z",
            "tags": [
                "fifth",
                "sixth"
            ],
            "fileUrl": "https://medichart.s3.ap-south-1.amazonaws.com/1709113721608-ABDM_M5.docx",
            "__v": 0
        },
        {
            "_id": "65df017bae5ca64bae14b39d",
            "typeOfRecord": "Discharge Summary",
            "userId": "q3irip9bivb9e9gt8wgisb9wt3",
            "documentDate": "2024-02-28T06:28:52.000Z",
            "tags": [
                "seventh",
                "eighth"
            ],
            "fileUrl": "https://medichart.s3.ap-south-1.amazonaws.com/1709113721608-ABDM_M6.docx",
            "__v": 0
        },
        {
            "_id": "65df017bae5ca64bae14b39e",
            "typeOfRecord": "Vaccine Certificate",
            "userId": "q3irip9bivb9e9gt8wgisb9wt4",
            "documentDate": "2024-02-28T06:28:52.000Z",
            "tags": [
                "ninth",
                "tenth"
            ],
            "fileUrl": "https://medichart.s3.ap-south-1.amazonaws.com/1709113721608-ABDM_M7.docx",
            "__v": 0
        },
        {
            "_id": "65df017bae5ca64bae14b39f",
            "typeOfRecord": "Insurance",
            "userId": "q3irip9bivb9e9gt8wgisb9wt5",
            "documentDate": "2024-02-28T06:28:52.000Z",
            "tags": [
                "eleventh",
                "twelfth"
            ],
            "fileUrl": "https://medichart.s3.ap-south-1.amazonaws.com/1709113721608-ABDM_M8.docx",
            "__v": 0
        },
        {
            "_id": "65df017bae5ca64bae14b39g",
            "typeOfRecord": "Invoice",
            "userId": "q3irip9bivb9e9gt8wgisb9wt6",
            "documentDate": "2024-02-28T06:28:52.000Z",
            "tags": [
                "thirteenth",
                "fourteenth"
            ],
            "fileUrl": "https://medichart.s3.ap-south-1.amazonaws.com/1709113721608-ABDM_M9.docx",
            "__v": 0
        },
        {
            "_id": "65df017bae5ca64bae14b39h",
            "typeOfRecord": "Other",
            "userId": "q3irip9bivb9e9gt8wgisb9wt7",
            "documentDate": "2024-02-28T06:28:52.000Z",
            "tags": [
                "fifteenth",
                "sixteenth"
            ],
            "fileUrl": "https://medichart.s3.ap-south-1.amazonaws.com/1709113721608-ABDM_M10.docx",
            "__v": 0
        }, {
            "_id": "65df017bae5ca64bae14b39a",
            "typeOfRecord": "Lab Report",
            "userId": "q3irip9bivb9e9gt8wgisb9wt0",
            "documentDate": "2024-02-28T06:28:52.000Z",
            "tags": [
                "first",
                "second"
            ],
            "fileUrl": "https://medichart.s3.ap-south-1.amazonaws.com/1709113721608-ABDM_M3.docx",
            "__v": 0
        },
    ];

    const recordsByType = records.reduce((acc, record) => {
        if (!acc[record.typeOfRecord]) {
            acc[record.typeOfRecord] = [];
        }
        acc[record.typeOfRecord].push(record);
        return acc;
    }, {});
    return (
        <>
            <div  className='p-12'>
                <h1 className='text-3xl font-bold text-center'>Medical Records</h1>
                <div className='pt-4'>

                    {Object.entries(recordsByType).map(([type, records]) => (
                        <div key={type}>
                            <h2 className='text-xl font-bold'>{type}</h2>
                            <MyMedicalRecords records={records} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
