import React, { useState } from 'react';
import Checkbox from '../components/Checkbox ';
import { useNavigate } from 'react-router-dom';

export default function MedicalHistory() {
    const CheckBoxData = [
        {
            "label": 'Diabetes',
            "OnChange": 'Diabetes'
        },
        {
            "label": 'Thyroid related health problems',
            "OnChange": 'Thyroid'
        },
        {
            "label": 'Breathing or Respiratory',
            "OnChange": 'Breathing'
        },
        {
            "label": 'Epilepsy/Fits',
            "OnChange": 'Epilepsy'
        },
        {
            "label": 'Mental health issues',
            "OnChange": 'Mental'
        },
        {
            "label": 'Migraine',
            "OnChange": 'Migraine'
        },
        {
            "label": 'Skin problems',
            "OnChange": 'Skin'
        },
        {
            "label": 'Sinusitis',
            "OnChange": 'Sinusitis'
        },
        {
            "label": 'None',
            "isChecked": 'checkboxes.None',
            "OnChange": 'None'
        }

    ];

    const CheckBoxData1 = [
        {
            "label": 'Diabetes',
            "OnChange": 'Diabetes'
        },
       
        {
            "label": 'Hypertension or High blood...',
            "isChecked": 'checkboxes.Hypertension',
            "OnChange": 'Hypertension'
        },
        {
            "label": 'Thyroid disease',
            "isChecked": 'checkboxes.Thyroid',
            "OnChange": 'Thyroid'
        },
        {
            "label": 'Heart or Cardiac diseases',
            "isChecked": 'checkboxes.Heart',
            "OnChange": 'Heart'
        },
        {
            "label": 'Breathing or Respiratory...',
            "isChecked": 'checkboxes.Breathing',
            "OnChange": 'Breathing'
        },
        {
            "label": 'Cancer',
            "isChecked": 'checkboxes.Cancer',
            "OnChange": 'Cancer'
        },
        {
            "label": 'Espilepsy/Fits',
            "isChecked": 'checkboxes.Espilepsy',
            "OnChange": 'Espilepsy'
        },
        {
            "label": 'None',
            "isChecked": 'checkboxes.None',
            "OnChange": 'None'
        },
        {
            "label": 'Health issue not listed here',
            "isChecked": 'checkboxes.Health',
            "OnChange": 'Health'
        }

    ];

    const [checkboxes, setCheckboxes] = useState({
        Diabetes: false,
        Thyroid: false,
        
    });

    const [checkboxes1, setCheckboxes1] = useState({
        Diabetes: false,
      
    });

    const [isContinueEnabled, setIsContinueEnabled] = useState(false);

    const handleCheckboxChange = (option) => {
        setCheckboxes((prevCheckboxes) => ({
            ...prevCheckboxes,
            [option]: !prevCheckboxes[option],
        }));
        
        setIsContinueEnabled(Object.values({...checkboxes, [option]: !checkboxes[option]}).includes(true) && Object.values(checkboxes1).includes(true));
    };

    const handleCheckboxChange1 = (option) => {
        setCheckboxes1((prevCheckboxes) => ({
            ...prevCheckboxes,
            [option]: !prevCheckboxes[option],
        }));
    
        setIsContinueEnabled(Object.values({...checkboxes1, [option]: !checkboxes1[option]}).includes(true) && Object.values(checkboxes).includes(true));
    };
    const navigate = useNavigate();

    const handleContinue = () => {
      
        navigate('/MediCard'); 
    };
    return (
        <>
            <div className='flex justify-center items-center md:p-0 p-12'>
                <div className="mt-5 rounded-lg md:w-1/2  bg-base-100 shadow-2xl">
                    <div className="card-body">
                        <p className='text-center text-secondary'>Your Medi card is almost ready </p>
                        <p className='text-center font-bold text-xl text-primary'>Add your medical history </p>

                        <p className='font-bold'>Do you have any of the following medical conditions? </p>

                        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                            {CheckBoxData.map((items, index) => (
                                <div key={index} className='md:w-1/3 w-full p-1 pt-3 py-1 text-xs' style={{ height: '75px' }}>
                                    <div className="bg-white rounded-lg shadow p-4 h-full">
                                        <Checkbox
                                            label={items.label}
                                            isChecked={checkboxes[items.OnChange]}
                                            onChange={() => handleCheckboxChange(items.OnChange)}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <p className='font-bold mt-3'>Do you have family history of the following medical conditions? </p>

                        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                            {CheckBoxData1.map((items, index) => (
                                <div key={index} className='md:w-1/3 w-full p-1 pt-3 py-1 text-xs' style={{ height: '75px' }}>
                                    <div className="bg-white rounded-lg shadow p-4 h-full">
                                        <Checkbox
                                            label={items.label}
                                            isChecked={checkboxes1[items.OnChange]}
                                            onChange={() => handleCheckboxChange1(items.OnChange)}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <hr className='mt-5' />

                        <button 
                            className='btn bg-primary text-white rounded-2xl mt-3'
                            disabled={!isContinueEnabled}
                            onClick={handleContinue}
                        >
                            Continue
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
