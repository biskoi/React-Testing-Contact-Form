import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";

test('does it render?', () => {

    render(<ContactForm/>);

});

test('Can submit?', async () => {

    const {getByTestId, getByLabelText, findByText} = render(<ContactForm/>);
    const firstInput = getByLabelText(/first name*/i);
    const lastInput = getByLabelText(/last name*/i);
    const emailInput = getByLabelText(/email*/i);
    const messageInput = getByLabelText(/Message/i);
    const submit = getByTestId(/submitTestId/i);

    fireEvent.change(firstInput, {
        target: {name: 'firstName', value: 'biskoi'}
    });

    fireEvent.change(lastInput, {
        target: {name: 'lastName', value: 'biskoiiiii'}
    });

    fireEvent.change(emailInput, {
        target: {name: 'email', value: 'biskoi@daydream.cafe'}
    });
    
    fireEvent.change(messageInput, {
        target: {name:'message', value: 'please god i hope this test works'}
    });

    fireEvent.click(submit)

    await findByText(/biskoi/i);
    await findByText(/biskoiiiii/i);
    await findByText(/biskoi@daydream.cafe/i);
    await findByText(/please god i hope this test works/i);

});

test('verification works?', async () => {

    const {getByTestId, findByText} = render(<ContactForm/>)
    const submit = getByTestId(/submitTestId/i);

    fireEvent.click(submit)

    await findByText('First name is required!');
    await findByText('Last name is required!');
    await findByText('Email is required!');

})

