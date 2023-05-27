import {techSkills} from '../../skills';
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
// import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import { Cont, Title, SwiperWrapper, SlideSwiper } from './SliderSkills.styled';

import { TechSkill } from 'component/techSkills/TechSkills';
// import "./styles.css";

export const SliderSkills = () => {
    const params = {
        slidesPerView: "auto",
        spaceBetween: 70,
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        coverflowEffect:{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                    },
        pagination: true,
        navigation: true,
        
    };
    return ( 
        <>
        <Cont >
            <Title style={{}}>My skills</Title>
                <SwiperWrapper {...params}
                    // spaceBetween={70}
                    // effect={"coverflow"}
                    // grabCursor={true}
                    // centeredSlides={true}
                    // slidesPerView={"auto"}
                    // coverflowEffect={{
                    // rotate: 50,
                    // stretch: 0,
                    // depth: 100,
                    // modifier: 1,
                    // slideShadows: true,
                    // }}
                    // pagination={true}
                    // navigation={true}
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <div style={{}}>
                    {techSkills.map((item) => (
                        <SlideSwiper key={item.id}>
                            <TechSkill skill={item} />
                        </SlideSwiper>
                    ))}
                    </div>
            </SwiperWrapper>
        </Cont>
            </>
     );
}
