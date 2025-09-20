import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Hello World message', () => {
  render(<App />);
  const helloElement = screen.getByText(/Hello, World!/i);
  expect(helloElement).toBeInTheDocument();
});

test('renders Pokemon header component', () => {
  render(<App />);
  const pokemonHeader = screen.getByText(/Welcome to Pokemon World!/i);
  expect(pokemonHeader).toBeInTheDocument();
});

test('renders Pokemon footer component', () => {
  render(<App />);
  const footerText = screen.getByText(/Coded by Martin/i);
  expect(footerText).toBeInTheDocument();
});
