import styled from 'styled-components';

import { Swiper, SwiperSlide } from 'swiper/react';

export const Cont = styled.div`
width: 300px;
/* position: relative;  */
margin-left: auto; 
margin-right: auto; 
padding-top: 40px;

@media screen and (min-width: 768px){
  width: 600px;
};

/* @media (min-width: 1280px) {
width: 600px;

} */
`;

export const Title = styled.h2`
text-align: center;
font-size: 25px;
margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    font-size: 36px;
  }
`;

export const SwiperWrapper = styled(Swiper)`
    width: 300px;
    /* padding-top: 30px; */
    padding-bottom: 40px;

  @media (min-width: 768px) {
    width: 600px;
    padding-top: 50px;
    padding-bottom: 80px;
  };
`;

export const SlideSwiper = styled(SwiperSlide)`
    background-position: center;
    background-size: cover;
    width: 120px;
    height: 120px;

    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 768px) {
        width: 150px;
        height: 150px;
        padding-top: 0;
    }
`