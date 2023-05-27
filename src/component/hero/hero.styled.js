import styled from "styled-components";

export const ContHero = styled.div`
  padding-top: 80px;
  display: flex;
  flex-direction:column-reverse;
@media screen and (min-width: 1280px){
  width: 1280px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
  margin-left: auto;
  margin-right: auto;
}
`;

export const TextCont = styled.div`
  margin-top: 20px;
`;

export const Text = styled.p`
  font-size: 16px;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  };

  @media screen and (min-width: 1280px) {
    font-size: 28px;
    &:last-of-type {
        margin-left: 112px;
        text-align: left;
    }
  };

`;

export const TextHeroName = styled.p`
  text-align: center;
  font-size: 26px;
  margin-top: 5px;
  margin-bottom: 5px;

  @media screen and (min-width: 768px) {
    font-size: 48px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 55px;
  }

`

export const Name = styled.span`
display: inline-block;
text-align: left;
width: 201px;
color: ${({ theme }) => theme.accentColor};
animation: ${({changeTheme}) => changeTheme === "dark" ? "Hiro 2.0s infinite alternate" : null};

 @keyframes Hiro {
  0%, 18%, 22%, 25%, 53%, 57%, 100% {
    text-shadow:
      3px 3px 2px #8A2BE2,
      3px 3px 6px #8A2BE2,
      3px 3px 9px #8A2BE2,
      3px 3px 20px #8A2BE2,
      3px 3px 40px #8A2BE2,
      3px 3px 45px #8A2BE2,
      3px 3px 50px #8A2BE2,
      3px 3px 70px #8A2BE2;
  }
  20%, 24%, 55% {       
    text-shadow: none;
  }
};

@media screen and (min-width: 768px){
  width: 300px;
}

@media screen and (min-width: 1280px) {
  width: auto;
    @keyframes Hiro {
  0%, 18%, 22%, 25%, 53%, 57%, 100% {
    text-shadow:
      6px 6px 4px #8A2BE2,
      6px 6px 11px #8A2BE2,
      6px 6px 19px #8A2BE2,
      6px 6px 40px #8A2BE2,
      6px 6px 80px #8A2BE2,
      6px 6px 90px #8A2BE2,
      6px 6px 100px #8A2BE2,
      6px 6px 150px #8A2BE2;
  }
  20%, 24%, 55% {       
    text-shadow: none;
  }
}
  }

`;

export const PhotoCont = styled.div`
position: relative;
margin-left: auto;
margin-right: auto;
@media screen and (min-width: 1280px){
  margin-left: 150px;
  margin-right: 0;
}
`;

export const ImgHero = styled.img`
  width: 150px;
  border-radius: 30%;

  @media screen and (min-width: 768px) {
    width: 200px;
  }

  @media screen and (min-width: 1280){
    width: 250px;
    border-top-left-radius: 20%;
    border-top-right-radius: 20%;
    border-bottom-right-radius: 20%;
    border-bottom-left-radius: 20%;
  }

`;