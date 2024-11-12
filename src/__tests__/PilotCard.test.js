import React from 'react';
import { render, screen } from '@testing-library/react';
import PilotCard from '../components/PilotCard';
import '@testing-library/jest-dom'; 

describe('PilotCard Component', () => {
  const pilot = {
    name: 'Luke Skywalker',
    url: 'https://swapi.dev/api/people/1/',
  };

  test('renders pilot name correctly', () => {
    render(<PilotCard pilot={pilot} />);
    expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();
  });

  
});
