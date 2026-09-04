import styled from 'styled-components';

const PhotographerProfile = ({ photographer }) => {
    return (
        <PhotographerProfileContainer>
            <Name>{photographer.name}</Name>
            <Place>{photographer.city}, {photographer.country}</Place>
            <Description>{photographer.tagline}</Description>
        </ PhotographerProfileContainer>
    );
};

export default PhotographerProfile;

const PhotographerProfileContainer = styled.div`
    height: 200px;
    display: flex;
    flex-direction: column;
`;

const Name = styled.h1`
    font-size: 64px;
    color: #D3573C;
`;

const Place = styled.p`
    font-size: 24px;
    padding-bottom: 10px;
`;

const Description = styled.p`
    font-size: 18px;
    color: #525252;
    height: 100%;
`;