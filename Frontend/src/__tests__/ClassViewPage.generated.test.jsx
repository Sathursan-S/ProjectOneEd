import React from 'react';
import { render, screen } from '@testing-library/react';
import image from '../../Images/Card.png'; 
import ClassViewPage from '../Pages/ClassViewPage/ClassViewPage';

describe('ClassViewPage', () => {
  test('renders class information and components correctly', () => {
    render(<ClassViewPage image={image}/>);

    // Check for the presence of the ClassCard component with specific props
    expect(screen.getByText('Combined Maths')).toBeInTheDocument();
    expect(screen.getByText('By Mr. R.Himosh (Bsc Engineering(Reading))')).toBeInTheDocument();
    expect(screen.getByText('Tamil')).toBeInTheDocument();
    expect(screen.getByText('LKR 1500')).toBeInTheDocument();

    // Check for class description text
    expect(screen.getByText(/Welcome to our comprehensive online course/)).toBeInTheDocument();

    // Check for syllabus content
    expect(screen.getByText(/Foundational Concepts:/)).toBeInTheDocument();
    expect(screen.getByText(/Practical Skills Development:/)).toBeInTheDocument();

    // Check if the ClassSchedule components render correctly
    expect(screen.getAllByText('Monday').length).toBe(3); // Expect 'Monday' to be found three times for the schedules

    // Check for buttons or interactive elements
    expect(screen.getByRole('button', { name: /Report issue/ })).toBeInTheDocument();
  });
});
