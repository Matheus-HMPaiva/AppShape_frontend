import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../Home';
import { MemoryRouter } from 'react-router-dom';

describe('Home Component', () => {
  test('renders home page', () => {
    render(
        <MemoryRouter initialEntries={['/home']}> {/* Set initialEntries as needed */}
          <Home />
        </MemoryRouter>
      );
    
    // Check if the main heading is rendered
    const mainHeading = screen.getByText(/AppShape/i);
    expect(mainHeading).toBeInTheDocument();

    // Check if the "Calcular IMC" button is rendered
    const calculateButton = screen.getByText(/Calcular IMC/i);
    expect(calculateButton).toBeInTheDocument();

    // Check if the "Treino em casa" link is rendered
    const homeWorkoutLink = screen.getByText(/Treino em casa/i);
    expect(homeWorkoutLink).toBeInTheDocument();

    // Check if the "Treino na academia" link is rendered
    const gymWorkoutLink = screen.getByText(/Treino na academia/i);
    expect(gymWorkoutLink).toBeInTheDocument();
  });
});
