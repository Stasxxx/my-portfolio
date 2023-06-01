import styled from 'styled-components';
// import { NavLink } from 'react-router-dom';


export const Section = styled.section`
  padding-top: 80px;

  @media screen and (min-width: 1280px){
  width: 1280px;
  /* display: flex; */
  /* flex-direction: row; */
  /* justify-content: center; */
  /* align-items: center; */
  padding-top: 100px;
  margin-left: auto;
  margin-right: auto;
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

export const Cont = styled.div`
margin-right: auto;
margin-left: auto;
padding-left: 20px;
padding-right: 20px;
  @media screen  and (min-width: 1280px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }

`;

export const TextCont = styled.div`

@media screen  and (min-width: 1280px) {
  margin-right: 35px;
}

`;

export const Text = styled.p`
  font-size: 18px;
  text-align: center;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  };

  @media screen and (min-width: 1280px) {
    font-size: 28px;
    margin-bottom: 30px;
    /* margin-right: 35px; */

    /* &:last-of-type {
        margin-left: 112px;
        text-align: left;
    } */
  };
`; 

export const Link = styled.a`
  text-decoration: inherit;
  
`;

export const DownloadBtn = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 10px;
  padding: 5px 10px;
  border: none;
  color: ${({ theme, changeTheme }) => changeTheme === "dark" ? theme.accentColor : theme.accentText};
  background-color: ${({ theme, changeTheme }) => changeTheme === "dark" ? theme.accentText : theme.accentColor};
  animation: ${({changeTheme}) => changeTheme === "dark" ? "pulsate 2.5s infinite alternate" : "none"};
    text-shadow: ${({changeTheme}) => changeTheme === "dark" ? 
        `0 0 7px ${({ theme }) => theme.accentColor},
        0 0 10px ${({ theme }) => theme.accentColor},
        0 0 21px ${({ theme }) => theme.accentColor},
        0 0 42px ${({ theme }) => theme.accentColor},
        0 0 82px ${({ theme }) => theme.accentColor},
        0 0 92px ${({ theme }) => theme.accentColor},
        0 0 102px ${({ theme }) => theme.accentColor},
        0 0 151px ${({ theme }) => theme.accentColor};` : "none" };

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 28px;

    padding: 10px 15px;
    margin-bottom: 30px;
    
  };
`;

export const Img = styled.img`
    margin-left: auto;
    margin-right: auto;
    width: 350px;
    border-radius: 20px;
    margin-bottom: 20px;
`;


