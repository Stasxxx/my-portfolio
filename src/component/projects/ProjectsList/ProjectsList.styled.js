import styled from 'styled-components';

export const Cont = styled.div`
  padding-top: 80px;
  margin-left: auto; 
  margin-right: auto;

  @media screen and (min-width: 768px) {
    padding-left: 15px;
    padding-right: 15px;
  }
 
@media screen and (min-width: 1280px) {
  width: 1280px;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
}
`;

export const Title = styled.h2`
text-align: center;
font-size: 25px;
margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    font-size: 36px;
  }
`;

export const List = styled.ul`

  @media screen and (min-width: 768px){
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px 30px;
  };

  @media screen and (min-width: 768px){
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 30px 30px;
  }
`