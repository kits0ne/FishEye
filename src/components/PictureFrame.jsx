'use client';

import styled from 'styled-components';
import Image from 'next/image';
import Modal from '@/components/Modal'
import { useState, useEffect, useCallback } from 'react';

import LikeButton from '@/components/LikeButton'
import { toggleLike } from "@/app/lib/actions";

const PictureFrame = ({ media, allMedias, index, onLikeChange }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentMediaIndex, setCurrentMediaIndex] = useState(index);

    const currentMedia = allMedias[currentMediaIndex];

    const handlePrevious = useCallback(() => {
        setCurrentMediaIndex((prev) => (prev === 0 ? allMedias.length - 1 : prev - 1));
    }, [allMedias.length]);

    const handleNext = useCallback(() => {
        setCurrentMediaIndex((prev) => (prev === allMedias.length - 1 ? 0 : prev + 1));
    }, [allMedias.length]);

    useEffect(() => {
        if (!isModalOpen) return;

        const handleKeyDown = (e) => {
            if (e.key === 'ArrowLeft') {
                handlePrevious();
            } else if (e.key === 'ArrowRight') {
                handleNext();
            }
        }

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        };
    }, [isModalOpen, handlePrevious, handleNext]);

    return (
        <PictureFrameContainer>
            <PhotographyFrame 
                onClick={() =>{ setCurrentMediaIndex(index); setIsModalOpen(true);}}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        setCurrentMediaIndex(index);
                        setIsModalOpen(true);
                    }
                }}
                aria-label={`Agrandir ${media.title}`}
            >
                {media.video ? (
                    <video 
                        src={`/${media.video}`} 
                        width={300} 
                        height={200} 
                        aria-hidden="true"
                    />
                ) : (
                    <Image 
                        src={`/${media.image}`}
                        alt="" 
                        width={300} 
                        height={200} 
                    />  
                )}
            </PhotographyFrame>
            <PictureData>
                <PictureName>
                    {media.title}
                </PictureName>
                <LikeButton likes={media.likes} entityId={media.id} onToggle={toggleLike} label="média" onLikeChange={onLikeChange}/>
            </PictureData>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} titleId="media-viewer-title" closeLabel="Fermer la visionneuse média">
                <ModalWrapper>
                    <VisuallyHiddenTitle id="media-viewer-title">
                        Visionneuse média : {currentMedia.title}
                    </VisuallyHiddenTitle>
                    <PreviousButton onClick={handlePrevious} aria-label="Image précédente">
                        &lt;
                    </PreviousButton>
                    {currentMedia.video ? (
                        <MediaColumn>
                            <ImageWrapper>
                                <video 
                                    src={`/${currentMedia.video}`} 
                                    controls
                                />
                            </ImageWrapper>
                            <ModalTitle>{currentMedia.title}</ModalTitle>
                        </MediaColumn>
                    ) : (
                        <MediaColumn>
                            <ImageWrapper>
                                <Image 
                                    src={`/${currentMedia.image}`}
                                    alt=""
                                    fill
                                    sizes="(max-width: 900px) 70vw, 900px"
                                />  
                            </ImageWrapper>
                            <ModalTitle>{currentMedia.title}</ModalTitle>
                        </MediaColumn>
                    )}
                    <NextButton onClick={handleNext} aria-label="Image suivante">
                        &gt;
                    </NextButton>
                </ModalWrapper>
            </Modal>
        </PictureFrameContainer>
    );
};

export default PictureFrame;

const PictureFrameContainer = styled.div`
    width : 350px;
    height: 350px;
    display: flex;
    flex-direction: column;
`;

const PhotographyFrame = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 5px;
    overflow: hidden;
    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    & video {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    &:focus-visible {
        outline: 3px solid #901C1C;
        outline-offset: 2px;
    }
`;

const PictureData = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const PictureName = styled.p`
    font-size: 24px;
`;

const ModalWrapper = styled.div`
    background: white;
    border-radius: 8px;
    padding: 2rem;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
`;

const PreviousButton = styled.button`
    background: none;
    border: none;
    font-size: 5rem;
    color: black;
    cursor: pointer;
    color: #901C1C;
    z-index: 2;
    &:focus-visible {
        outline: 3px solid #901C1C;
        outline-offset: 2px;
        border-radius: 4px;
    }
`;

const NextButton = styled.button`
    background: none;
    border: none;
    font-size: 5rem;
    color: black;
    cursor: pointer;
    color: #901C1C;
    z-index: 2;
    &:focus-visible {
        outline: 3px solid #901C1C;
        outline-offset: 2px;
        border-radius: 4px;
    }
`;

const MediaColumn = styled.div`
    display: flex;
    flex-direction: column;
`;

const ImageWrapper = styled.div`
    position: relative;
    width: min(70vw, 900px);
    height: min(85vh, 800px);
    overflow: hidden;
    border-radius: 5px;
    & img {
        border-radius: 5px;
        object-fit: cover;
    }
        & video {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: contain;
        border-radius: 5px;
    }
`;

const ModalTitle = styled.p`
    padding-top: 1rem;
    font-size: 18px;
    color: #901C1C;
    z-index: 2;
`;

const VisuallyHiddenTitle = styled.h2`
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
`;