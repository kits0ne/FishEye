import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return (
        <HomeLink>
            <PhotographerLink 
                href="/"
                aria-label="Retour à la page d'accueil"
            >
                <LogoImg 
                    src="/Logo.png" 
                    alt="" 
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
    &:focus-visible {
        outline: 3px solid #901C1C;
        outline-offset: 2px;
        border-radius: 4px;
    }
`

const LogoImg = styled(Image)`
    width: 100%;
`