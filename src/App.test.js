import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';

jest.mock('startsys-react-speech-recognition', () => ({
  __esModule: true,
  default: jest.fn(({ children }) => <div>{children}</div>),
}));

describe('App', () => {
  test('renders App component', () => {
    render(<App />);
    expect(screen.getByText('Speech Recognition App')).toBeInTheDocument();
    expect(screen.getByText('Please click on the mic to begin the speech recognition demo.')).toBeInTheDocument();
  });
  
 
});
