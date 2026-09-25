import styled from 'styled-components';
import { notFound } from 'next/navigation';

import Logo from '@/components/Logo'
import PhotographerHeader from '@/components/PhotographerHeader'
import PhotographerContent from '@/components/PhotographerContent'

import { getAllPhotographers } from '@/app/lib/prisma-db'
import { getAllMediasForPhotographer } from '@/app/lib/prisma-db'

const photographers = await getAllPhotographers();

export async function generateMetadata({ params }) {
    const { id } = await params
    const photographer = photographers.find(p => p.id === Number(id))

    if (!photographer) {
        return { title: 'Photographe non trouvé' }
    }

    return {
        title: `${photographer.name} | FishEye`,
        description: photographer.tagline,
    }
}

export default async function PhotographerPage({ params }) {
    const { id } = await params;
    const photographer = photographers.find(p => p.id === Number(id));

    // Id inconnu ou invalide : affiche la page 404 au lieu de planter
    if (!photographer) {
        notFound();
    }

    const medias = await getAllMediasForPhotographer(photographer.id);

    return (
        <PhotographerPageContainer>
            <IndexBanner>
                <LogoWrapper><Logo /></LogoWrapper>
            </IndexBanner>
            <PhotographerMain id="main-content" tabIndex={-1}>
                <PhotographerHeader photographer={photographer} />
                <PhotographerContent photographer={photographer} medias={medias} />
            </PhotographerMain>
        </PhotographerPageContainer>
    );
}

const PhotographerPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 6rem;
`;

const LogoWrapper = styled.div`
    width: 200px;
`;

const PhotographerMain = styled.main`
    display: flex;
    flex-direction: column;
`;

const IndexBanner = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 8rem;
`;