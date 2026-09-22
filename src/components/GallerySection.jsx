// components/GallerySection.jsx
'use client';

import { useState, useMemo } from 'react';
import styled from 'styled-components';
import DropDown from '@/components/DropDown';
import PictureFrame from '@/components/PictureFrame';

const GallerySection = ({ medias, onLikeChange }) => {
    const [sortBy, setSortBy] = useState('Popularité');

    const sortedMedias = useMemo(() => {
        const copy = [...medias];

        switch (sortBy) {
            case 'Popularité':
                return copy.sort((a, b) => b.likes - a.likes);
            case 'Date':
                return copy.sort((a, b) => new Date(b.date) - new Date(a.date));
            case 'Titre':
                return copy.sort((a, b) => a.title.localeCompare(b.title));
            default:
                return copy;
        }
    }, [medias, sortBy]);

    return (
        <>
            <Tri>
                <p id="sort-label">Trier par</p>
                <DropDown 
                    options={['Popularité', 'Date', 'Titre']} 
                    onSortChange={setSortBy} 
                />
                <VisuallyHiddenAnnouncement aria-live="polite">
                    Trié par {sortBy}
                </VisuallyHiddenAnnouncement>
            </Tri>
            <PicturePresentationGrid>
                {sortedMedias.map((media, index) => (
                    <PictureFrame 
                        key={media.id} 
                        media={media} 
                        allMedias={sortedMedias} 
                        index={index} 
                        onLikeChange={onLikeChange}
                    />
                ))}
            </PicturePresentationGrid>
        </>
    );
};

export default GallerySection;

const Tri = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    width: 100%;
    height: 4rem;
    padding: 2rem 0;
    font-size: 18px;
    font-weight: 700;
    color: black;
    & p {
        margin-right: 2rem;
    }
`;

const VisuallyHiddenAnnouncement = styled.span`
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

const PicturePresentationGrid = styled.div`
    padding: 5rem 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(25%, 1fr));
    gap: 7rem;
    justify-items: center;
    align-items: center;
`;