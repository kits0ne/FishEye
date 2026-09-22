"use client";

import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";

const LikeButton = ({ likes, entityId, onToggle, label = "média", onLikeChange }) => {
    const [isLiked, setIsLiked] = useState(false);
    const [count, setCount] = useState(likes);
    const [error, setError] = useState(null);

    const handleLike = async () => {
        const previousCount = count;
        const previousIsLiked = isLiked;
        const newCount = count + (isLiked ? -1 : 1);

        // Mise à jour optimiste
        setIsLiked(!isLiked);
        setCount(newCount);
        setError(null);
        onLikeChange?.(entityId, newCount);

        const result = await onToggle(entityId, newCount);

        if (!result?.success) {
            // Annulation en cas d'échec
            setIsLiked(previousIsLiked);
            setCount(previousCount);
            onLikeChange?.(entityId, previousCount);
            setError("Le like n'a pas pu être enregistré. Réessayez.");
        }
    };

    return (
        <LikeButtonContainer>
            <LikeSection>
                <LikeCount aria-hidden="true">
                    {count}
                </LikeCount>
                <LikeButtonStyled 
                    onClick={handleLike}
                    aria-pressed={isLiked}
                    aria-label={`${count} likes. ${isLiked ? `Retirer le like sur ce ${label}` : `Ajouter un like sur ce ${label}`}`}
                >
                    <Image
                        src={isLiked ? "/heart-solid-full.svg" : "/heart-regular-full.svg"}
                        alt=""
                        width={24}
                        height={24}
                    />
                </LikeButtonStyled>
            </LikeSection>
            {error && (
                <ErrorMessage role="alert">{error}</ErrorMessage>
            )}
        </LikeButtonContainer>
    );
};

export default LikeButton;

const LikeButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

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

const ErrorMessage = styled.p`
    font-size: 0.75rem;
    color: #901C1C;
    margin: 0.25rem 0 0 0;
    text-align: right;
`;