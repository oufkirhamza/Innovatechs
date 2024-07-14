import React, { useContext } from 'react';
import { MyContext } from '../../../utils/contextProvider';
import Star from '../../../components/strar';

export const ServiceSection = () => {
    const { star } = useContext(MyContext)
    return (
        <div className='bg-alpha px-52 text-white min-h-[100vh]'>
            <h1 className='text-teta'>SERVICE</h1>
            <div className='text-4xl flex items-center gap-3'><h1>Exceeding Expectations</h1>  <Star className="w-5"/></div>
            
        </div>
    );
};
