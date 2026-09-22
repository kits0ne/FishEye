// components/PhotographerContent.jsx
'use client';

import { useState } from 'react';
import GallerySection from '@/components/GallerySection';
import PhotographerEncart from '@/components/PhotographerEncart';

const PhotographerContent = ({ photographer, medias }) => {
    const [mediasState, setMediasState] = useState(medias);

    const handleLikeChange = (mediaId, newCount) => {
        setMediasState((prev) =>
            prev.map((m) => (m.id === mediaId ? { ...m, likes: newCount } : m))
        );
    };

    return (
        <>
            <GallerySection medias={mediasState} onLikeChange={handleLikeChange} />
            <PhotographerEncart photographer={photographer} allMedias={mediasState} />
        </>
    );
};

export default PhotographerContent;