import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


export const Header = styled.header`
position: fixed;
width: 100%;
z-index: 5;
background-color: ${({ theme }) => theme.body};
@media screen and (min-width: 1280px){
  /* width: 1280px;
  margin-left: auto;
  margin-right: auto; */
}
`;

export const Cont = styled.div`
padding-left: 15px;
padding-right: 15px;
display: flex;
overflow: hidden;
@media screen and (min-width: 1280px){
  width: 1280px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
}
`;

export const LogoCont = styled(NavLink)`
  display: flex;
  align-items: center;
  font-size: 16px;
  text-decoration: inherit;
  color: ${({ theme }) => theme.accentColor};
  text-shadow:  ${({changetheme}) => changetheme === "dark" ? 
  `0 0 7px ${({ theme }) => theme.accentColor},
   0 0 10px ${({ theme }) => theme.accentColor},
   0 0 21px ${({ theme }) => theme.accentColor},
   0 0 42px ${({ theme }) => theme.accentColor}, 
   0 0 82px ${({ theme }) => theme.accentColor}, 
   0 0 92px ${({ theme }) => theme.accentColor}, 
   0 0 102px ${({ theme }) => theme.accentColor}, 
   0 0 151px ${({ theme }) => theme.accentColor};`
  : "none"};
  

  padding: 20px 0 20px;
  animation: ${({changetheme}) => changetheme === "dark" ? "logo 1.5s infinite alternate" : "none"};

    @keyframes logo {
    100% {
        text-shadow:
        0 0 4px #8A2BE2,
        0 0 11px #8A2BE2,
        0 0 19px #8A2BE2,
        0 0 40px #8A2BE2,
        0 0 80px #8A2BE2,
        0 0 90px #8A2BE2,
        0 0 100px #8A2BE2,
        0 0 150px #8A2BE2;
        };

    0% {       
        text-shadow:
      0 0 2px #8A2BE2,
      0 0 4px #8A2BE2,
      0 0 6px #8A2BE2,
      0 0 10px #8A2BE2,
      0 0 45px #8A2BE2,
      0 0 55px #8A2BE2,
      0 0 70px #8A2BE2,
      0 0 80px #8A2BE2;
        };
    };

    @media screen and (min-width: 768px)  {
        font-size: 20px;
    }
`;

export const Nav = styled.nav`
margin-left: auto;
`;

export const NavButton = styled(NavLink)`
display: block;
text-decoration: inherit;
color: inherit;
font-weight: 700;
font-size: 32px;


&.active {
    width: 190px;
    padding: 5px 0px;
    border-radius: 15px;
    background-color: ${({ theme, changetheme }) => changetheme === "dark" ? "none" : theme.accentColor};
    color: ${({ theme, changetheme }) => changetheme === "dark" ? theme.accentColor : theme.accentText};
    animation: ${({changetheme}) => changetheme === "dark" ? "pulsate 2.5s infinite alternate" : "none"};
    text-shadow: ${({changetheme}) => changetheme === "dark" ? 
        `0 0 7px ${({ theme }) => theme.accentColor},
        0 0 10px ${({ theme }) => theme.accentColor},
        0 0 21px ${({ theme }) => theme.accentColor},
        0 0 42px ${({ theme }) => theme.accentColor},
        0 0 82px ${({ theme }) => theme.accentColor},
        0 0 92px ${({ theme }) => theme.accentColor},
        0 0 102px ${({ theme }) => theme.accentColor},
        0 0 151px ${({ theme }) => theme.accentColor};` : "none" };
    margin-left: auto;
    margin-right: auto;

      @media screen and (min-width: 768px) {
        width: 390px;
      }
      
      @media screen and (min-width: 1280px) {
        width: auto;
        padding: 5px 10px;
        border-radius: 15px;
        background-color: ${({ theme, changetheme }) => changetheme === "dark" ? "none" : theme.accentColor};
      }


};

    @keyframes pulsate {
    100% {
        text-shadow:
        0 0 4px ${({ theme }) => theme.accentColor},
        0 0 11px ${({ theme }) => theme.accentColor},
        0 0 19px ${({ theme }) => theme.accentColor},
        0 0 40px ${({ theme }) => theme.accentColor},
        0 0 80px ${({ theme }) => theme.accentColor},
        0 0 90px ${({ theme }) => theme.accentColor};
        /* 0 0 100px #18a7f1,
        0 0 150px #18a7f1; */
        };

    0% {    
        text-shadow:
        0 0 2px ${({ theme }) => theme.accentColor},
        0 0 4px ${({ theme }) => theme.accentColor},
        0 0 6px ${({ theme }) => theme.accentColor},
        0 0 10px ${({ theme }) => theme.accentColor},
        0 0 45px ${({ theme }) => theme.accentColor},
        0 0 55px ${({ theme }) => theme.accentColor},
        0 0 70px ${({ theme }) => theme.accentColor},
        0 0 80px ${({ theme }) => theme.accentColor};
        };
    };
    
    @media screen and (min-width: 1280px) {
    display: inline-block;
    font-size: 24px;
    padding-top: 20px;
    padding-bottom: 20px;

      &:not(:first-child){
        margin-left: 40px;
    };
  };
`;
