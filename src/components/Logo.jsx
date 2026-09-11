import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return (
        <HomeLink>
            <PhotographerLink href="/">
                <LogoImg 
                    src="/logo.png" 
                    alt="Logo" 
                    width={100} 
                    height={100} 
                />
            </PhotographerLink>
        </HomeLink>
    );
};

export default Logo;

const HomeLink = styled.div`
    display: flex;
    align-items: center;
    text-decoration: none;
`

const PhotographerLink = styled(Link)`
    width: 100%;
`

const LogoImg = styled(Image)`
    width: 100%;
`