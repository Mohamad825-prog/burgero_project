import React from 'react';
import MenuCard from '../layouts/MenuCard.js';

// Import images
import ClassicBurger from '../assets/ClassicBurger.jpg';
import TheLebanese from '../assets/TheLebanese.jpg';
import MushroomVibes from '../assets/MushroomVibes.jpg';
import TheBurgero from '../assets/TheBurgero.jpg';
import TheMozz from '../assets/TheMozz.jpg';
import TheSmashBurger from '../assets/TheSmashBurger.jpg';

const Menu = () => {
    const menuData = [
        { id: 1, name: 'Classic Burger', price: '$8', description: 'A timeless favorite with lettuce, tomato, and cheese.', image: ClassicBurger },
        { id: 2, name: 'The Lebanese', price: '$9', description: 'Featuring a blend of spices and fresh veggies.', image: TheLebanese },
        { id: 3, name: 'Mushroom Vibes', price: '$10', description: 'Sauteed mushrooms with Swiss cheese and garlic aioli.', image: MushroomVibes },
        { id: 4, name: 'The Burgero', price: '$7', description: 'Our signature burger with special sauce and pickles.', image: TheBurgero },
        { id: 5, name: 'The Mozz', price: '$10', description: 'Mozzarella-stuffed patty with marinara sauce.', image: TheMozz },
        { id: 6, name: 'The Smash Burger', price: '$11', description: 'Double patty smashed to perfection with crispy edges.', image: TheSmashBurger },
    ];

    return (
        <div className="bg-tertiary py-16">
            <div className="container mx-auto">
                <h1 className="font-extrabold text-4xl md:text-5xl text-center text-secondary mb-12">
                    Our Menu
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
                    {menuData.map((item) => (
                        <MenuCard
                            key={item.id}
                            name={item.name}
                            price={item.price}
                            description={item.description}
                            image={item.image}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Menu;