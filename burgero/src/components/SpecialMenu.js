import React from 'react';
import img1 from '../assets/PepperMaize.jpg';
import img2 from '../assets/TruffleBurger.jpg';
import img3 from '../assets/Burgerita.jpg';
import SpecialMenuCard from '../layouts/SpecialMenuCard';

const SpecialMenu = () => {
    return (
        <div>
            <div className="min-h-screen flex flex-col justify-center items-center px-5 md:px-32 pt-24">

                {/* Heading */}
                <h1 className="font-extrabold text-5xl text-center text-primary my-10 tracking-wide drop-shadow-md">
                    Special Menu
                </h1>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full">
                    <SpecialMenuCard img={img1} title="Pepper Maize" price="$10" />
                    <SpecialMenuCard img={img2} title="Truffle Burger" price="$9" />
                    <SpecialMenuCard img={img3} title="Burgerita" price="$11" />
                </div>
            </div>
        </div>
    );
}

export default SpecialMenu;
