import React from 'react';

const MenuCard = ({ id, name, price, description, image }) => {
    return (
        <div
            className="group relative bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            key={id}
        >
            <img
                className="w-full h-64 object-cover rounded-t-xl transition-transform duration-500 ease-in-out group-hover:scale-110"
                src={image}
                alt={name}
            />
            <div className="p-5 space-y-3">
                <h2 className="text-xl md:text-2xl font-bold text-primary group-hover:text-secondary transition-colors">
                    {name}
                </h2>
                <p className="text-gray-600 text-sm md:text-base">{description}</p>
                <h3 className="text-lg md:text-xl font-semibold text-secondary">{price}</h3>
            </div>
        </div>
    );
};

export default MenuCard;