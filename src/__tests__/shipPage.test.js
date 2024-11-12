import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import ShipPage from '../pages/shipPage';
import '@testing-library/jest-dom';


const mockStore = configureStore([]);

describe('ShipPage Component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      ships: { ships: [{ id: '1', name: 'X-Wing', pilots: [], films: [] }] },
      pilots: { pilots: [] },
      movies: { movies: [] },
    });
  });

  test('displays "Ship not found" when ship is undefined', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/ships/2']}>
          <Routes>
            <Route path="/ships/:id" element={<ShipPage />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText('Ship not found.')).toBeInTheDocument();
  });

  test('renders ship details when ship is defined', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/ships/1']}>
          <Routes>
            <Route path="/ships/:id" element={<ShipPage />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText('X-Wing')).toBeInTheDocument();
    expect(screen.getByText(/Model:/)).toBeInTheDocument();
  });

  test('displays "No pilots available" when no pilots are present', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/ships/1']}>
          <Routes>
            <Route path="/ships/:id" element={<ShipPage />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText('No pilots available for this ship.')).toBeInTheDocument();
  });

  test('displays "No movies available" when no movies are present', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/ships/1']}>
          <Routes>
            <Route path="/ships/:id" element={<ShipPage />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText('No movies available for this ship.')).toBeInTheDocument();
  });
});
