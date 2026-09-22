// components/ContactForm.jsx
'use client';

import styled from 'styled-components';
import { useState } from 'react';

const ContactForm = ({ photographerName, onClose }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        onClose();
    };

    return (
        <FormWrapper onSubmit={handleSubmit} aria-labelledby="contact-title">
            <Title id="contact-title">Contactez-moi<br />{photographerName}</Title>

            <Label htmlFor="firstName">Prénom</Label>
            <Input 
                id="firstName" 
                name="firstName" 
                type="text" 
                required
                aria-required="true"
                value={formData.firstName}
                onChange={handleChange}
            />

            <Label htmlFor="lastName">Nom</Label>
            <Input 
                id="lastName" 
                name="lastName" 
                type="text" 
                required
                aria-required="true"
                value={formData.lastName}
                onChange={handleChange}
            />

            <Label htmlFor="email">Email</Label>
            <Input 
                id="email" 
                name="email" 
                type="email" 
                required
                aria-required="true"
                value={formData.email}
                onChange={handleChange}
            />

            <Label htmlFor="message">Votre message</Label>
            <TextArea 
                id="message" 
                name="message" 
                required
                aria-required="true"
                value={formData.message}
                onChange={handleChange}
            />

            <SubmitButton type="submit">Envoyer</SubmitButton>
        </FormWrapper>
    );
};

export default ContactForm;

const FormWrapper = styled.form`
    background-color: #DB8876;
    padding: 2rem;
    width: 670px;
    height: 900px;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    color: black;
`;

const Title = styled.h2`
    font-size: 4vw;
    margin-bottom: 1.5rem;
`;

const Label = styled.label`
    font-size: 1.5rem;
    color: #312E2E;
`;

const Input = styled.input`
    height: 40px;
    border: none;
    border-radius: 4px;
    padding: 0 0.5rem;
    background-color: white;
    &:focus-visible {
        outline: 3px solid #901C1C;
        outline-offset: 2px;
    }
`;

const TextArea = styled.textarea`
    height: 100px;
    border: none;
    border-radius: 4px;
    padding: 0.5rem;
    resize: vertical;
    background-color: white;
    &:focus-visible {
        outline: 3px solid #901C1C;
        outline-offset: 2px;
    }
`;

const SubmitButton = styled.button`
    background-color: #901C1C;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 0.75rem 2rem;
    margin-top: 1.5rem;
    width: fit-content;
    font-weight: 700;
    cursor: pointer;
    &:hover {
        background-color: #D3573C;
        color: black;
    }
    &:focus-visible {
        outline: 3px solid #312E2E;
        outline-offset: 2px;
    }
`;