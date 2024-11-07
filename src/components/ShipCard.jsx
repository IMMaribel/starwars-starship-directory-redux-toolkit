import React from 'react';
import { Link } from 'react-router-dom';
import { RocketIcon } from 'lucide-react';

const ShipCard = ({ ship }) => {

  return (
    <Link to={`/ships/${ship.id}`}>
      <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
        <div className="p-6">
          <div className="flex font-chackra items-center gap-2 mb-2">
            <RocketIcon className="w-5 h-5 text-yellow-400" />
            <h3 className="text-xl uppercase text-white">{ship.name}</h3>
          </div>
          <p className="text-gray-400 font-chackra">{ship.model}</p>
        </div>
      </div>
    </Link>
  );
};

export default ShipCard;