import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
        --display-background-color: #a7af7c;
        --keys-text-color: #fff;
        --key-light-text-color: rgb(211, 193, 1);
    }

    [data-theme="dark"] {
        --display-background-color: #191919;
        --key-light-text-color: rgb(207, 207, 207);
    }

    *, body{
        margin: 0;
        padding: 0;
    }
`