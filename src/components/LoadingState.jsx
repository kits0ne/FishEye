'use client';

import styled from 'styled-components';

const LoadingState = ({ label = 'Chargement en cours…' }) => {
    return (
        <LoadingWrapper role="status" aria-live="polite">
            <Spinner aria-hidden="true" />
            <p>{label}</p>
        </LoadingWrapper>
    );
};

export default LoadingState;

const LoadingWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 4rem 2rem;
    color: #901C1C;
`;

const Spinner = styled.div`
    width: 40px;
    height: 40px;
    border: 4px solid #eee;
    border-top-color: #901C1C;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;

    @keyframes spin {
        to { transform: rotate(360deg); }
    }
`;