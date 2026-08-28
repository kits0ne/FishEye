import styled from "styled-components";

const CTA = ({ inscription }) => {
    return (
        <CTAButton>
            {inscription}
        </CTAButton>
    );
};

export default CTA;

const CTAButton = styled.button`
    background-color: #901c1c;
    width: 170px;
    height: 69px;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    font-weight: 700;
    &:hover {
        background-color: #D3573C;
        color: black;
    }
`;
