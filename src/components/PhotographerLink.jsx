import styled from 'styled-components';
import UserPicture from './UserPicture';
import Link from 'next/link';

const PhotographerLink = ({ photographer }) => {
    return (
        <PhotographerLinkContainer>
            <PhotographerLinkClic href={`/profil/${photographer.id}`} passHref>
                <ProfilePictureContainer>
                    <UserPicture photographer={photographer} />
                </ProfilePictureContainer>
                <Name>{photographer.name}</Name>
            </PhotographerLinkClic>
            <PhotographerInfoContainer>
                <Place>{photographer.city}, {photographer.country}</Place>
                <Description>{photographer.tagline}</Description>
                <Price>{photographer.price}€/jour</Price>
            </PhotographerInfoContainer>
        </PhotographerLinkContainer>
    );
};

export default PhotographerLink;

const PhotographerLinkContainer = styled.article`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 310px;
    align-items: center;
`;

const PhotographerLinkClic = styled(Link)`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
`

const ProfilePictureContainer = styled.div`
    width: 200px;
    height: 200px;
`;

const PhotographerInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Name = styled.h2`
    font-size: 36px;
    color: #D3573C;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis; // ajoute "..." si ça dépasse
    max-width: 100%;
    padding-top: 20px;
`;

const Place = styled.p`
    font-size: 13px;
    color: #901C1C;
`;

const Description = styled.p`
    font-size: 10px;
    color: #000000;
`;

const Price = styled.p`
    font-size: 9px;
    color: #757575;
`;