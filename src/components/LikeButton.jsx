"use client";

import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { toggleLike } from "@/app/lib/actions";

const LikeButton = ({mediaLikes, mediaId}) => {
    const [isLiked, setIsLiked] = useState(false);
    const [compteur, setCompteur] = useState(mediaLikes);

    const handleLike = async() => {
        const newCount = compteur + (isLiked ? -1 : 1);
        setIsLiked(!isLiked);
        setCompteur(prevCount => prevCount + (isLiked ? -1 : 1));
        await toggleLike(mediaId, newCount);
    };

    return (
        <LikeSection>
            <LikeCount>
                {compteur}
            </LikeCount>
            <LikeButtonStyled 
                onClick={handleLike}
                aria-pressed={isLiked}
                aria-label={isLiked ? "Retirer le like" : "Ajouter un like"}
            >
                <Image
                    src={isLiked ? "/heart-solid-full.svg" : "/heart-regular-full.svg"}
                    alt=""
                    width={24}
                    height={24}
                />
            </LikeButtonStyled>
        </LikeSection>
    );
};

export default LikeButton;

const LikeSection = styled.div`
display: flex;
justify-content: space-between;
width: 65px;
`;

const LikeCount = styled.span`
font-weight: 500;
font-size: 24px;
width: 24px;
text-align: right;
display: inline-block;
`;

const LikeButtonStyled = styled.button`
background: none;
border: none;
cursor: pointer;
&:focus-visible {
    outline: 3px solid #901C1C;
    outline-offset: 2px;
    border-radius: 50%;
}
`;