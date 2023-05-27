import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
  padding: 20px;
  /* outline: none; */
  /* overflow: hidden; */
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 100;
  opacity: 0;
  pointer-events: none;
  transition: 0.5s;
  
  &.active {
    /* transform: scale(1); */
    opacity: 1;
    pointer-events: all;
  }
`;

export const Modal = styled.div`
position: relative;
background-color: ${({ theme }) => theme.body};
width: 280px;
padding: 20px;
border-radius: 20px;
transform: scale(0.5);
transition: 0.4s all;
  &.activeModal {
    transform: scale(1);
    
  }
@media screen and (min-width: 768px) {
    width: 704px;
    border-radius: 40px;
    padding: 40px;
  }
  /* max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px); */

  @media screen and (min-width: 1280px) {
    width: 850px;
  }
`;

export const ContBtn = styled.div`
  position: absolute;
  justify-content: center;
  top: -5px;
  right: -20px;
  @media screen and (min-width: 768px ){
    top: 5px;
    right: -2px;
  } 

  /* @include tablet {
    top: -40px;
    right: -74px;
  } */

  /* @include desktop {
    top: -30px;
    right: -60px;
  } */
`;

export const ContClose = styled.div`
  cursor: pointer;
  position: relative;
  height: 68px;
  width: 50px;
  &:hover div:first-of-type {
  transform: rotate(-45deg);
  background-color: ${({ theme }) => theme.accentColor};
}
  &:hover div:last-of-type {
  transform: rotate(45deg);
  background-color: ${({ theme }) => theme.accentColor};
}
`
export const LeftRight = styled.div`
  position: absolute;
  margin-top: 24px;
  background-color: ${({ theme }) => theme.accentBackground};
  border-radius: 2px;
  transform: rotate(45deg);
  transition: all 0.3s ease-in;
  height: 3px;
  width: 20px;

  @media screen and (min-width: 768px ){
    height: 3px;
    width: 25px;
  }

  /* @include desktop {
    height: 3px;
    width: 30px;
  } */ 
`;

export const RightLeft = styled.div`
  position: absolute;
  margin-top: 24px;
  background-color: ${({ theme }) => theme.accentBackground}; 
  border-radius: 2px;
  transform: rotate(-45deg);
  transition: all 0.3s ease-in;
  height: 3px;
  width: 20px;
  
  @media screen and (min-width: 768px ){
    height: 3px;
    width: 25px;
  };

  /* @include desktop {
    height: 3px;
    width: 30px;
  }  */
`;

export const Title = styled.h2`
font-weight: 700;
text-align: center;
margin-bottom: 20px;
@media screen and (min-width: 768px) {
  margin-bottom: 30px;
  font-size: 30px;
}
`;

export const DiscriptionCont = styled.div`

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }

`;

export const Img = styled.img`
  display: block;
  width: 210px;
  /* height: 160px; */
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  @media screen and (min-width: 768px){
    width: 305px;
    height: 290px;
    margin-right: 20px;
    margin-bottom: 0px;
    overflow: cover;
  };

  @media screen and (min-width: 1280px) {
    height: 290px;
  }
`;

export const Text = styled.p`
font-size: 16px;
margin-bottom: 20px;
@media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const TechTitle = styled.p`
font-weight: 600;
font-size: 20px;
text-align: center;
margin-bottom: 10px;
@media screen and (min-width: 768px) {
  font-size: 22px;
  }
`;

export const Technology = styled.p`
margin-bottom: 20px;
@media screen and (min-width: 768px) {
  font-size: 18px;
  }
`;

export const LinkCont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
  justify-content: space-around;
  margin-bottom: 0px;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: inherit;
  background-color: ${({ theme }) => theme.accentColor};
  padding: 4px;
  border-radius: 10px;
  box-shadow: ${({theme}) => theme.boxShadow};
  transition: 0.4s all;
  &:hover,
  :focus {
    transform: scale(1.2);
  }
  @media screen and (min-width: 768px) {
  padding: 10px;
  font-size: 18px;
  }
`