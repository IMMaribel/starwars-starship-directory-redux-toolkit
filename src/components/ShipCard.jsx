import React from 'react';
import { RocketIcon } from 'lucide-react';

const ShipCard = ({ name, model }) => {

  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
      {/* <div className="h-48 bg-gray-800 flex items-center justify-center">
      </div> */}
      <div className="p-6">
        <div className="flex font-chackra items-center gap-2 mb-2">
          <RocketIcon className="w-5 h-5 text-yellow-400" />
          <h3 className="text-xl uppercase text-white">{name}</h3>
        </div>
        <p className="text-gray-400 font-chackra">{model}</p>
      </div>
    </div>
  );
};

export default ShipCard;