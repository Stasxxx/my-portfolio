import styled from 'styled-components';

export const Div = styled.div`
 /* padding: 15px 15px; */
  width: 80px;
  height: 80px;

  @media screen and (min-width: 768px){
    width: 140px;
    height: 140px;
    padding: 15px 15px;
  }
/* @media (min-width: 1280px) {
  padding: 15px 15px;
  width: 140px;
  height: 140px;
    } */
  /* padding: 15px 15px;
  width: 140px;
  height: 140px; */
`;

export const Img = styled.img`
width: 50px;
height: 50px;
margin-left: auto;
margin-right: auto;

/* @media screen and (min-width: 768px){
  display: block;
margin-left: auto;
margin-right: auto; */
/* width: 100px;
height: 100px; */
/* } */
@media (min-width: 768px) {
display: block;
margin-left: auto;
margin-right: auto;
width: 100px;
height: 100px;
}
`;