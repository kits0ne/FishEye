// components/Modal.jsx
'use client';

import styled from 'styled-components';

const ImgModal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <Overlay onClick={onClose}>
            <ModalContent onClick={(e) => e.stopPropagation()}>  
                <CloseButton onClick={onClose}>×</CloseButton>
                {children}    
            </ModalContent>
            
        </Overlay>
    );
};

export default ImgModal;

const Overlay = styled.div`
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
`;

const ModalContent = styled.div`
    background: white;
    border-radius: 8px;
    padding: 2rem;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
`;

const CloseButton = styled.button`
    position: absolute;
    top: 0;
    right: 2rem;
    background: none;
    border: none;
    font-size: 5rem;
    cursor: pointer;
    color: #901C1C;
`;