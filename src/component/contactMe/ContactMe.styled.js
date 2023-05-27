import styled from 'styled-components';

export const Footer = styled.footer`
/* width: 1280px; */
position: relative;
flex: 0 0 auto;
padding: 40px 0 40px;
margin-left: auto;
margin-right: auto;
`;

export const Title = styled.h2`
font-size: 24px;
text-align: center;
padding-bottom: 20px;

@media screen and (min-width: 1280px) {
   font-size: 36px;
}
`;

export const ContactsList = styled.ul`
display: flex;
flex-wrap:wrap;
width: 250px;
margin-left: auto;
margin-right: auto;
justify-content: center;
align-items: center;

@media screen and (min-width: 450px) {
   flex-wrap: nowrap;
   width: 450px;
}

`;

export const Item = styled.li`
   &:not(:first-child) {
      margin-left: 20px;
   };

   &:nth-child(4){
      margin-left: 0px;
   };

   @media screen and (min-width: 450px) {
   
      &:nth-child(4){
      margin-left: 20px;
      };
}
`;

export const Link = styled.a`
text-decoration: inherit;
color: inherit;
margin-left: auto;
margin-right: auto;
`;

export const Img = styled.img`
margin-left: auto;
margin-right: auto;
`;

export const Text = styled.p`
text-align: center;
`