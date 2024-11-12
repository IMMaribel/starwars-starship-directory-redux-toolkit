import React from 'react';
import { render, screen } from '@testing-library/react';
import MovieCard from '../components/MovieCard';
import '@testing-library/jest-dom'; 


describe('MovieCard Component', () => {
  const movie = {
    title: 'A New Hope',
    url: 'https://swapi.dev/api/films/1/',
    imageUrl: 'https://starwars-visualguide.com/assets/img/films/1.jpg',
  };

  test('renders movie title correctly', () => {
    render(<MovieCard movie={movie} />);
    expect(screen.getByText('A New Hope')).toBeInTheDocument();
  });

  test('renders movie image correctly', () => {
    render(<MovieCard movie={movie} />);
    const image = screen.getByAltText('A New Hope');
    expect(image).toHaveAttribute('src', movie.imageUrl);
  });
  
});
