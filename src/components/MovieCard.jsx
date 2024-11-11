import React, { useState } from 'react';

const MovieCard = ({ movie }) => {
  const [imageError, setImageError] = useState(false);

  if (!movie) {
    return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center">
      <p className="text-red-500">Movie not found.</p>;
    </div>
    );
  }

  return (
    <div className='flex flex-col justify-center mx-5'>
      {imageError ? (
        <div className="flex flex-col rounded-t-lg font-chackra items-center justify-center w-full h-full bg-gray-700 text-white p-4">
          Image not available
        </div>
      ) : (
        <img 
          src={movie.imageUrl} 
          alt={movie.title} 
          className="w-full h-full object-cover rounded-t-lg"
          onError={() => setImageError(true)} 
          loading="lazy"
        />
      )}
      <div className="bg-gray-800 text-white p-8 rounded-b-lg border-t-2 border-red-500 mb-5">
        <h2 className="font-chackra text-2xl font-bold">{movie.title}</h2>
      </div>
    </div>
  );
};

export default MovieCard;
