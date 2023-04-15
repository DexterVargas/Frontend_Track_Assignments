import React from "react";
import '@testing-library/jest-dom';
import { render, screen} from '@testing-library/react';

import TaskLogger from '../components/TaskLogger';
// import userEvent from "@testing-library/user-event";

test('it should have the correct title "Tasks Logger"', () => {
    render(<TaskLogger />);
    const text = screen.getByText('Tasks Logger');
    expect(text).toBeInTheDocument();
});

test('it should have a button type submit (add button).', () => {
    render(<TaskLogger />);
    const elem = screen.getByRole('button', {type: /submit/i})
    expect(elem).toBeInTheDocument();
});

test('it should have input fields with a place holder "Task Title:"', () => {
    render(<TaskLogger />);
    const elem = screen.getByPlaceholderText('title');
    expect(elem).toBeInTheDocument();
});

test('it should have radio button field with the name "Front-End"', () => {
    render(<TaskLogger />);
    const radio = screen.getByLabelText('Front-End');
    expect(radio).toBeInTheDocument();
});

test('it should have radio button field with the name "Back-End"', () => {
    render(<TaskLogger />);
    const radio = screen.getByLabelText('Back-End');
    expect(radio).toBeInTheDocument();
});