import React from 'react';
import { BsStarFill } from 'react-icons/bs';
import { BsStarHalf } from 'react-icons/bs';

const SpecialMenuCard = ({ img, title, price }) => {
    return (
        <div className="w-full bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden">

            {/* Image */}
            <img className="w-full h-52 object-cover" src={img} alt={title} />

            {/* Content */}
            <div className="space-y-4 py-6 px-4">

                {/* Title */}
                <h3 className="font-semibold text-2xl text-primary text-center">
                    {title}
                </h3>

                {/* Stars */}
                <div className="flex justify-center text-secondary">
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarHalf />
                </div>

                {/* Price + Button */}
                <div className="flex items-center justify-center gap-4">
                    <h3 className="font-bold text-2xl text-secondary">{price}</h3>
                </div>

            </div>
        </div>
    );
};

export default SpecialMenuCard;
