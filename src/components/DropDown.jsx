"use client";

import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";

const options = ["Popularité", "Date", "Titre"];

const DropDown = () => {
const [isOpen, setIsOpen] = useState(false);
const [selected, setSelected] = useState(options[0]);

const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
};
return (
    <DropDownWrapper>
    <DropDownHeader onClick={() => setIsOpen(!isOpen)} $isOpen={isOpen}>
        {selected.at(0).toUpperCase() + selected.slice(1)}
        <Arrow $isOpen={isOpen}>
            <Image
                src="/DropDownFleche.png"
                alt="Arrow"
                width={16}
                height={16}
            />
        </Arrow>
    </DropDownHeader>

    {isOpen && (
        <OptionsList>
        {options
            .filter((option) => option !== selected)
            .map((option) => (
                <Option key={option} onClick={() => handleSelect(option)}>
                    {option}
                </Option>
            ))
        }
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
`;

const Arrow = styled.span`
transform: rotate(${({ $isOpen }) => ($isOpen ? "180deg" : "0deg")});
transition: transform 0.2s ease;
`;

const OptionsList = styled.div`
position: absolute;
top: -1;
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