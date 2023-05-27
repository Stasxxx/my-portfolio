import styled from 'styled-components';

// export const Img = styled.img`
//   width: 300px;
// `;

export const CardCont = styled.li`
width: 280px;
margin-left: auto;
margin-right: auto;
overflow: hidden;
border-radius: 5%;
box-shadow: ${({ theme }) => theme.boxShadow};
transition-property: transform;
transition-duration: 300ms;
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
 &:not(:last-child) {
  margin-bottom: 30px;
 }
  @media screen and (min-width: 768px) {
    &:not(:last-child) {
    margin-bottom: 0px;
 }
    &:hover,
    &:focus {
      cursor: pointer;
      transform: scale(1.08);
    }
  }
  @media screen and (min-width: 1280px){
  width: 350px;
    &:hover,
    &:focus {
      transform: scale(1.08);
    }
  }
`
 
export const PhotoProj = styled.div`
width: 280px;
height: 280px;
background-image: url(${({ img }) => img});
margin-left: auto;
margin-right: auto;
background-size: cover;
background-position: -10px 0px;

@media screen and (min-width: 1280px){
  width: 350px;
  height: 350px;
  
  background-repeat: no-repeat;
  background-position: 0px, 0px;
    /* border: 2px solid #000; */
  background-size: 600px;
  background-position: -120px 0px;
}
  
`;

export const Name = styled.p`
text-align: center;
background-color: ${({theme}) => theme.accentBackground };
color: ${({ theme }) => theme.accentText};

padding: 10px 0;

/* border-top: 2px solid ${({theme}) => theme.accentColor}; */
`