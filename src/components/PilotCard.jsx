import React, { useState } from 'react';

const PilotCard = ({ pilot }) => {
    

    const [imageError, setImageError] = useState(false);
  
    if (!pilot) {
      return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <p className="text-red-500">Pilot not found.</p>;
      </div>
      );
    }

  return (
    <div className='flex flex-col col-span-2 justify-center mx-5'>
        {imageError ? (
            <div className="flex flex-col rounded-t-lg font-chackra items-center justify-center w-full h-full bg-gray-700 text-white p-4">
            Image not available
            </div>
            ) : (
                <img 
                    src={pilot.imageUrl} 
                    alt={pilot.name} 
                    className=" w-full h-full object-cover rounded-t-lg"
                    onError={() => setImageError(true)} 
                    loading='lazy'
                    />
            )}
                <div className="bg-gray-800 text-white p-8 rounded-b-lg border-t-2 border-red-500 mb-5">
                    <h2 className="font-chackra text-2xl font-bold">{pilot.name}</h2>
                </div>
        </div>
    );
    };

export default PilotCard;
