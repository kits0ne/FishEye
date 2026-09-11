import Image from 'next/image';
import styled from 'styled-components';

const UserPicture = ({ photographer }) => {
    const profilePicture = photographer?.portrait || '/Travel_HillsideColor.jpg';
    return (
        <PPContainer>
            <Image 
                src={`/${profilePicture}`} 
                alt="Profile Picture" 
                width={100} 
                height={100} 
            />
        </PPContainer>
    );
};

export default UserPicture;

const PPContainer = styled.div`
    width: 100%;
    height: 100%;
    
    border-radius: 50%;
    overflow: hidden;
    display: flex; 
    justify-content: center;
    align-items: center;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;