import styled from 'styled-components';
import UserPicture from './UserPicture';

const PhotographerLink = ({ photographer }) => {
    return (
        <PhotographerLinkContainer>
            <ProfilePictureContainer>
                <UserPicture photographer={photographer} />
            </ProfilePictureContainer>
            <PhotographerInfoContainer>
                <Name>{photographer.name}</Name>
                <Place>{photographer.city}, {photographer.country}</Place>
                <Description>{photographer.tagline}</Description>
                <Price>{photographer.price}€/jour</Price>
            </PhotographerInfoContainer>
        </PhotographerLinkContainer>
    );
};

export default PhotographerLink;

const PhotographerLinkContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 33%;
    height: 310px;
    align-items: center;
`;

const ProfilePictureContainer = styled.div`
    width: 200px;
`;

const PhotographerInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    align-items: center;
`;

const Name = styled.h2`
    font-size: 36px;
    color: #D3573C;
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