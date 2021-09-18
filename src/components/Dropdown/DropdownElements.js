import styled from 'styled-components';

export const Icon = styled.div `
    display:block;
    position: absolute;
    padding-right:2px;
    position: relative;
    cursor: pointer;
`;

export const Wrapper = styled.div `
margin-top: 10px;
padding-top: 10%;
padding-right: 50%;
background-color: #0e0d14;
border: 1px solid ;
box-shadow: 0px 5px 10px 5px ;
border-radius: 5px;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
position: absolute;
z-index: 1;
`;

export const Languages = styled.ul `
padding: 0;
margin: 0;
height: 280px;
width:174px;
color: #aba9c7;
font-size: 12px;
font-style: bold;
`;

export const LanguageElement = styled.li `
padding: 5px 5px;
display: flex;
align-items: center;
border-radius: 2px;

cursor: pointer;
&:hover {
    background-color: #4a495a;
    color: #fff;
}
`;

export const LanguageImage = styled.img `
height: 18px;
margin-right: 16px;
`;