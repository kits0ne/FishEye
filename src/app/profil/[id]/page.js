import styled from 'styled-components';

import DropDown from '@/components/DropDown'
import Logo from '@/components/Logo'
import PhotographerHeader from '@/components/PhotographerHeader'
import PictureFrame from '@/components/PictureFrame'

import { getAllPhotographers } from '@/app/lib/prisma-db'
import { getAllMediasForPhotographer } from '@/app/lib/prisma-db'

const photographers = await getAllPhotographers();

export async function generateMetadata({ params }) {
    const { id } = await params
    const photographer = photographers.find(p => p.id === Number(id))

    if (!photographer) {
        return { title: 'Photographe non trouvé' }
    }

    if (!photographer) {
        return { title: 'Photographe non trouvé' }
    }

    return {
        title: `${photographer.name} | FishEye`,
        description: photographer.tagline,
        openGraph: {
            title: photographer.name,
            description: photographer.tagline,
            images: [`/${photographer.portrait}`],
        },
    }
}

export default async function PhotographerPage({ params }) {
    const { id } = await params;
    const photographer = photographers.find(p => p.id === Number(id));

    const medias = await getAllMediasForPhotographer(photographer.id);

    return (
        <PhotographerPageContainer>
            <IndexBanner>
                <LogoWrapper><Logo /></LogoWrapper>
            </IndexBanner>
            <PhotographerHeader photographer={photographer} />
            <Tri>
                <p>Trier par</p>
                <DropDown options={['Popularité', 'Date', 'Titre']} />
            </Tri>
            <PicturePresentationGrid>
                {medias.map((media, index) => (
                    <PictureFrame key={media.id} media={media} allMedias={medias} index={index} />
                ))}
            </PicturePresentationGrid>
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

const IndexBanner = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 8rem;
`;

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

const PicturePresentationGrid = styled.div`
    padding: 5rem 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(25%, 1fr));
    gap: 7rem;
    justify-items: center;
    align-items: center;
`;