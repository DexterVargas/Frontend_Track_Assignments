import React from "react";
import '@testing-library/jest-dom';
import { render, screen} from '@testing-library/react';

import ContactForm from '../components/ContactForm';
import userEvent from "@testing-library/user-event";

test('it should have the correct title', () => {
    render(<ContactForm />);
    const text = screen.getByText('Contact Registration Form');
    expect(text).toBeInTheDocument();
});

test('it should have a button type submit.', () => {
    render(<ContactForm />);
    const elem = screen.getByRole('button', {type: /submit/i})
    expect(elem).toBeInTheDocument();
});

test('it should have input fields with a place holder "name"', () => {
    render(<ContactForm />);
    const elem = screen.getByPlaceholderText('name');
    expect(elem).toBeInTheDocument();
});

test('it should have input fields name with attribute of required', () => {
    render(<ContactForm />);
    const btn = screen.getByText('Add');
    userEvent.click(btn);
    const userListElem = screen.getByText('x');
    expect(userListElem).toBeVisible();
});