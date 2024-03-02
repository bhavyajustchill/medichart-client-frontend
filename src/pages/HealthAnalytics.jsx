

// import React, { useEffect, useRef, useState } from 'react';
// import Chart from 'chart.js/auto';

// export default function HealthAnalytics() {
//     const chartRef = useRef(null);
//     const [selectedItem, setSelectedItem] = useState('B12');

//     useEffect(() => {
//         if (chartRef.current) {
//             const ctx = chartRef.current.getContext('2d');
//             const chart = new Chart(ctx, {
//                 type: 'line',
//                 data: {
//                     labels: ['02/03/2024', '15/03/2024', '5/02/2024'],
//                     datasets: [{
//                         label: 'Value',
//                         data: getChartData(selectedItem),
//                         backgroundColor: 'rgba(75, 192, 192, 0.2)',
//                         borderColor: 'rgba(75, 192, 192, 1)',
//                         borderWidth: 1
//                     }]
//                 },
//                 options: {
//                     scales: {
//                         y: {
//                             beginAtZero: true
//                         }
//                     }
//                 }
//             });

//             return () => {
//                 chart.destroy();
//             };
//         }
//     }, [selectedItem]);

//     const handleSelectChange = (event) => {
//         setSelectedItem(event.target.value);
//     };

//     const getChartData = (selectedItem) => {
//         switch (selectedItem) {
//             case 'B12':
//                 return [215, 180, 170];
//             case 'Vitamin D':
//                 return [150, 160, 140];
//             case 'Iron':
//                 return [120, 130, 110];
//             case 'Calcium':
//                 return [200, 210, 190];
//             case 'Magnesium':
//                 return [100, 90, 95];
//             case 'Vitamin C':
//                 return [180, 190, 185];
//             case 'Zinc':
//                 return [220, 210, 230];
//             case 'Vitamin B6':
//                 return [170, 175, 165];
//             case 'Vitamin E':
//                 return [130, 135, 125];
//             case 'Vitamin K':
//                 return [140, 145, 150];
//             default:
//                 return [];
//         }
//     };

//     return (
//         <>
//             <div className="overflow-x-auto p-12">
//             <div>
//                 <select value={selectedItem} onChange={handleSelectChange} className='w-80 border border-gray-600'>
//                     <option value="B12">B12</option>
//                     <option value="Vitamin D">Vitamin D</option>
//                     <option value="Iron">Iron</option>
//                     <option value="Calcium">Calcium</option>
//                     <option value="Magnesium">Magnesium</option>
//                     <option value="Vitamin C">Vitamin C</option>
//                     <option value="Zinc">Zinc</option>
//                     <option value="Vitamin B6">Vitamin B6</option>
//                     <option value="Vitamin E">Vitamin E</option>
//                     <option value="Vitamin K">Vitamin K</option>
                  
//                 </select>
//             </div>
//                 <table className="table">
                   
//                     <thead>
//                         <tr>
//                             <th>ID</th>
//                             <th>Name</th>
//                             <th>Date</th>
//                             <th>Value</th>
//                         </tr>
//                     </thead>
//                     <tbody>
                     
//                         <tr className="bg-base-200">
//                             <th>1</th>
//                             <td>{selectedItem}</td>
//                             <td>02/03/2024</td>
//                             <td>{getChartData(selectedItem)[0]}</td>
//                         </tr>
                     
//                         <tr>
//                             <th>2</th>
//                             <td>{selectedItem}</td>
//                             <td>15/03/2024</td>
//                             <td>{getChartData(selectedItem)[1]}</td>
//                         </tr>
                       
//                         <tr>
//                             <th>3</th>
//                             <td>{selectedItem}</td>
//                             <td>5/02/2024</td>
//                             <td>{getChartData(selectedItem)[2]}</td>
//                         </tr>
//                     </tbody>
//                 </table>
//             </div>
         
//             <div className='flex justify-center mb-8'>
//                 <div className="mt-6  md:w-1/2">
//                     <canvas ref={chartRef}></canvas>
//                 </div>
//             </div>
//         </>
//     );
// }


import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';

export default function HealthAnalytics() {
    const chartRef = useRef(null);
    const [selectedItem, setSelectedItem] = useState('B12');

    useEffect(() => {
        if (chartRef.current) {
            const ctx = chartRef.current.getContext('2d');
            const chart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['02/03/2024', '15/03/2024', '5/02/2024'],
                    datasets: [{
                        label: 'Value',
                        data: getChartData(selectedItem),
                        borderColor: getLineColor(selectedItem),
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });

            return () => {
                chart.destroy();
            };
        }
    }, [selectedItem]);

    const handleSelectChange = (event) => {
        setSelectedItem(event.target.value);
    };

    const getChartData = (selectedItem) => {
        switch (selectedItem) {
            case 'B12':
                return [215, 180, 170];
            case 'Vitamin D':
                return [150, 160, 140];
            case 'Iron':
                return [120, 130, 110];
            case 'Calcium':
                return [200, 210, 190];
            case 'Magnesium':
                return [100, 90, 95];
            case 'Vitamin C':
                return [180, 190, 185];
            case 'Zinc':
                return [220, 210, 230];
            case 'Vitamin B6':
                return [170, 175, 165];
            case 'Vitamin E':
                return [130, 135, 125];
            case 'Vitamin K':
                return [140, 145, 150];
            default:
                return [];
        }
    };

    const getLineColor = (selectedItem) => {
        const data = getChartData(selectedItem);
        const thresholds = {
            high: 200,
            low: 100
        };

        const lineColor = data.map(value => {
            if (value > thresholds.high) {
                return 'red'; // High value
            } else if (value < thresholds.low) {
                return 'red'; // Low value
            } else {
                return 'green'; // Normal value
            }
        });

        return lineColor;
    };

    return (
        <>
            <div className="overflow-x-auto p-12">
            <div>
                <select value={selectedItem} onChange={handleSelectChange} className='w-80 border border-gray-600'>
                    <option value="B12">B12</option>
                    <option value="Vitamin D">Vitamin D</option>
                    <option value="Iron">Iron</option>
                    <option value="Calcium">Calcium</option>
                    <option value="Magnesium">Magnesium</option>
                    <option value="Vitamin C">Vitamin C</option>
                    <option value="Zinc">Zinc</option>
                    <option value="Vitamin B6">Vitamin B6</option>
                    <option value="Vitamin E">Vitamin E</option>
                    <option value="Vitamin K">Vitamin K</option>
                </select>
            </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-base-200">
                            <th>1</th>
                            <td>{selectedItem}</td>
                            <td>02/03/2024</td>
                            <td>{getChartData(selectedItem)[0]}</td>
                        </tr>
                        <tr>
                            <th>2</th>
                            <td>{selectedItem}</td>
                            <td>15/03/2024</td>
                            <td>{getChartData(selectedItem)[1]}</td>
                        </tr>
                        <tr>
                            <th>3</th>
                            <td>{selectedItem}</td>
                            <td>5/02/2024</td>
                            <td>{getChartData(selectedItem)[2]}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='flex justify-center mb-8'>
                <div className="mt-6  md:w-1/2">
                    <canvas ref={chartRef}></canvas>
                </div>
            </div>
        </>
    );
}
