'use client';

import { useState } from 'react';
import Modal from './Modal';
import ContactForm from './ContactForm';

import styled from "styled-components";

const CTA = ({ inscription, photographer }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <CTAButton onClick={() => setIsModalOpen(true)}>
                {inscription}
            </CTAButton>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} closeButtonColor="#ffffff" titleId="contact-title">
                <ContactForm photographerName={photographer.name} onClose={() => setIsModalOpen(false)} />
            </Modal>
        </>
    );
};

export default CTA;

const CTAButton = styled.button`
    background-color: #901c1c;
    width: 170px;
    height: 69px;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    font-weight: 700;
    &:hover {
        background-color: #D3573C;
        color: black;
    }
    &:focus-visible {
        outline: 3px solid #D3573C;
        outline-offset: 2px;
    }
`;
