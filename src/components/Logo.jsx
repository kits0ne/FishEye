import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return (
        <HomeLink>
            <PhotographerLink href="/">
                {/* Le alt donne son nom au lien : c'est la seule image qu'il contient */}
                <LogoImg
                    src="/Logo.png"
                    alt="FishEye - Retour à la page d'accueil"
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