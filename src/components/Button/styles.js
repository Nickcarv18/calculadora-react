import styled from "styled-components";

export const ButtonContainer = styled.button`
    background-color: #2f2f2f;
    padding: 16px;

    font-size: 20px;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    text-align: center;
    text-shadow: #000 0 -1px 0;
    color: var(--keys-text-color);

    border: 1px solid #2f2f2f;
    border-radius: 8px;
    -webkit-box-shadow: inset 0 0 15px -4px #000000;
    box-shadow: inset 0 0 15px -4px #000000;
    flex: 1;

    margin: 8px;

    &:hover{
        opacity: 0.6;
    }

    &.clear{
        color: red;
    }

    &.equal{
        background-color: #501010;
    }

    &.lightMode{
        font-weight: normal;
        color: var(--key-light-text-color);
    }
`;