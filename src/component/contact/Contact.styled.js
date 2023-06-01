import styled from 'styled-components';

export const Section = styled.section`
  padding-top: 80px;

  @media screen and (min-width: 1280px){
  width: 1280px;
  padding-top: 100px;
  margin-left: auto;
  margin-right: auto;
}
`;

export const Title = styled.h1`
font-size: 24px;
text-align: center;
padding-bottom: 20px;

@media screen and (min-width: 1280px) {
   font-size: 36px;
}
`;

export const Text = styled.p`
font-size: 18px;
text-align: center;
padding-left: 10px;
padding-right: 10px;
margin-bottom: 40px;
`;

export const LeftCont = styled.div`
  width: 280px;
  padding: 10px;
  border-radius: 20px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

export const TitleForm = styled.h2`
font-size: 20px;
text-align: center;
`;

export const Form = styled.form`
/* display: flex; */
`;

export const Label = styled.label`
display: block;
width: 260px;
margin-bottom: 20px;
`;

export const Input = styled.input`
    width: 260px;
    /* background-color: #dee1dd; */
    border: 2px solid #28363d;
    border-radius: 20px;
    box-shadow: 0 0 10px rgba(0,0,0,.5);
    color: #28363d;
    font-family: Nunito,sans-serif;
    font-size: 20px;
    /* font-weight: 700; */
    padding: 5px 15px;
    margin-top: 5px;
    &::placeholder {
      /* color: red; */
    }
`;

export const Textarea = styled.textarea`
    width: 260px;
    border: 2px solid #28363d;
    border-radius: 10px;
     font-size: 20px;
    /* font-weight: 700; */
    box-shadow: 0 0 10px rgba(0,0,0,.5);
    padding: 5px 15px;
    margin-top: 5px;
`;

