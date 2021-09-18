import styled from 'styled-components';
import { Link as LinkT } from 'react-router-dom';


export const Text = styled(LinkT)
`
width: 100%;
display: block;
background-color: rgb(14, 13, 20);
border-bottom: 2px ;
text-align: center;
color: rgb(70, 191, 137);
font-size: 1em;
font-weight: bold;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }

`;