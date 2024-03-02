import React from 'react';
import ImagePopup from '../components/ImagePopup';

const MyMedicalRecords = ({ records }) => {
    return (
        // <div className="overflow-x-auto p-12">
        //     <table className="table">
        //         <thead>
        //             <tr>
        //                 <th>ID</th>
        //                 <th>Type of Record</th>
        //                 <th>User ID</th>
        //                 <th>Document Date</th>
        //                 <th>Tags</th>
        //                 <th>File URL</th>
        //             </tr>
        //         </thead>
        //         <tbody>
        //             {records.map((record, index) => (
        //                 <tr key={record._id}>
        //                     <td>{index + 1}</td>
        //                     <td>{record.typeOfRecord}</td>
        //                     <td>{record.userId}</td>
        //                     <td>{record.documentDate}</td>
        //                     <td>{record.tags.join(', ')}</td>
        //                     <td><a href={record.fileUrl} target="_blank" rel="noopener noreferrer">View Document</a></td>
        //                 </tr>
        //             ))}
        //         </tbody>
        //     </table>
        // </div>
        <div className="overflow-x-auto p-12 ">
            <table className="table">
                <thead className='text-lg'>
                    <tr>
                        <th>ID</th>
                        <th>Type of Record</th>
                        <th>Name</th>
                        <th>Document Date</th>
                        <th>Tags</th>
                        <th>View</th>
                    </tr>
                </thead>
                <tbody>
                    {records.map((record, index) => (
                        <tr key={record._id}>
                            <td>{index + 1}</td>
                            <td>{record.typeOfRecord}</td>
                            <td>{record.userId}</td>
                            <td>{record.documentDate}</td>
                            <td>{record.tags.join(', ')}</td>
                            <td><a href={record.fileUrl} target="_blank" rel="noopener noreferrer">View Document</a>
                            <ImagePopup imgUrl={record.fileUrl} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MyMedicalRecords;



