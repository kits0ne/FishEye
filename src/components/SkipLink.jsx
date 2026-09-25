import styled from 'styled-components';

// Lien d'évitement : premier élément atteint avec Tab, il permet
// aux utilisateurs clavier et lecteur d'écran d'aller directement au contenu principal
const SkipLink = () => {
    return (
        <SkipLinkStyled href="#main-content">
            Aller au contenu
        </SkipLinkStyled>
    );
};

export default SkipLink;

const SkipLinkStyled = styled.a`
    position: absolute;
    top: -100px;
    left: 1rem;
    z-index: 10;
    padding: 0.75rem 1.5rem;
    background-color: #901C1C;
    color: white;
    font-weight: 700;
    border-radius: 0 0 5px 5px;
    &:focus {
        top: 0;
        outline: 3px solid #312E2E;
        outline-offset: 2px;
    }
`;
