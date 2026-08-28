import styled from 'styled-components';

const PhotographerProfile = () => {
    return (
        <PhotographerProfileContainer>
            <Name>Photographer Profile</Name>
            <Place>This is a simple photographer profile component.</Place>
            <Description>Description of the photographer.</Description>
        </ PhotographerProfileContainer>
    );
};

export default PhotographerProfile;

const PhotographerProfileContainer = styled.div`
    width : 358px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: left;
`;

const Name = styled.h1`
    font-size: 34px;
    color: #D3573C;
`;

const Place = styled.p`
    font-size: 24px;
`;

const Description = styled.p`
    font-size: 18px;
    color: #525252;
`;