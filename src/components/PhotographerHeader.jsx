import PhotographerProfile from '@/components/PhotographerProfile'
import CTA from '@/components/CTA'
import UserPicture from '@/components/UserPicture'
import styled from 'styled-components';

const PhotographerHeader = ({photographer}) => {
    return (
        <PhotographerBanner>
            <PhotographerProfile photographer={photographer} />
            <CTA inscription="Contactez-moi" />
            <ProfilePicContainer>
                <UserPicture photographer={photographer} />
            </ProfilePicContainer>
        </PhotographerBanner>
    );
};

export default PhotographerHeader;

const PhotographerBanner = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 313px;
    background-color: #FAFAFA;
    padding: 50px;
    margin: 0 auto;
`;

const ProfilePicContainer = styled.div`
    width: 200px;
    height: 200px;
`;