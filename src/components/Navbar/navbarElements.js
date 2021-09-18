import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom'


export const NavbarContainer = styled.div `
    display: flex;
    justify-content: space-between;
    height: 500px;
    z-index: 1;
    width: 95%;
    padding-top: 20px;    
   
`;

export const NavLogo = styled(LinkR)
`
	left:0;
    padding-top: 10px;
    padding-left:25px;
        
`;


export const Icon = styled.div `

    position: absolute;
    padding-right:2px;
    position: relative;
    cursor: pointer;
`;
export const RoundButton = styled.button `
-moz-box-align: center;
align-items: center;
justify-content: center;
border-radius: 20px;
padding: 0px;
height: 40px;
width: 40px;
border: 1px solid rgb(38, 36, 57);
background-color: rgb(28, 26, 40);
position: relative;
  
cursor: pointer;
display: flex;

`;

export const Filler = styled.div `
  flex: 1;
`


export const LanguageButtonWrapper = styled.div `
	position: relative;

`;