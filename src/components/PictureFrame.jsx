import styled from 'styled-components';
import Image from 'next/image';

import LikeButton from '@/components/LikeButton'

const PictureFrame = () => {
    return (
        <PictureFrameContainer>
            <PhotographyFrame>
                <Image 
                    src="/Travel_Bridge_into_Forest.jpg" 
                    alt="Description of the image" 
                    width={300} 
                    height={200} 
                />    
            </PhotographyFrame>
            <PictureData>
                <PictureName>
                    Mariage à la mer
                </PictureName>
                <LikeButton mediaLikes={120} />
            </PictureData>
        </PictureFrameContainer>
    );
};

export default PictureFrame;

const PictureFrameContainer = styled.div`
    width : 350px;
    height: 350px;
    display: flex;
    flex-direction: column;
`;

const PhotographyFrame = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 5px;
    overflow: hidden;
    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const PictureData = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const PictureName = styled.p`
    font-size: 24px;
`;