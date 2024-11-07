import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import bgimage from '../assets/velluz.jpg';

const ShipPage = () => {
  const { id } = useParams();
  const ship = useSelector((state) => 
      state.ships.ships.find((ship) => ship.id === id)
  );
  const [imageError, setImageError] = useState(false);



  if (!ship) {
    return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center">
      <p className="text-red-500">Ship not found.</p>;
    </div>
    );
  }

  return (
    <div className="relative min-h-[70vh]">
        <div
        className="absolute inset-0 bg-cover opacity-50 "
        style={{ backgroundImage: `url(${bgimage})` }}
        ></div>

        <div className="relative z-10">
            <h1 className='flex font-chackra text-3xl mb-10 text-white border-t-2 border-b-2 border-gray-400'>
                STARSHIPS</h1>
                <div className='flex flex-col md:flex-row col-span-2 justify-center'>
                {imageError ? (
                    <div className="flex items-center justify-center w-full h-full bg-gray-700 text-white p-4 rounded-l-lg">
                    Image not available
                    </div>
                ) : (
                    <img 
                        src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`} 
                        alt={ship.name} 
                        className=" w-full h-full object-cover rounded-l-lg"
                        onError={() => setImageError(true)} 
                    />
                )}
                    <div className="bg-gray-800 text-white p-8 rounded-r-lg border-l-2 border-red-500">
                    <h2 className="text-2xl font-bold mb-2">{ship.name}</h2>
                    <p><strong>Model:</strong> {ship.model}</p>
                    <p><strong>Manufacturer:</strong> {ship.manufacturer}</p>
                    <p><strong>Class:</strong> {ship.starship_class}</p>
                    <p><strong>Cost:</strong> {ship.cost_in_credits} credits</p>
                    <p><strong>Speed:</strong> {ship.max_atmosphering_speed} Km/h</p>
                    <p><strong>Hyperdrive Rating:</strong> {ship.hyperdrive_rating}</p>
                    <p><strong>MGLT:</strong> {ship.MGLT}</p>
                    <p><strong>Length:</strong> {ship.length}</p>
                    <p><strong>Cargo Capacity:</strong> {ship.cargo_capacity}</p>
                    <p><strong>Crew:</strong> {ship.crew}</p>
                    <p><strong>Passengers:</strong> {ship.passengers}</p>
                    </div>
                </div>
        </div>
    </div>
  );
};

export default ShipPage;
