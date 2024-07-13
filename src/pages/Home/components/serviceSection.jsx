import React, { useContext } from 'react';
import { MyContext } from '../../../utils/contextProvider';

export const ServiceSection = () => {
    const { star } = useContext(MyContext)
    return (
        <div className='bg-alpha px-52 text-white min-h-[100vh]'>
            <h1 className='text-teta'>SERVICE</h1>
            <h1 className='text-4xl flex'>Exceeding Expectations {star}</h1>
            
        </div>
    );
};
