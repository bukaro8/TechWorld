import { render, screen } from '@testing-library/react';
import App from './App';

// Here we can use this to make Tests :)
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
