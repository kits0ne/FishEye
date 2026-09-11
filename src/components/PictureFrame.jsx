'use client';

import styled from 'styled-components';
import Image from 'next/image';
import ImgModal from '@/components/ImgModal'
import { useState } from 'react';

import LikeButton from '@/components/LikeButton'

const PictureFrame = ({ media, allMedias, index }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentMediaIndex, setCurrentMediaIndex] = useState(index);

    const currentMedia = allMedias[currentMediaIndex];

    const handlePrevious = () => {
        setCurrentMediaIndex((prev) => (prev === 0 ? allMedias.length - 1 : prev - 1));
    }

    const handleNext = () => {
        setCurrentMediaIndex((prev) => (prev === allMedias.length - 1 ? 0 : prev + 1));
    }

    return (
        <PictureFrameContainer>
            <PhotographyFrame onClick={() =>{ setCurrentMediaIndex(index); setIsModalOpen(true);}}>
                {media.video ? (
                    <video 
                        src={`/${media.video}`} 
                        width={300} 
                        height={200} 
                        controls
                        autoPlay
                        muted
                    />
                ) : (
                    <Image 
                        src={`/${media.image}`}
                        alt={media.title} 
                        width={300} 
                        height={200} 
                    />  
                )}
            </PhotographyFrame>
            <PictureData>
                <PictureName>
                    {media.title}
                </PictureName>
                <LikeButton mediaLikes={media.likes} mediaId={media.id} />
            </PictureData>
            <ImgModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <PreviousButton onClick={handlePrevious}>&lt;</PreviousButton> 
                {currentMedia.video ? (
                    <MediaColumn>
                        <ImageWrapper>
                            <video 
                                src={`/${currentMedia.video}`} 
                                fill
                                controls
                            />
                            <ModalTitle>{currentMedia.title}</ModalTitle>
                        </ImageWrapper>
                    </MediaColumn>
                ) : (
                    <MediaColumn>
                        <ImageWrapper>
                            <Image 
                                src={`/${currentMedia.image}`}
                                alt={currentMedia.title} 
                                fill
                            />  
                        </ImageWrapper>
                        <ModalTitle>{currentMedia.title}</ModalTitle>
                    </MediaColumn>
                )}
                <NextButton onClick={handleNext}>&gt;</NextButton>
            </ImgModal>
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
`;

const PictureData = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const PictureName = styled.p`
    font-size: 24px;
`;

const PreviousButton = styled.button`
    background: none;
    border: none;
    font-size: 5rem;
    color: black;
    cursor: pointer;
    color: #901C1C;
    z-index: 2;
`;

const NextButton = styled.button`
    background: none;
    border: none;
    font-size: 5rem;
    color: black;
    cursor: pointer;
    color: #901C1C;
    z-index: 2;
`;

const MediaColumn = styled.div`
    display: flex;
    flex-direction: column;
`;

const ImageWrapper = styled.div`
    position: relative;
    width: 70vw;
    height: 61vw;
    overflow: hidden;
    border-radius: 5px;
    & img {
        border-radius: 5px;
        object-fit: cover;
    }
`;

const ModalTitle = styled.p`
    padding-top: 1rem;
    font-size: 18px;
    color: #901C1C;
    z-index: 2;
`;