import styled from "styled-components";

const DropDown = () => {
    return (
        <DropDownMenu>
            <option value="option1">Popularité</option>
            <option value="option2">Date</option>
            <option value="option3">Titre</option>
        </DropDownMenu>
    );
};

export default DropDown;

const DropDownMenu = styled.select`
    background-color: #901c1c;
    width: 170px;
    height: 69px;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    font-weight: 700;
    padding: 0 15px;
    &:focus {
        outline: none;
        border: 2px solid #D3573C;
    }
`;
