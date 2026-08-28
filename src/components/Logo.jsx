import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return (
        <HomeLink>
            <Link href="/">
                <Image 
                src="/logo.png" 
                    alt="Logo" 
                    width={100} 
                    height={100} 
                />
            </Link>
        </HomeLink>
    );
};

export default Logo;

const HomeLink = styled.div`
    display: flex;
    align-items: center;
    text-decoration: none;
`