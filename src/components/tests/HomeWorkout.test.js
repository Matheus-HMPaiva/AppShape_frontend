import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import HomeWorkout from '../HomeWorkout';
import { MemoryRouter } from 'react-router-dom';

test('renders HomeWorkout component', () => {
  render(
    <MemoryRouter initialEntries={['/workout/home']}> {/* Set initialEntries as needed */}
      <HomeWorkout />
    </MemoryRouter>
  );
  
  // Verifique se o título do aplicativo está presente.
  const appTitle = screen.getByText('AppShape', { exact: false });
  expect(appTitle).toBeInTheDocument();

  // Verifique se os links estão presentes e funcionam.
  const links = screen.getAllByRole('link');
  expect(links).toHaveLength(8);

  // Verifique se as imagens estão presentes.
  const images = screen.getAllByRole('img');
  expect(images).toHaveLength(8);

  // Verifique se os títulos das seções estão presentes.
  const sectionHeadings = screen.getAllByRole('heading', { level: 2 });
  expect(sectionHeadings).toHaveLength(8);

  // Simule um clique em um dos links e verifique se ele funciona.
  fireEvent.click(links[0]); // Substitua pelo índice do link que deseja testar
});
