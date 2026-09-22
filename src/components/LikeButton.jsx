"use client";

import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";

const LikeButton = ({ likes, entityId, onToggle, label = "média", onLikeChange }) => {
    const [isLiked, setIsLiked] = useState(false);
    const [count, setCount] = useState(likes);

    const handleLike = async () => {
        const newCount = count + (isLiked ? -1 : 1);
        setIsLiked(!isLiked);
        setCount(newCount);
        onLikeChange?.(entityId, newCount);
        await onToggle(entityId, newCount);
    };

    return (
        <LikeSection>
            <LikeCount>
                {count}
            </LikeCount>
            <LikeButtonStyled 
                onClick={handleLike}
                aria-pressed={isLiked}
                aria-label={isLiked ? `Retirer le like sur ce ${label}` : `Ajouter un like sur ce ${label}`}
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