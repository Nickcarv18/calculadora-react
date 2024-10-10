import styled from "styled-components";

export const InputContainer = styled.div`
    width: 100%;
    height: 75px;
    background-color: #1a1515;
    margin-bottom: 8px;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    font-size: 28px;
    font-family: "DS-Digital", sans-serif;

    input {
        width: 100%;
        height: 75px;
        background-color: var(--display-background-color);
        border: 0;
        -webkit-box-shadow: inset 0 0 15px -4px #000000;
        box-shadow: inset 0 0 15px -4px #000000;

        padding: 0 10px;
        margin: 0 8px;

        font-size: 40px;
        font-family: "DS-Digital", sans-serif;
        border-radius: 8px;
        color: rgb(91 91 87);
        text-align: end;
    }
`;