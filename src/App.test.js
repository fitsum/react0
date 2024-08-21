import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header with text content "🌦️ Ornot "', () => {
  render(<App />);
  const headerElement = screen.getByText(/Ornot/i);
  expect(headerElement).toBeInTheDocument();
});
