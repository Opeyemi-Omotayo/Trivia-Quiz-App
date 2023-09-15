import React from 'react';
import { ButtonProps } from '../types/types';

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
    return (
        <div className='flex items-end justify-end   '>
            <button
                type="submit"
                onClick={onClick}
                className="mt-6 w-[55%] md:w-[35%] text-sm md:text-lg text-white bg-sky-500 p-3  rounded-md shadow-md"
            >
                {children}
            </button>
        </div>
    );
};

export default Button;