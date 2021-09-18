import styled from 'styled-components';

export const IMG = styled.img `
  width: 800.15px;
  height: 198.45px;
  margin-top: 20px;
  display: inline-block;
  
`;

export const Container = styled.div `
  width: 800.15px;
  overflow: hidden;
    height:750.513px;
    margin-top: 3%;
    margin-left:10%;

`;
export const ButtonP = styled.button `
width: 280px;
text-decoration: none;
dispay: flex;
-webkit-box-pack: center;
justify-content: center;
-webkit-box-align: center;
align-items: center;

height: 56px;
border-radius: 5px;
text-transform: uppercase;
border: 2px solid rgb(114, 124, 255);
cursor: pointer;
background-color: transparent;
transition: all 0.1s ease-in 0s;
  &:hover {
    background-color: rgb(28, 26, 40);
  }
`;


export const ButtonN = styled.button `
width: 280px;
height: 56px;
border-radius: 5px;
text-transform: uppercase;
border: none;
cursor: pointer;
background-color: rgb(114, 124, 255);
transition: all 0.1s ease-in 0s;
`;


export const SliderContainer = styled.div `
  width: 800.15px;
  display:flex;
  box-sizing: border-box;
`;