// components/DropDown.jsx
"use client";

import { useState, useRef } from "react";
import styled from "styled-components";
import Image from "next/image";

const DropDown = ({ options = ["Popularité", "Date", "Titre"], onSortChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(options[0]);
    const [activeIndex, setActiveIndex] = useState(0);
    const headerRef = useRef(null);

    const visibleOptions = options.filter((option) => option !== selected);

    const handleSelect = (option) => {
        setSelected(option);
        setIsOpen(false);
        onSortChange?.(option);
        headerRef.current?.focus();
    };

    const openList = () => {
        setIsOpen(true);
        setActiveIndex(0);
    };

    const handleTriggerKeyDown = (e) => {
        if (!isOpen) {
            if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openList();
            }
            return;
        }

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            setActiveIndex((prev) => (prev + 1) % visibleOptions.length);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setActiveIndex((prev) => (prev - 1 + visibleOptions.length) % visibleOptions.length);
        } else if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleSelect(visibleOptions[activeIndex]);
        } else if (e.key === 'Escape') {
            e.preventDefault();
            setIsOpen(false);
        }
    };

    const activeOptionId = isOpen && visibleOptions.length > 0
        ? `sort-option-${visibleOptions[activeIndex]}`
        : undefined;

    return (
        <DropDownWrapper>
            <DropDownHeader 
                as="button" 
                type="button"
                ref={headerRef}
                onClick={() => (isOpen ? setIsOpen(false) : openList())}
                onKeyDown={handleTriggerKeyDown}
                $isOpen={isOpen} 
                aria-haspopup="listbox"
                aria-expanded={isOpen}
                aria-labelledby="sort-label sort-current-value"
                aria-activedescendant={activeOptionId}
            >
                <span id="sort-current-value">
                    {selected.at(0).toUpperCase() + selected.slice(1)}
                </span>
                <Arrow $isOpen={isOpen}>
                    <Image src="/DropDownFleche.png" alt="" width={16} height={16} />
                </Arrow>
            </DropDownHeader>

            {isOpen && (
                <OptionsList role="listbox" aria-labelledby="sort-label">
                    {visibleOptions.map((option, i) => (
                        <Option 
                            key={option}
                            id={`sort-option-${option}`}
                            onClick={() => handleSelect(option)}
                            onMouseEnter={() => setActiveIndex(i)}
                            role="option"
                            aria-selected={i === activeIndex}
                            $active={i === activeIndex}
                        >
                            {option}
                        </Option>
                    ))}
                </OptionsList>
            )}
        </DropDownWrapper>
    );
};

export default DropDown;


const DropDownWrapper = styled.div`
position: relative;
width: 170px;
height: 69px;
font-weight: 700;
padding-top: 0.8rem;
`;

const DropDownHeader = styled.div`
background-color: #901c1c;
color: white;
padding: 1rem;
border-radius: ${({ $isOpen }) => ($isOpen ? "5px 5px 0 0" : "5px")};
display: flex;
justify-content: space-between;
align-items: center;
cursor: pointer;
width: 100%;
box-sizing: border-box;
&:focus-visible {
    outline: 3px solid #D3573C;
    outline-offset: 2px;
}
`;

const Arrow = styled.span`
transform: rotate(${({ $isOpen }) => ($isOpen ? "180deg" : "0deg")});
transition: transform 0.2s ease;
`;

const OptionsList = styled.div`
position: absolute;
top: 100%;
left: 0;
width: 100%;
background-color: #901c1c;
border-radius: 0 0 5px 5px;
overflow: hidden;
`;

const Option = styled.div`
color: white;
margin: 0 1rem;
padding: 0.8rem 0;
cursor: pointer;
border-top: 1px solid #ffffff;
`;