import styled from 'styled-components';
import Logo from '@/components/Logo'
import PhotographerLink from '@/components/PhotographerLink'

import { getAllPhotographers } from '@/app/lib/prisma-db'

const photographers = await getAllPhotographers();

export default function Home() {
    return (
        <IndexContainer>
            <IndexBanner>
                <LogoWrapper><Logo /></LogoWrapper>
                <IndexTitle>Nos photographes</IndexTitle>
            </IndexBanner>
            <PhotographersPresentationGrid>
                {photographers.map((photographer) => (
                    <PhotographerLink key={photographer.id} photographer={photographer} />
                ))}
            </PhotographersPresentationGrid>
        </IndexContainer>
    );
}

const IndexContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const LogoWrapper = styled.div`
    width: 200px;
`;

const IndexBanner = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 6rem;
    height: 8rem;
`;

const IndexTitle = styled.h1`
    font-size: 36px;
    color: #901C1C;
`;

const PhotographersPresentationGrid = styled.div`
    padding: 5rem 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(25%, 1fr));
    gap: 7rem;
    justify-items: center;
    align-items: center;
`;