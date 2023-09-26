import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Login from '../Login';
import { MemoryRouter } from 'react-router-dom';

describe('Login Component', () => {
  test('renders login form', () => {
    // render(<Login />);
    render(
      <MemoryRouter initialEntries={['/']}> {/* Set initialEntries as needed */}
        <Login />
      </MemoryRouter>
    );
    
    // Check if the form elements are rendered
    expect(screen.getByTestId('email')).toBeInTheDocument();
    expect(screen.getByTestId('password')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Entrar' })).toBeInTheDocument();
  });

  test('submits form with valid data', () => {
    jest.spyOn(console, 'log').mockImplementation(() => {});
    // render(<Login />);
    render(
      <MemoryRouter initialEntries={['/']}> {/* Set initialEntries as needed */}
        <Login />
      </MemoryRouter>
    );
    
    // Simulate user input
    const emailInput = screen.getByTestId('email');
    const passwordInput = screen.getByTestId('password');
    
    fireEvent.input(emailInput, {
      target: { value: 'test@example.com' },
    });
    fireEvent.input(passwordInput, {
      target: { value: 'testpassword' },
    });

    // Submit the form
    fireEvent.click(screen.getByRole('button', { name: 'Entrar' }));

    // Check if form submission data is logged
    expect(console.log).toHaveBeenCalledWith({
      email: 'test@example.com',
      password: 'testpassword',
    });
  });
});
