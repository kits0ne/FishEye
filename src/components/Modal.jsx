// components/Modal.jsx
'use client';

import styled from 'styled-components';
import { useEffect, useRef } from 'react';

const Modal = ({ isOpen, onClose, children, closeButtonColor = '#901C1C', titleId, closeLabel = 'Fermer' }) => {
    const modalContentRef = useRef(null);
    const previouslyFocusedElement = useRef(null);
    
    // Echap pour fermer
    useEffect(() => {
        if (!isOpen) return;

        const handleEsc = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        window.addEventListener('keydown', handleEsc);

        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, [isOpen, onClose]);

    // Focus à l'ouverture + restauration à la fermeture
    useEffect(() => {
        if (isOpen) {
            previouslyFocusedElement.current = document.activeElement;

            const focusableSelector = 
                'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';
            const firstFocusable = modalContentRef.current?.querySelector(focusableSelector);
            firstFocusable?.focus();
        } else {
            previouslyFocusedElement.current?.focus();
        }
    }, [isOpen]);

    // Piège du focus (Tab / Shift+Tab restent dans la modale)
    useEffect(() => {
        if (!isOpen) return;

        const handleTabKey = (e) => {
            if (e.key !== 'Tab') return;

            const focusableSelector = 
                'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';
            const focusableElements = modalContentRef.current?.querySelectorAll(focusableSelector);
            if (!focusableElements || focusableElements.length === 0) return;

            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];

            if (e.shiftKey && document.activeElement === firstElement) {
                e.preventDefault();
                lastElement.focus();
            } else if (!e.shiftKey && document.activeElement === lastElement) {
                e.preventDefault();
                firstElement.focus();
            }
        };

        window.addEventListener('keydown', handleTabKey);

        return () => {
            window.removeEventListener('keydown', handleTabKey);
        };
    }, [isOpen]);

    if (!isOpen) return null;
    
    return (
        <Overlay onClick={onClose}>
            <ModalContent 
                ref={modalContentRef}
                onClick={(e) => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-labelledby={titleId}
            >  
                <CloseButton onClick={onClose} $closeButtonColor={closeButtonColor} aria-label={closeLabel}>
                    ×
                </CloseButton>
                {children}    
            </ModalContent>
        </Overlay>
    );
};

export default Modal;

const Overlay = styled.div`
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
`;

const ModalContent = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    max-width: 90vw;
    max-height: 100vh;
    overflow-y: auto;
`;

const CloseButton = styled.button`
    position: absolute;
    top: 0;
    right: 2rem;
    background: none;
    border: none;
    font-size: 5rem;
    cursor: pointer;
    color: ${(props) => props.$closeButtonColor};
    z-index: 1;

    &:focus-visible {
        outline: 3px solid #FFEA94;
        outline-offset: 2px;
        border-radius: 4px;
    }
`;