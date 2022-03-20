import { createGlobalStyle } from 'styled-components';
import BackgroundImage from '../assets/images/background.jpg';

export default createGlobalStyle`

    html {
        height: 100%;
        background: url(${BackgroundImage}) no-repeat center center fixed;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        font-family: Arial, Helvetica, sans-serif;
    }

`;



