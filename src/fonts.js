import { createGlobalStyle } from "styled-components";
import charlemagne from "./charlemagne.otf";

export default createGlobalStyle`
    @font-face {
        font-family: 'Charlemagne';
        src: local('charlemagne');
        url(${charlemagne}) format('otf');
        font-weight: 300;
        font-style: normal;
    }
`;