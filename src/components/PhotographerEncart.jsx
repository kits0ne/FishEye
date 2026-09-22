// components/PhotographerEncart.jsx
'use client';

import styled from 'styled-components';
import Image from "next/image";

const PhotographerEncart = ({ photographer, allMedias }) => {
    const totalLikes = allMedias.reduce((sum, media) => sum + media.likes, 0);

    return (
        <EncartFooter>
            <TotalLikes aria-live="polite">
                {totalLikes} 
                <Image
                    src={"/heart-solid-full-black.svg"}
                    alt=""
                    width={24}
                    height={24}
                />
            </TotalLikes>
            <Price>{photographer.price}€ / jour</Price>
        </EncartFooter>
    );
};

export default PhotographerEncart;

const EncartFooter = styled.footer`
    position: fixed;
    bottom: 0;
    right: 2rem;
    z-index: 10;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.5rem;
    width: 23vw;
    padding: 1rem 2rem;
    background-color: #DB8876;
    border-radius: 5px 5px 0 0;
    box-sizing: border-box;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
`;

const TotalLikes = styled.p`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: black;
    font-weight: 700;
    margin: 0;
`;

const Price = styled.p`
    color: black;
    font-weight: 700;
    margin: 0;
`;