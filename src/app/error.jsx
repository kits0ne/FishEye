'use client';

import { useEffect } from 'react';
import styled from 'styled-components';

export default function Error({ error, reset }) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <ErrorWrapper role="alert">
            <h1>Une erreur est survenue</h1>
            <p>Impossible de charger la liste des photographes. Veuillez réessayer.</p>
            <RetryButton onClick={() => reset()}>Réessayer</RetryButton>
        </ErrorWrapper>
    );
}

const ErrorWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 4rem 2rem;
    text-align: center;
    color: #901C1C;
`;

const RetryButton = styled.button`
    background-color: #901C1C;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 0.75rem 2rem;
    font-weight: 700;
    cursor: pointer;
    &:hover {
        background-color: #D3573C;
    }
    &:focus-visible {
        outline: 3px solid #D3573C;
        outline-offset: 2px;
    }
`;