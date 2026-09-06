import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders personal portfolio content', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /hello, i’m linh nguyen/i })).toBeInTheDocument();
  expect(screen.getByText(/computer science student • senior year/i)).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /^linkedin$/i })).toBeInTheDocument();
});
